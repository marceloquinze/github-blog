import { HomeContainer } from "./styles";
import { Profile } from "./components/Profile";
import { api } from "../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { Posts } from "./components/Posts";

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

export interface Post {
	title: string
	body: string
	created_at: string
	number: number
	comments: number
	html_url: string
}

export function Home() {

	const [user, setUser] = useState<User>({} as User)
	const [post, setPost] = useState<Post[]>([])

	// Get my user
	const fetchUser = useCallback( async (query?: string) => {
		const response = await api.get('/users/marceloquinze', {
			params: {
				q: query
			}
		})
		setUser(response.data)
	}, [])

	// Get my posts (issues)
	const fetchPost = useCallback( async (query?: string) => {
		const response = await api.get('/repos/marceloquinze/github-blog/issues', {
			params: {
				q: query
			}
		})
		setPost(response.data)
	}, [])

	// Makes the queries work
	useEffect(() => {
		fetchUser()
		fetchPost()
	}, [fetchUser, fetchPost])
	
	// Verification only
	useEffect(() => {
		console.log(post)
	}, [post])

	return (
		<>
			<div className="wrapper">
				<Profile user={user}/>
			</div>
			<HomeContainer className="home-container">
				<div className="wrapper">
					<Posts post={post} />
				</div>
			</HomeContainer>
		</>
	)
}