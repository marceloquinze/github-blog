import { DetailsContainer, ProfileContainer, StatsContainer } from "./styles";
import { User } from "../../index"
import { Buildings, GithubLogo, Link, Users } from "phosphor-react";

interface ProfileProps {
	user: User
}

export function Profile({ user }: ProfileProps) {
	return (
		<ProfileContainer className="profile-container">
			<div className="avatar">
				<img src={user.avatar_url} alt={user.name} />
			</div>
			<DetailsContainer className="details-container">
				<div className="name">
					<h1>{user.name}</h1>
					<a href={user.html_url} className="link">GitHub <Link size={16} /></a>
				</div>
				<div className="bio"><p>{user.bio}</p></div>
				<StatsContainer className="stats-container">
					<div className="user stats">
						<GithubLogo size={26} weight="fill" />
						<em>{user.login}</em>
					</div>
					<div className="company stats">
						<Buildings size={26} weight="fill" />
						<em>{user.company}</em>
					</div>
					<div className="followers stats">
						<Users size={26} weight="fill" />
						<em>{user.followers} followers</em>
					</div>
				</StatsContainer>
			</DetailsContainer>
		</ProfileContainer>
	)
}