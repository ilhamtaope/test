import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          English <span>Course.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Free Trial Class</Nav.Link>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Program
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    TOEFL
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    IELTS
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Speaking & Listening
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Grammar & Vocabulary
                  </a>
                </li>
              </ul>
            </div>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Button>Join with us now!</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
