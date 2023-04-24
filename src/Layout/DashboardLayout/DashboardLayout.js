import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Components/useAdmin/useAdmin";
import { AuthContext } from "../../Context/UserContext";
// import FHeader from "../../Pages/FHeader/FHeader";
// import SignIn from "../../Pages/SignIn/SignIn";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Container>
          <Row>
            <Col lg="12">
              {/* <h2>Admin Dashboard</h2> */}
              {/* <FHeader></FHeader> */}
            </Col>

            <div>
              <div className=" mt-5 pt-5">
                {isAdmin && (
                  <>
                    {" "}
                    <Link
                      className="btn btn-light fs-5"
                      to="/dashboard/allusers"
                    >
                      User
                    </Link>
                  </>
                )}
                <Link
                  className="btn btn-light fs-5"
                  to="/dashboard/allbookings"
                >
                  UserBookings
                </Link>

                {/* <Link className="btn btn-light" to="/favourite/flights">
                  Flights
                </Link> */}
              </div>
              <div className="mt-5 ">
                <Outlet></Outlet>
              </div>
            </div>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
