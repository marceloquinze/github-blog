import styled from "styled-components";

export const ProfileContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: #fff;
	font-size: 1rem;
	gap: 1rem;
	background-color: ${ props => props.theme['base-profile'] };
	max-width: 54rem;
	margin: 0 auto;
	padding: 1.5rem;

	.avatar{
		flex: 0 1 150px;
		margin: 0 auto;
	}

`
export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	h1{
		font-size: 1.5rem;
	}

	.name{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.link{
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: ${ props => props.theme.blue };
		text-transform: uppercase;
		font-weight: bold;
		text-decoration: none;
		font-size: 0.75rem;
	}
`
export const StatsContainer = styled.div`
	display: flex;
	gap: 2rem;

	@media screen and (width < 600px) {
		flex-direction: column;
		gap: 1rem;
	}

	.stats {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		svg{
			background-color: ${ props => props.theme['base-label'] };
			border-radius: 50%;
			color: ${ props => props.theme['base-profile'] } !important;
		}
	}
`