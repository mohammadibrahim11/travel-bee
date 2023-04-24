import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillCupFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./AllHotelListing.css";
import { toast } from "react-hot-toast";

const AllHotelListing = ({ hotelName }) => {
  const navigate = useNavigate();
  const { title, city, price, avgRating, cafe, photo, createdAt } = hotelName;
  const handleAddToFavourite = (hotelName) => {
    fetch("http://localhost:5000/favouritesHotel", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(hotelName),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully added!");
          navigate(`/favourite`);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="hotel_listing_card">
      <div class="card mb-3" style={{ "max-width": "840px" }}>
        <div class="row g-0">
          <div class="col-md-5">
            <img
              src={photo}
              class="img-fluid "
              alt="..."
              style={{ height: "298.50px" }}
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <h5 class="card-title1 title">{title}</h5>
                <h5 class="card-title1 price-dollar">${price}</h5>
              </div>
              <p class="card-text1">
                {" "}
                <MdLocationPin /> {city}
              </p>
              <div className="d-flex justify-content-start align-items-center ">
                <div className="star">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <p class="card-text1 stay mt-2 ms-1">
                  {avgRating} start reviews
                </p>
              </div>
              <div className="d-flex align-content-center justify-content-between">
                <p className="mt-3">
                  <BsFillCupFill className="me-2" />
                  {cafe}+ Aminities
                  {createdAt}
                </p>
                {/* <h5 class="package-price">{pk.tourCategory}</h5> */}
              </div>
              <hr />
              {/* <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p> */}
              <p class="mt-2 d-flex justify-content-start align-items-center gap-3">
                <div
                  className="border rounded-2 ps-3 pe-3 btn btn-light"
                  onClick={() => handleAddToFavourite(hotelName)}
                >
                  <FaHeart />
                </div>{" "}
                <Link
                  to={`/category/${hotelName._id}`}
                  class=" btn btn-info package-details-button {
                    "
                  // style={{ width: "428px", height: "38px" }}
                >
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHotelListing;
