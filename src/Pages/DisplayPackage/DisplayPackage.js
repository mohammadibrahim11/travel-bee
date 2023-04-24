import React from "react";
import { toast } from "react-hot-toast";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./DisplayPackage.css";

const DisplayPackage = ({ packageData }) => {
  // console.log(packageData);
  const navigate = useNavigate();
  const { img, name, price, offerPrice, stay, ratings, offer, journey, _id } =
    packageData;
  const handleAddToFavourite = (packageData) => {
    // let newCart = [];
    // const exists = product.find((item) => item._id === product._id);
    // if (!exists) {
    //   product.quantity = 1;
    //   newCart = [...product, product];
    // } else {
    //   const rest = product.filter((item) => item._id !== product._id);
    //   exists.quantity = exists.quantity + 1;
    //   newCart = [...rest, exists];
    // }
    // setCart(newCart);

    fetch("http://localhost:5000/favourites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully added!");
          navigate(`/favourite`);
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
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
                <p class="card-text stay mt-2 ms-1">{ratings} start reviews</p>
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
                <div className="border rounded-2 ps-3 pe-3 btn btn-light">
                  <FaHeart onClick={() => handleAddToFavourite(packageData)} />
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
    </div>
  );
};

export default DisplayPackage;
