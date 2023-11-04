import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Vote from "./pages/Vote";
import Collection from "./pages/Collection";
import Uploader from "./pages/UpLoad";
import About from "./pages/About";
import Breeds from "./pages/Breeds";
import AllBreeds from "./pages/AllBreeds";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { StyledNav, PageContent, NavLinkADD } from "./appstyled";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <StyledNav>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
            <img src="/logo.png" width={60} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <Nav.Link href="/">
                <i className="bi bi-house me-1"></i>
                Home
              </Nav.Link>
              <Nav.Link href="/vote">
                <i className="bi bi-clipboard2-check me-1"></i>
                Vote
              </Nav.Link>
              <Nav.Link href="/breeds">
                <i className="bi bi-grid-3x2-gap-fill me-1"></i>
                Breeds
              </Nav.Link>
              <Nav.Link href="/collection">
                <i className="bi bi-collection me-1"></i>
                Collection
              </Nav.Link>
              <Nav.Link href="/about">
                <i className="bi bi-info-circle me-1"></i>
                About
              </Nav.Link>
              <NavLinkADD>
                <Nav.Link href="/uploader">
                  <i className="bi bi-cloud-plus me-1"></i>
                  ADD+
                </Nav.Link>
              </NavLinkADD>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </StyledNav>
      <Container>
        <Row>
          <Col>
            <PageContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/breeds" element={<Breeds />} />
                <Route path="/all-breeds" element={<AllBreeds />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/upLoader" element={<Uploader />} />
              </Routes>
            </PageContent>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
