import { SearchContainer } from "./styles";

export function Search() {
	return (
		<SearchContainer className="search-container">
			<div className="header">
				<h3>Publications</h3>
				<span className="num-publications">6 publications</span>
			</div>
			<input type="text" placeholder="Search for posts" />
		</SearchContainer>
	)
}