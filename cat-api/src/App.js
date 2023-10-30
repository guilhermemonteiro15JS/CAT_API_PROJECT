import React, { useState } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About"
import Footer from "./pages/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BodyApp, StyledNav, PageContent } from "./appstyled";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const App = () => {
  
  return (
    <BrowserRouter>
      <StyledNav>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/home">
            <i className="bi bi-book"></i>Mundo Felino
            <i className="bi bi-book"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/Breeds">Raças de Gatos</Nav.Link>
              <Nav.Link href="/Sources">Recursos</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </StyledNav>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route
                path="/"
                element={
                  <PageContent>
                    <Home /> 
                  </PageContent>
                }
              />
              <Route
                path="/home"
                element={
                  <PageContent>
                    <Home />
                  </PageContent>
                }
              />
              <Route
                path="/About"
                element={
                  <PageContent>
                    <About />
                  </PageContent>
                }
              />
              
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
