import styled from "styled-components";

export const HomeContainer = styled.main`
	background-color: ${ props => props.theme['base-background'] };

	.wrapper {
		max-width: 54rem;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
`
