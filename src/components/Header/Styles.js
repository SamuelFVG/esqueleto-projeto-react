import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 4rem;
  justify-content: space-evenly;
  background-color: #171717;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: lightblue;
  }
`;
