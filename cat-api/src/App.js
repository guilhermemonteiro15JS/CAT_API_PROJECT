import React, { useState } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Vote from "./pages/Vote";

import Collection from "./pages/Collection";
import Uploader from "./pages/UpLoad";
import About from "./pages/About";
import Breeds from "./pages/Breeds";
import AllBreeds from "./pages/AllBreeds";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BodyApp, StyledNav, PageContent, NavLinkADD } from "./appstyled";
import { Container, Row, Col, Navbar, Nav, } from "react-bootstrap";


const App = () => {
  return (
    <BrowserRouter>
      <StyledNav>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/home">Mundo Felino</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <Nav.Link href="/home">
                <i class="bi bi-house"></i>
                Home
              </Nav.Link>
              <Nav.Link href="/vote">
                <i class="bi bi-clipboard2-check"></i>
                Vote
              </Nav.Link>
              <Nav.Link href="/breeds">
                <i class="bi bi-grid-3x2-gap-fill"></i>
                Breeds
              </Nav.Link>
              <Nav.Link href="/Collection">
                <i class="bi bi-collection"></i>
                Collection
              </Nav.Link>
              <Nav.Link href="/About">
                <i class="bi bi-info-circle"></i>
                About
              </Nav.Link>
              <NavLinkADD>
              <Nav.Link href="/Uploader">
              <i class="bi bi-cloud-plus"></i>
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
              <Route
                path="/Vote"
                element={
                  <PageContent>
                    <Vote />
                  </PageContent>
                }
              />
              <Route
                path="/Breeds"
                element={
                  <PageContent>
                    <Breeds />
                  </PageContent>
                }
              />
              <Route
                path="/AllBreeds"
                element={
                  <PageContent>
                    <AllBreeds /> 
                    </PageContent>
                }
                />
                <Route
                path="/Collection"
                element={
                  <PageContent>
                    <Collection />

                  </PageContent>
                }
              />
               <Route
                path="/UpLoader"
                element={
                  <PageContent>
                    <Uploader /> 
                  </PageContent>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
