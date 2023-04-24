import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
// import AllFlight from "../AllFlights/AllFlights";
import FindFlights from "../FindFlights/FindFlights";
// import { useLocation } from 'react-router-dom';

  const FlightListing = () => {
  //  const const [mongodb, setmongodb] = useState(second)
  // const location = useLocation();
  // const [hotelNames, setHotelNames] = useState([]);
  // const [category, setCategory] = useState(null);

  // useEffect(() => {
  //     if (location?.search) {
  //         axios.get(`http://localhost:5000/category${location?.search}`)
  //             .then(res => {
  //                 if (res.data) {
  //                   setHotelNames(res.data)
  //                 }
  //             })
  //             .catch(error => {
  //                 console.log(error)
  //             });
  //     }
  // }, [location, hotelNames]);
  return (
    <div>
      <Navbar></Navbar>
      <Col lg="12">
        <      FindFlights></FindFlights>
      </Col>
      <Container>
        <Row>
          <Col lg="4">
            <Filters></Filters>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default FlightListing;
