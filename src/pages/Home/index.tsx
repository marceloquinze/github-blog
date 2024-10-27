import { HomeContainer } from "./styles";
import { Profile } from "./components/Profile";
import { api } from "../../lib/axios";
import { useCallback, useEffect, useState } from "react";

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

export function Home() {

	const [user, setUser] = useState<User>({} as User)

	const fetchUser = useCallback( async (query?: string) => {
		const response = await api.get('/users/marceloquinze', {
			params: {
				q: query
			}
		})
		setUser(response.data)
	}, [])

	useEffect(() => {
		console.log(user)
	}, [user])

	useEffect(() => {
		fetchUser()
	}, [fetchUser])

	return (
		<HomeContainer className="home-container">
			<div className="wrapper">
				<Profile user={user}/>
			</div>
		</HomeContainer>
	)
}