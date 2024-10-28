import styled from "styled-components";

export const IssueContainer = styled.div`

	.wrapper {
		max-width: 54rem;
		margin: 0 auto;
		padding: 0 1.5rem;

		.issue-components{
			margin-top: calc(0px - 80px);

			.article-details{
				padding: 1.5rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex-wrap: wrap;
				color: #fff;
				font-size: 1rem;
				gap: 1rem;
				background-color: ${ props => props.theme['base-profile'] };
				height: 160px;
			}

			.article-body{
				padding: 1.5rem;
				color: #fff;
				font-size: 1rem;
				
				p{
					margin-bottom: 1rem;
				}

				pre{
					margin-bottom: 1rem;
					background-color: ${ props => props.theme['base-post'] };
					padding: 1rem;

					code{
						white-space: pre-wrap;
						word-wrap: break-word;
						font-size: 1rem;
					}
				}
			}
		}
	}


	.first-line{
		display: flex;
		justify-content: space-between;

		.link {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: #3294F8;
			text-transform: uppercase;
			font-weight: bold;
			text-decoration: none;
			font-size: 0.75rem;
		}
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