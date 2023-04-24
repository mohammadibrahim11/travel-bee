import React, { useContext } from "react";
// import "../../Styles/HotelSearch.css";
// import Banner from "../../assets/images/Frame 36.png";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import "./FindHotel.css";
// import { AuthContext } from "../../Context/UserContext";
import Recent from "./Recent/Recent";
import HotelInfo from "./HotelInfos/HotelInfo";
import UserReviews from "../Home/UserReviews/UserReviews";
import AddReviews from "../../Components/AddReviews/AddReviews";
// import HotelInfo from "./HotelInfo/HotelInfo";

const FindHotel = () => {
  //   const loading = useContext(AuthContext);
  const { data: hotelNames = [] } = useQuery({
    queryKey: ["hotelPlace"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/hotelPlaces");
      const data = await res.json();
      return data;
    },
  });

  //   if (loading) {
  //     return (
  //       <div class="spinner-grow text-primary" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     );
  //   }

  return (
    <section className="">
      <section className="hotels-header-section">
        <div>
          <h2>Travel World To Gain Knowledge</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>

      {/* =======================Your recent searches==================== */}
      <div className="container">
        <h3 className="fw-bold text-md-center text-lg-start  text-dark mb-4 mt-5  ">
          Your recent searches
        </h3>
        <div className="home-card-container">
          {hotelNames?.map((hotelName) => (
            <Recent key={hotelName._id} hotelName={hotelName}></Recent>
          ))}
        </div>
      </div>

      {/* ====================Fall into travel======================= */}

      <section className="fall-into-travel-header mt-5 pt-5 mb-4 container">
        <h3 className="fw-bold text-dark  mt-5 text-md-center text-lg-start ">
          Fall into travel
        </h3>
        <p className="mb-4 text-sm-start text-md-center text-lg-start">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got <br /> the travel tools to get you to
          your destination.
        </p>
        <div className="fall-into-travel">
          {hotelNames?.map((hotelName) => (
            <HotelInfo key={hotelName._id} hotelName={hotelName}></HotelInfo>
          ))}
        </div>
      </section>

      {/* ======================== extra-section =======================*/}

      <section className="extra-section container">
        <div className="mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark  mt-5 text-md-center text-lg-start ">
            Fall into travel
          </h3>
          <p className="text-dark-emphasis text-md-center text-lg-start  ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Backpacking Sri Lanka</h5>
                  <h3 className="text-white text-end">$275</h3>
                </div>
                <p class="card-text">
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>
                <Link to="/" class="btn btn-light">
                  Book Hotels
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div className="extra-img">
              <div>
                <img
                  src="https://i.ibb.co/VBthY6H/Rectangle-3-3.png"
                  className="img"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/4dKN9dN/Rectangle-3-2.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wK1kzX6/Rectangle-3-1.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wh24VB5/Rectangle-3.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <UserReviews></UserReviews>
        <AddReviews></AddReviews>
      </section>
    </section>
  );
};

export default FindHotel;
