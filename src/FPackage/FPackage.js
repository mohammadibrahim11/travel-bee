import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const FPackage = ({ favPackage, handleDelete }) => {
  const { img, name, offerPrice, price, stay, ratings, journey, offer, _id } =
    favPackage;
  return (
    <div>
      <section>
        <div class="card mb-3" style={{ "max-width": "840px" }}>
          <div class="row g-0">
            <div class="col-md-5">
              <img
                src={img}
                class="img-fluid "
                alt="..."
                style={{ height: "298.50px" }}
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  {" "}
                  <h5 class="card-title">{name}</h5>
                  {offerPrice ? (
                    <h5 class="card-title">
                      ${offerPrice}{" "}
                      <span class="card-title text-decoration-line-through">
                        ${price}
                      </span>{" "}
                    </h5>
                  ) : (
                    <h5 class="card-title">${price}</h5>
                  )}
                </div>
                <p class="card-text">{stay}</p>
                <div className="d-flex justify-content-start align-items-center ">
                  <div>
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
                  <p class="card-text stay mt-2 ms-1">
                    {ratings} start reviews
                  </p>
                </div>
                <div className="d-flex align-content-center justify-content-between">
                  <p className="mt-3">{journey}</p>
                  {offer && offer ? (
                    <p className="mt-3 text-warning">{offer}</p>
                  ) : (
                    ""
                  )}
                  {/* <h5 class="package-price">{tourCategory}</h5> */}
                </div>
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
                    to={`/packages/${_id}`}
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
      </section>
    </div>
  );
};

export default FPackage;
