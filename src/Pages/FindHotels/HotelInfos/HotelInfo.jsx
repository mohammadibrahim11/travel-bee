import React from "react";
import { Link } from "react-router-dom";

const HotelInfo = ({ hotelName }) => {
  const { photo, country } = hotelName;
  return (
    <div>
      <div className="fall-into-travel">
        {/* <div className="card">
          <img src={photo} class="card-img-top" alt="..." />
          <div className="card-body book">
            <h5 className="card-title">{country}</h5>
            <p className="card-text">An amazing journey</p>
            <Link to={`/hotel-listing?country=${country}`}>
              <button>Book a Hotel</button>
            </Link>
          </div>
        </div> */}

        <div class="card">
          <img
            src={photo}
            class="card-img"
            alt="..."
            style={{ height: "350px" }}
          />
          <div class="card-body card-img-overlay">
            <h5 class="card-title">{country}</h5>
            <p class="card-text">Amazing streets</p>
            <Link
              to={`/hotel-listing?country=${country}`}
              class="btn btn-primary"
            >
              Book Hotels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
