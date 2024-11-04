import { HeaderContainer } from "./styles";
import Cover from "../../assets/Cover.svg";

export function Header() {
	return (
		<HeaderContainer className="header-container">
			<img src={Cover} alt="" />
		</HeaderContainer>
	)
}