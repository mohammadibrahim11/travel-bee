import React from "react";
// import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Filters from "../Components/Filters/Filters";
import Header from "../Pages/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
// import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Container>
        <Row>
          <Col lg="2">
           <Filters></Filters>
          </Col>
          <Col lg="10">
         
              <Outlet></Outlet>
           
          </Col>
        
        </Row>
      </Container> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
