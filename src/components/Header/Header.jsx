import { HeaderDiv, StyledLink, ContainerLinks, ContainerLogo } from "./Styles";

export default function Header() {
  return (
    <HeaderDiv>
      <ContainerLogo>Assistec</ContainerLogo>

      <ContainerLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cadastro">Cadastro</StyledLink>
        <StyledLink to="/perfil">Perfil</StyledLink>
      </ContainerLinks>
    </HeaderDiv>
  );
}
