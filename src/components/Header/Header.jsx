import { HeaderDiv, StyledLink } from "./Styles";

export default function Header() {
  return (
    <HeaderDiv>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/cadastro">Cadastro</StyledLink>
      <StyledLink to="/perfil">Perfil</StyledLink>
    </HeaderDiv>
  );
}
