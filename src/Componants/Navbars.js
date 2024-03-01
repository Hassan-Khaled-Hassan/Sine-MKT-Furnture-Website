import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbars = () => {
     const [isScrolled, setIsScrolled] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 250) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`pt-2 ${isScrolled ? "show":""}`}
      id="navbar-example2"
    >
      <Container fluid>
        <Navbar.Brand className="ms-3 ms-lg-5 mb-lg-3" href="#">
          sine<span>mkt</span>.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="main">
          <Nav className="col-lg-8 mx-auto justify-content-end">
            <Nav.Link
              className="p-2 p-lg-3 active"
              aria-current="page"
              href="#carouselExampleCaptions"
            >
              Home
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#new-arrivals">
              new arrival
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#feature">
              features
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#blog">
              blog
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#newsletter">
              Contact
            </Nav.Link>
          </Nav>
          <div className="col-lg-1 search ps-3 pe-3 d-none d-lg-block text-end">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div
            className="col-lg-1 setting ps-3 pe-3 d-none d-lg-block"
            style={{ width: "fit-content" }}
          >
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="col-lg-2 shopping ps-3 pe-3 d-none d-lg-block">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars