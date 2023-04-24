import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
// import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
import "./GuideDetails.css";

const GuideDetails = () => {
  const guideDetails = useLoaderData();
  console.log(guideDetails);
  const {
    image,
    place,
    name,
    location,
    quote,
    about,
    languages,
    activityOne,
    activityTwo,
    activityThree,
    activityFour,
    activityFive,
    activitySix,
    activitySeven,
  } = guideDetails;

  return (
    <div>
      <section className="guide-details-header-section">
      <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>

      <section className="guide-details-section">
        <h2 className="text-center fw-bold text-dark mb-5 pb-5 mt-5 ">
          See our tour guide details & activity
        </h2>
        <div>
          <div className="guide-details d-flex align-items-start gap-4">
            <div>
              <img
                src={image}
                alt=""
                style={{ width: "220px", height: " 220px" }}
              />
            </div>
            <div>
              <h5 className="fw-bold guide-name fs-5">{name}</h5>
              <p className="fw-bold guide-location ">{location}</p>
              <p>{quote}</p>

              <div className="guide-social-link">
                <Link className="link" to="/">
                  {" "}
                  <FaFacebook style={{ width: "22px", height: "22px" }} />
                </Link>
                <Link to="/" className="link">
                  {" "}
                  <FaInstagram style={{ width: "22px", height: "22px" }} />
                </Link>
                <Link to="/" className="link">
                  {" "}
                  <FaWhatsappSquare style={{ width: "22px", height: "22px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-50 m-auto">
          <h4 className="mt-3">
            Explore {location},with {name}
          </h4>
        </div>
        <div className="guide-info-container">
          <div className="d-flex justify-content-center align-items-start  mt-5 ">
            <p className="fw-bold text-black-50" style={{ width: "110px" }}>
              I will Show You
            </p>
            <p className="place">{place}</p>
          </div>
        </div>
        <hr />
        <div className="guide-info-container">
          <div className="d-flex justify-content-center align-items-center  mt-5   ">
            <p className="fw-bold text-black-50" style={{ width: "110px" }}>
              About Me
            </p>
            <p className="place ms-5">{about}</p>
          </div>
        </div>
        <hr />
        <div className="guide-info-container">
          <div className="d-flex justify-content-center align-items-start mt- ">
            <p className="fw-bold text-black-50" style={{ width: "110px" }}>
              Languages
            </p>
            <p className="place">{languages}</p>
          </div>
        </div>
        <hr />
        <div className="guide-info-container">
          <div className="d-flex justify-content-start align-items-start mt- ">
            <p className="fw-bold text-black-50" style={{ width: "110px" }}>
              Activities
            </p>

            <div className="activity">
              <p className="activity-text">{activityOne}</p>
              <p className="activity-text">{activityTwo}</p>
              <p className="activity-text">{activityThree}</p>
              <p className="activity-text">{activityFour}</p>
              <p className="activity-text">{activityFive}</p>
              <p className="activity-text">{activitySix}</p>
              <p className="activity-text">{activitySeven}</p>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <UserReviews></UserReviews>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};

export default GuideDetails;
