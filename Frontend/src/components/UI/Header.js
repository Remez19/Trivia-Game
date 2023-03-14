import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GoHome } from "react-icons/go";

import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container style={{ margin: 0 }}>
        <Navbar.Brand href="/" className="header-container">
          <GoHome size={"1.5rem"} style={{ paddingBottom: "0.1rem" }} /> Trivia
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
