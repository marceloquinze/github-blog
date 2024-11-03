import { HomeContainer } from "./styles";
import { Profile } from "./components/Profile";
import { api } from "../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { Issues } from "./components/Issues";
import { Search } from "./components/Search";

export interface User {
	id: number
	name: string
	avatar_url: string
	bio: string
	login: string
	company: string
	followers: number
	html_url: string
}

export interface Issue {
	title: string
	body: string
	created_at: string
	number: number
	comments: number
	html_url: string
}

export function Home() {

	const [user, setUser] = useState<User>({} as User)
	const [query, setQuery] = useState<Issue[]>([])
	const [searchterm, setSearchterm] = useState<string>(() => {
		return localStorage.getItem('searchterm') || ''
	})

	// Get my user
	const fetchUser = useCallback( async (query?: string) => {
		const response = await api.get('/users/marceloquinze', {
			params: {
				q: query
			}
		})
		setUser(response.data)
	}, [])

	// Get all my posts (issues) to display all items by default on first page load
	const fetchIssue = useCallback(async () => {
		try {
			const response = await api.get('/repos/marceloquinze/github-blog/issues', {
				params: {
					labels: 'published'
				}
			});
			setQuery(response.data);
		} catch (error) {
			console.error('Error while fetching issues:', error); 
		}
	}, []);

	// Search for issues
	const searchIssue = useCallback( async (query: string) => {
		try {
			const response = await api.get('/search/issues', {
				params: {
					q: `${query} repo:marceloquinze/github-blog label:"published"`,
				},
			});
			// store all issues found in the search state
			setQuery(response.data.items)
			setSearchterm(query)
		} catch (error) {
			console.log(error);				
		}
	}, [])

	// Makes the queries work
	useEffect(() => {
		localStorage.setItem('searchterm', searchterm)

		if( searchterm ) {
			searchIssue(searchterm)
		} else {
			fetchIssue()
		}
		fetchUser() // runs on first page load
	}, [
		fetchUser, 
		fetchIssue, 
		searchterm
	])

	return (
		<>
			<HomeContainer className="home-container">
				<div className="wrapper">
					<div className="home-components">
						<Profile user={user}/>
						<Search 
							searchIssue={searchIssue} 
							numberOfIssues={query.length} 
							searchterm={searchterm}
						/>
						<Issues issue={query} />
					</div>
				</div>
			</HomeContainer>
		</>
	)
}