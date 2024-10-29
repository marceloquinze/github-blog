import styled from "styled-components";

export const SearchContainer = styled.div`
	padding: 4rem 0 0;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.5rem;

		h3 {
			font-size: 1.125rem;
			color: #fff;
		}
		span{
			font-size: 0.875rem;
		}
	}

	input {
		width: 100%;
		background-color: ${ props => props.theme['base-input'] };
		border: 1px solid ${ props => props.theme['base-border'] };
		border-radius: 6px;
		color: ${ props => props.theme['base-label'] };
		font-size: 1rem;
		padding: 0.5rem;

		&::placeholder {
			color: ${ props => props.theme['base-label'] };
		}
	}
`