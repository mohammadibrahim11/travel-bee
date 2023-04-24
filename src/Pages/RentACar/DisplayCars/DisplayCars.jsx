import React from "react";
import "./DisplayCars.css";
import { Link } from "react-router-dom";
const DisplayCars = ({ carService }) => {
  const { category, trip, image, duration, info, original_price,_id } = carService;
  return (
    <div>
      <div class="card mb-3" style={{ "max-width": "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={image}
              class="img-fluid rounded-start"
              alt="..."
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{info}</h5>
              <div className="d-flex justify-content-between align-content-center">
                <p class="card-text">{duration}</p>
                <p class="card-text">{category}</p>
                <p class="card-text">{trip}</p>
              </div>
              <p class="card-text d-flex justify-content-between">
                <small class="text-body-secondary">${original_price}</small>
                <Link to={`/carDetails/${_id}`} class=" btn btn-success ">view deal</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCars;
