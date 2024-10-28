import styled from "styled-components";

export const PostsContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    gap: 1.5rem;
	padding-block: 3rem;

	.item{
		background-color: ${props => props.theme["base-post"]};
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.title{
			display: flex;
			align-items: start;

			.the-title{
				color: #fff;
				font-size: 1.25rem;
			}
			.date{
				font-size: 0.875rem;
			}
		}

		.body-text{
			font-size: 1rem;
			/* pre{
				overflow-y: scroll;
    			font-size: 0.875rem;
 			   	margin-block: 1rem;
			} */
		}
	}

`