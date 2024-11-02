import { Link } from "react-router-dom"
import { Issue } from "../.."
import { PostsContainer } from "./styles"
import Markdown from "react-markdown"
import { formatDistanceToNow } from 'date-fns'

interface IssuesProps{
	issue: Issue[]
}

export function Issues( {issue}: IssuesProps) {
	return (
		<PostsContainer className="posts-container">
			{issue.map( (item, index) => (
				<div className="item" key={index}>
					<div className="title">
						<div className="the-title">
							<h2>
								<Link to={`/issue/${item.number}`}>{item.title}</Link>
							</h2>
						</div>
						<div className="date"><span>
							{formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}
							</span></div>
					</div>
					<div className="body-text">
						<Markdown>
							{item.body.substring(0, 200) + '...'}
						</Markdown>
					</div>
				</div>
			))}
		</PostsContainer>
	)
}