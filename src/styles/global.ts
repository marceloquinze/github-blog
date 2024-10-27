import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		line-height: 1.3;
	}

	body{
		background: ${(props) => props.theme.background};
		color: ${(props) => props.theme['base-text']};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Nunito', sans-serif;
		font-weight: 400;
		line-height: 160%;
		font-size: clamp(0.75rem, 1.5vw, 1.5rem);
	}

	main{
		min-height: calc(100vh - 296px);
	}

	img{
		max-width: 100%;
		height: auto;
	}
`