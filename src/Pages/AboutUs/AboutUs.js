import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  RiCustomerService2Fill,
  RiCarFill,
  RiBookReadFill,
} from "react-icons/ri";
import MasonaryImageGallery from "../../Components/MasonaryImageGallery/MasonaryImageGallery";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <section className="about-us-header-section">
        <div>
          <h2>Travel World To Gain Knowledge</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      <section className="mt-5 pt-5">
        <div>
          <div className="about-us-title">
            <h2 className="title">Why Choose Us?</h2>
            <p className="sub-title text-center">
              These popular destinations have a lot to offer
            </p>
          </div>

          <div className="service-container mt-5">
            <div className="service shadow">
              <div>
                <RiCustomerService2Fill className="service-icon" />
              </div>
              <div>
                <h4 className="service-title">customer service 24h</h4>
                <p className="sub-title">
                 We provide 24h costomer service.your are our first priority{" "}
                </p>
              </div>
            </div>
            <div className="service shadow">
              <div>
                <RiCarFill className="service-icon" />
              </div>
              <div>
                <h4 className="service-title">Transport</h4>
                <p className="sub-title">
                  We provide Transport facility to our Customer so they can enjoy their journey{" "}
                </p>
              </div>
            </div>
            <div className="service shadow">
              <div>
                <RiBookReadFill className="service-icon" />
              </div>
              <div>
                <h4 className="service-title">Fullguide</h4>
                <p className="sub-title">
                  You will take a tourist guide from our experience tour guide.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-container">
          <div className="text-center">
            <h2 className="heading">About Us</h2>
            <p className="sub-heading">read more about our travel agency</p>
          </div>
          <div className="about-info container">
            <p className="about">
              <h4>About our travel agency</h4>
              Amazing Tours is leading tour operator of Bangladesh. Amazing
              Tours established in 2009 with a view to develop sustainable tours
              to various destinations in this beautiful Bangladesh and as such
              you can meet the generous peoples of this country. Our team is
              committed to give you a new light of tourism experiences which you
              had never before. We are not only for tour operator, our
              Established Software company, This company provide many product-is
              travel related and others kinds of software. Amazing Tours
              provides inbound and outbound tour operate. Inbound tours provide
              experience guide, standard and any category’s hotel, best tours
              spot selection and your security. Holidays are meant for
              relaxation, to rejuvenate your energy moreover to spend your
              quality time with your loved ones and it is imperative to have the
              best Tour Operator to be your travel planner, who has got the
              experience, Infrastructure, commitment and who is a real
              professional to plan your valuable Tour.
              <br />
              <br />
              There’s no need to get bogged down in each and every tour
              operator’s website individually, because we can offer you Inbound
              tours Dhaka, Shundarban, Cox’sbazar, St.Mertin, Teknaf, Rangamati,
              Khagrachori, Bandarbon, Chittagong, Sylhet and Out bound tours
              Thailand, Singapore, Malaysia, India, Nepal, Bhutan, Chine, Egypt,
              Indonesia and cruises all in one place, and from just about every
              holiday company you can think of. If you’d like to find out a
              little more about some of the tour operators and holiday companies
              featured on our company.
            </p>
            <div className="">
              <img
                className="border rounded"
                src="https://i.ibb.co/qYKP0Yy/Rectangle-25.png"
                alt=""
                style={{ width: "280px", height: "394px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              {/* <Subtitle subtitle={'Gallery'}></Subtitle> */}
              <h2 className="gallery__title text-center mt-5">Gallery</h2>
              <p className="text-center">see our gallery </p>
            </Col>
            <Col lg="12 mt-4">
              <MasonaryImageGallery></MasonaryImageGallery>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5 pt-5">
        {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/rpT76y8/healthicons-city-outline.png" alt="healthicons-city-outline" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/tY7kxJQ/gis-map-route.png" alt="gis-map-route" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/P6bRhFN/Group-115.png" alt="Group-115" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/c6XBXZT/Vector.png" alt="Vector" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/vvxccV2/island.png" alt="island" border="0"></a> */}

        <div className="container icon-container">
          <div>
            <img
              src="https://i.ibb.co/vvxccV2/island.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">ISLAND TOUR</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/rpT76y8/healthicons-city-outline.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">CITY TOUR</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/tY7kxJQ/gis-map-route.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">EXPLORE WORLD</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/c6XBXZT/Vector.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p className="icon-text">TRAVEL</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
