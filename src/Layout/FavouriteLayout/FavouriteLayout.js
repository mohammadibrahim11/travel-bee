import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import FHeader from "../../Pages/FHeader/FHeader";
import SignIn from "../../Pages/SignIn/SignIn";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const FavouriteLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col lg="12">
            <FHeader></FHeader>
          </Col>

          {user?.uid ? (
            <div>
              <div className=" mt-5">
                <Link className="btn btn-light" to="/favourite/packages">
                  Packages
                </Link>
                <Link className="btn btn-light" to="/favourite/hotels">
                  Hotels
                </Link>
                <Link className="btn btn-light" to="/favourite/flights">
                  Flights
                </Link>
              </div>
              <div className="mt-5 ">
                <Outlet></Outlet>
              </div>
            </div>
          ) : (
            <SignIn></SignIn>
          )}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default FavouriteLayout;
