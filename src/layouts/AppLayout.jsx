import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "./Styles";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
