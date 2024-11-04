import { HomeContainer } from "./styles";
import { Profile } from "./components/Profile";
import { api } from "../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { IssuesComp } from "./components/Issues";
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

export interface Issues {
	title: string
	body: string
	created_at: string
	number: number
	comments: number
	html_url: string
	user: User
}

export function Home() {

	const [user, setUser] = useState<User>({} as User)
	const [issues, setIssues] = useState<Issues[]>([])
	const [searchterm, setSearchterm] = useState<string>(() => {
		return localStorage.getItem('searchterm') || ''
	})

	// Get my user
	const fetchUser = useCallback( async (query?: string) => {
		// If we don't use a useCallback, the function will be recreated on every render and Axios will raise a 400-range error
		// useCallback prevents the function from being recreated in memory when no information that the function depends on is changed
		try{
			const response = await api.get('/users/marceloquinze', {
				params: {
					q: query
				}
			})
			setUser(response.data)
		} catch (error) {
			console.error('Error while fetching user:', error); 
		}
	}, 
	// Dependency array: what we pass to it determines if the function will be recreated
	// if it is left empty, the function will never be recreated in memory
	[])

	// Get all my posts (issues) to display all items by default on first page load
	const fetchIssues = useCallback(async () => {
		try {
			const response = await api.get('/repos/marceloquinze/github-blog/issues', {
				params: {
					labels: 'published'
				}
			});
			setIssues(response.data);
		} catch (error) {
			console.error('Error while fetching issues:', error); 
		}
	}, []);

	// Search for issues
	const searchIssue = useCallback( async (query: string) => {
		try {
			const response = await api.get('/search/issues', {
				params: {
					// query comes from the search input term (searchterm state)
					q: `${query} repo:marceloquinze/github-blog label:"published"`,
				},
			});
			// store all issues found in the issues state.
			// this will cause the component to re-render and display the found issues instead of the default ones
			setIssues(response.data.items)
			// update the local storage with the search term
			setSearchterm(query)
		} catch (error) {
			console.log(error);				
		}
	}, [issues, searchterm])

	// Makes the queries work
	useEffect(() => {
		localStorage.setItem('searchterm', searchterm)

		if( searchterm ) {
			searchIssue(searchterm)
		} else {
			fetchIssues()
		}
		fetchUser() // runs on first page load
	}, [
		fetchUser, 
		fetchIssues, 
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
							numberOfIssues={issues.length} 
							searchterm={searchterm}
						/>
						<IssuesComp issue={issues} />
					</div>
				</div>
			</HomeContainer>
		</>
	)
}