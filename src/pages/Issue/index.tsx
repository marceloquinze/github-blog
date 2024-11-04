import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { IssueContainer, DetailsContainer, StatsContainer } from "./styles";
import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import { Issues } from "../Home";
import { formatDistanceToNow } from "date-fns"
import Markdown from "react-markdown";

export function Issue() {

	const { issueNumber } = useParams()

	const [issue, setIssue] = useState<Issues>({} as Issues)	

	const fetchIssue = useCallback(async () => {
		if (issueNumber) {
			try {
				const response = await api.get(
					`/repos/marceloquinze/github-blog/issues/${issueNumber}`
				);
				setIssue(response.data);
			} catch (error) {
				console.error("Error while fetching issue: ", error);
			}
		}
	}, [issueNumber]);

	useEffect(() => { fetchIssue() }, [fetchIssue])

	return (
		<IssueContainer className="issue-container">
			<div className="wrapper">
				<div className="issue-components">
					<div className="article-details">
						<div className="first-line">
							<div className="back">
								<a href="/" className="link">&lsaquo; Back</a>
							</div>
							<div className="link">
								<a href={issue.html_url} target="_blank" className="link">View on GitHub <Link size={16} /></a>
							</div>
						</div>
						<DetailsContainer className="details-container">
							<div className="name">
								<h1>{issue.title}</h1>
							</div>
							<StatsContainer className="stats-container">
								<div className="user stats">
									<GithubLogo size={26} weight="fill" />
									<em>{issue.user ? issue.user.login : ""}</em>
								</div>
								<div className="company stats">
									<Buildings size={26} weight="fill" />
									<em>{ issue.created_at && formatDistanceToNow(new Date(issue.created_at), { addSuffix: true })}</em>
								</div>
								<div className="followers stats">
									<Users size={26} weight="fill" />
									<em>{issue.comments} comments</em>
								</div>
							</StatsContainer>
						</DetailsContainer>
					</div>
					<div className="article-body">
						<Markdown>
							{issue.body}
						</Markdown>
					</div>
				</div>
			</div>
		</IssueContainer>
	)
}