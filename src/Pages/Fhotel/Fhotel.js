import React from "react";
import { BsFillCupFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdDelete, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Fhotel = ({ FHotel, handleDelete }) => {
  // const { hotelName, destination, price, ratings, cafe, image, create, _id } = FHotel;
  const { title, city, price, avgRating, cafe, photo, createdAt, _id } = FHotel;
  return (
    <div>
      <section>
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
                    className="btn btn-danger"
                    onClick={() => handleDelete(_id)}
                  >
                    <MdDelete style={{ width: "20px", height: "20px" }} />
                  </div>{" "}
                  <Link
                    to={`/category`}
                    class=" btn btn-info package-details-button"
                    // style={{ width: "428px", height: "38px" }}
                  >
                    View Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="card mb-3" style={{ "max-width": "840px" }}>
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
                  <h5 class="package-price">{pk.tourCategory}</h5>
                </div>
                <hr />
                <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
                <p class="mt-2 d-flex justify-content-start align-items-center gap-3">
                  <Link
                    className="border rounded-2 ps-2 pe-2"
                    // onClick={() => handleAddToFavourite(hotelName)}
                  >
                    <FaHeart />
                  </Link>{" "}
                  <Link
                    to={`/category/${_id}`}
                    class=" btn btn-info package-details-button"
                    style={{ width: "428px", height: "38px" }}
                  >
                    View Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Fhotel;
