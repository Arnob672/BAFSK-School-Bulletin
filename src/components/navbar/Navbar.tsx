import { Container, Nav, Navbar, Row, Col, NavDropdown, Offcanvas } from "react-bootstrap";
import { ThemeButtonProps } from "../theme-button/ThemeButton";
import SchoolLogo from "../../assets/bafsk-logo.png";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
import { generateUID } from "../../utils/utils";
export function BAFNavbar(theme_props: Readonly<ThemeButtonProps>) {
  const active_link_container=useLocation();
  console.log(active_link_container.pathname);
  const links = new Map([
    ["/", "Home"],
    ["/about", "About"],
  ]);
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="bg-body-tertiary"
      style={{ height: "10vh" }}
    >
      <Container fluid>
        <Row>
          <Col>
            <Navbar.Brand>
              <img src={SchoolLogo} height={"50vh"} width={"60vw"} alt="logo" />
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Offcanvas>
              <Offcanvas.Header>
                <h2>BAFSK School Bulletin</h2>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="me-auto">
                {[...links.keys()].map((link) => {
                  return (
                    <Link
                      className={`nav-link${
                        link === active_link_container.pathname ? " active" : ""
                      }`}
                      to={link}
                      key={generateUID()}
                    >
                      {links.get(link)!}
                    </Link>
                  );
                })}
              </Nav>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Col>
        </Row>
        <Row>
          <Col>
            <NavDropdown
              title={`Theme${theme_props.theme === "light" ? "☀️" : "🌙"}`}
            >
              <NavDropdown.Item
                onClick={() => {
                  theme_props.setTheme("light");
                }}
              >
                Light☀️
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  theme_props.setTheme("dark");
                }}
              >
                Dark🌙
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
