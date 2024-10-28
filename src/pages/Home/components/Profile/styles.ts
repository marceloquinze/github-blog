import styled from "styled-components";

export const ProfileContainer = styled.div`
	display: flex;
	background-color: ${ props => props.theme['base-profile'] };
	padding: 2rem 2.5rem;
	color: #fff;
	font-size: 1rem;

	gap: 1rem;

	max-width: 54rem;
    margin: 0 auto;
    padding: 1.5rem;
    margin-top: calc(0px - 100px);

`
export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;
	flex-shrink: 0;
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