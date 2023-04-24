import React from "react";
import "./PackagesDetails.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import UserReviews from "../Home/UserReviews/UserReviews";
import AddReviews from "../../Components/AddReviews/AddReviews";
const PackagesDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    name,
    _id,
    includes,
    excludes,
    tourCategory,
    stay,
    facilities,
    price,
    itinerary,
    img,
    placeimg1,
    placeimg2,
    placeimg3,
    offerPrice,
    ratings,
    journey,
    termsAndCondition,
    reservationInfo,
    cancellationPolicy,
    overview,
    pricingInfo,
  } = details;

  return (
    <div>
      <div>
        <section className="container packages-details-section mt-5 pt-5">
          <h3 className="fw-semibold text-primary mb-5 text-decoration-underline">
            {" "}
            See Your Package Details{" "}
          </h3>
          <div>
            <div className="row mb-4">
              <div className=" col-lg-8 col-sm-12 col-md-8 col-xs-12">
                <div className="d-lg-flex d-md-flex justify-content-start align-items-center gap-2">
                  <h4 className="package-name">{name}</h4>
                  <div className="rating-star">
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                    <span className="text-warning">
                      <FaStar />
                    </span>

                    <span className="mt-4 ms-2 text-warning">
                      {ratings} star package
                    </span>
                  </div>
                </div>
                <div className="package-location">
                  <p>{journey}</p>
                  <span className="me-4">{stay}</span>{" "}
                  <span>{tourCategory}</span>
                </div>
              </div>
              <div className=" col-lg-4 col-sm-12 col-md-4 col-xs-12 text-lg-end text-md-end">
                <div className="mt-3">
                  {offerPrice ? (
                    <h4 className="">
                      ${offerPrice}{" "}
                      <span className=" text-decoration-line-through">
                        ${price}
                      </span>{" "}
                    </h4>
                  ) : (
                    <h4 className="price">${price}</h4>
                  )}
                </div>
                <div className="">
                  <button className="btn btn-light ">
                    <FaHeart />
                  </button>
                  <Link
                    to={`/PackageBookingDetails/${_id}`}
                    className="btn btn-info ms-2"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-8 col-sm-12 col-md-12 ">
                <img
                  src={img}
                  style={{ height: "350px" }}
                  alt=""
                  className="image"
                />
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12 ">
                <div className="small-img">
                  <div className="">
                    <img
                      className="pb-2 image"
                      src={placeimg1}
                      style={{ width: "300px", height: "175px" }}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      className="pb-2 image"
                      src={placeimg2}
                      style={{ width: "300px", height: "175px" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="overview">
              <h6 className="mt-4 fw-bold">packages overview :</h6>
              <p>{overview}</p>
            </div>
            <hr />

            <div className="itinerary-container">
              <div>
                <h6 className=" fw-bold ">Itinerary</h6>
                {itinerary ? (
                  <div className="itinerary-container">
                    <div>
                      {itinerary?.[0] ? <li>{itinerary?.[0]}</li> : ""}
                      <br />
                      {itinerary?.[1] ? <li>{itinerary?.[1]}</li> : ""}
                      <br />
                      {itinerary?.[2] ? <li>{itinerary?.[2]}</li> : ""}
                      <br />
                      {itinerary?.[3] ? <li>{itinerary?.[3]}</li> : ""}
                      <br />
                      {itinerary?.[4] ? <li>{itinerary?.[4]}</li> : ""}
                      <br />
                      {itinerary?.[5] ? <li>{itinerary?.[5]}</li> : ""}
                      <br />
                      {itinerary?.[6] ? <li>{itinerary?.[6]}</li> : ""}
                      <br />
                    </div>
                    <div>
                      {itinerary?.[7] ? <li>{itinerary?.[7]}</li> : ""}
                      <br />
                      {itinerary?.[8] ? <li>{itinerary?.[8]}</li> : ""}
                      <br />
                      {itinerary?.[9] ? <li>{itinerary?.[9]}</li> : ""}
                      <br />
                      {itinerary?.[10] ? <li>{itinerary?.[10]}</li> : ""}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <hr />
            <div className=" row">
              <div className="col-lg-6 col-sm-12 col-md-12  includes ">
                <h6 className=" fw-bold">Includes</h6>
                {includes ? (
                  <div className="">
                    <div>
                      {includes?.[0] ? <li>{includes?.[0]}</li> : ""}
                      <br />
                      {includes?.[1] ? <li>{includes?.[1]}</li> : ""}
                      <br />
                      {includes?.[2] ? <li>{includes?.[2]}</li> : ""}
                      <br />
                      {includes?.[3] ? <li>{includes?.[3]}</li> : ""}
                      <br />
                      {includes?.[4] ? <li>{includes?.[4]}</li> : ""}
                      <br />
                      {includes?.[5] ? <li>{includes?.[5]}</li> : ""}
                      <br />
                      {includes?.[6] ? <li>{includes?.[6]}</li> : ""}
                      <br />
                    </div>
                    <div>
                      {includes?.[7] ? <li>{includes?.[7]}</li> : ""}
                      <br />
                      {includes?.[8] ? <li>{includes?.[8]}</li> : ""}
                      <br />
                      {includes?.[9] ? <li>{includes?.[9]}</li> : ""}
                      <br />
                      {includes?.[10] ? <li>{includes?.[10]}</li> : ""}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                class=" d-lg-flex justify-content-evenly align-items-center   d-md-none d-lg-block d-sm-none d-block col-lg-1"
                style={{ height: "auto" }}
              >
                <div class="vr"></div>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12 excludes">
                <h6 className="fw-bold">Excludes</h6>
                {excludes ? (
                  <div className="itinerary-container">
                    <div>
                      {/* <h5>Cancellation Policy</h5> */}
                      {excludes?.[0] ? <li>{excludes?.[0]}</li> : ""}
                      <br />
                      {excludes?.[1] ? <li>{excludes?.[1]}</li> : ""}
                      <br />
                      {excludes?.[2] ? <li>{excludes?.[2]}</li> : ""}
                      <br />
                      {excludes?.[3] ? <li>{excludes?.[3]}</li> : ""}
                      <br />
                      {excludes?.[4] ? <li>{excludes?.[4]}</li> : ""}
                      <br />
                      {excludes?.[5] ? <li>{excludes?.[5]}</li> : ""}
                      <br />
                      {excludes?.[6] ? <li>{excludes?.[6]}</li> : ""}
                      <br />
                    </div>
                    <div>
                      {excludes?.[7] ? <li>{excludes?.[7]}</li> : ""}
                      <br />
                      {excludes?.[8] ? <li>{excludes?.[8]}</li> : ""}
                      <br />
                      {excludes?.[9] ? <li>{excludes?.[9]}</li> : ""}
                      <br />
                      {excludes?.[10] ? <li>{excludes?.[10]}</li> : ""}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr />
            <div>
              <h6 className="fw-bold">Reservation Info</h6>
              {reservationInfo ? (
                <div className="itinerary-container">
                  <div>
                    {reservationInfo?.[0] ? (
                      <li>{reservationInfo?.[0]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[1] ? (
                      <li>{reservationInfo?.[1]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[2] ? (
                      <li>{reservationInfo?.[2]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[3] ? (
                      <li>{reservationInfo?.[3]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[4] ? (
                      <li>{reservationInfo?.[4]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[5] ? (
                      <li>{reservationInfo?.[5]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[6] ? (
                      <li>{reservationInfo?.[6]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                  </div>
                  <div>
                    {reservationInfo?.[7] ? (
                      <li>{reservationInfo?.[7]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[8] ? (
                      <li>{reservationInfo?.[8]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[9] ? (
                      <li>{reservationInfo?.[9]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {reservationInfo?.[10] ? (
                      <li>{reservationInfo?.[10]}</li>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <hr />
            <div>
              <h6 className="fw-bold">Terms & Condition</h6>
              {termsAndCondition ? (
                <div className="itinerary-container">
                  <div>
                    {termsAndCondition?.[0] ? (
                      <li>{termsAndCondition?.[0]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[1] ? (
                      <li>{termsAndCondition?.[1]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[2] ? (
                      <li>{termsAndCondition?.[2]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[3] ? (
                      <li>{termsAndCondition?.[3]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[4] ? (
                      <li>{termsAndCondition?.[4]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[5] ? (
                      <li>{termsAndCondition?.[5]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[6] ? (
                      <li>{termsAndCondition?.[6]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                  </div>
                  <div>
                    {termsAndCondition?.[7] ? (
                      <li>{termsAndCondition?.[7]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[8] ? (
                      <li>{termsAndCondition?.[8]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[9] ? (
                      <li>{termsAndCondition?.[9]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {termsAndCondition?.[10] ? (
                      <li>{termsAndCondition?.[10]}</li>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <hr />
            <div>
              <h6 className="fw-bold">Cancellation Policy</h6>
              {cancellationPolicy ? (
                <div className="itinerary-container">
                  <div>
                    {cancellationPolicy?.[0] ? (
                      <li>{cancellationPolicy?.[0]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[1] ? (
                      <li>{cancellationPolicy?.[1]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[2] ? (
                      <li>{cancellationPolicy?.[2]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[3] ? (
                      <li>{cancellationPolicy?.[3]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[4] ? (
                      <li>{cancellationPolicy?.[4]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[5] ? (
                      <li>{cancellationPolicy?.[5]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[6] ? (
                      <li>{cancellationPolicy?.[6]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                  </div>
                  <div>
                    {cancellationPolicy?.[7] ? (
                      <li>{cancellationPolicy?.[7]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[8] ? (
                      <li>{cancellationPolicy?.[8]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[9] ? (
                      <li>{cancellationPolicy?.[9]}</li>
                    ) : (
                      ""
                    )}
                    <br />
                    {cancellationPolicy?.[10] ? (
                      <li>{cancellationPolicy?.[10]}</li>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
        <section>
          <UserReviews></UserReviews>
        </section>
        <section>
          <AddReviews></AddReviews>
        </section>
      </div>
    </div>
  );
};

export default PackagesDetails;
