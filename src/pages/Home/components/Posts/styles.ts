import styled from "styled-components";

export const PostsContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    gap: 1.5rem;
	padding-block: 3rem;

	@media screen and (width < 768px) {
		grid-template-columns: repeat(1, minmax(0px, 1fr));
	}

	.item{
		background-color: ${props => props.theme["base-post"]};
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.title{
			display: flex;
			align-items: start;
			gap: 1rem;

			.the-title{
				color: #fff;
				font-size: 1.25rem;
			}
			.date{
				font-size: 0.875rem;
				text-align: right;
			}
		}

		.body-text{
			font-size: 1rem;
		}
	}

`