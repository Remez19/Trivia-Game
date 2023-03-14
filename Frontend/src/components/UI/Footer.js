import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import "./Footer.css";
import MyCV from "../../files/Remez_David_-_Junior_Software_Engineer.pdf";

function Footer() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="bottom"
      style={{ justifyContent: "center" }}
    >
      <Container
        style={{
          margin: 0,
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <Nav.Link
          href="https://github.com/Remez19"
          target="_blank"
          className="link-container"
        >
          <FaGithub size={"2rem"} />
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.linkedin.com/in/remez-david-881972184/"
          className="link-container"
        >
          <FaLinkedin size={"2rem"} />
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100002002739058"
          className="link-container"
        >
          <FaFacebookSquare size={"2rem"} />
        </Nav.Link>
        <Nav.Link target="_blank" href={MyCV} className="link-container">
          <ImProfile size={"2rem"} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Footer;
