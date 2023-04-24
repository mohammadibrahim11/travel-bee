import React from "react";
import "./RentACard.css";
import { Link } from "react-router-dom";

const RentACar = () => {
  return (
    <div>
      <section className="profile-header-section">
        <div>
          <h2>Rent A Car</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      {/* <section className=" container rent-a-car d-flex justify-content-evenly align-content-center gap-0">
        <div className="card">
          <div>
            <img
              src="https://i.ibb.co/YLfHcbN/rent-a-car-img-2.jpg"
              alt=""
              className="img"
            />
          </div>
          <Link className="text-center text-primary fw-semibold">
            inside-city
          </Link>
        </div>
        <div className="card">
          <div>
            <img
              src="https://i.ibb.co/D74RkNf/car-rental-img.jpg"
              alt=""
              className="img"
            />
          </div>
          <Link className="text-center text-primary fw-semibold">
            outside-city
          </Link>
        </div>
      </section> */}
      {/* <a href="https://ibb.co/kySyggK"><img src="https://i.ibb.co/n0L0ssr/car-img.webp" alt="car-img" border="0"></a>
<a href="https://ibb.co/5MCym5L"><img src="https://i.ibb.co/znCYpSZ/toyota-hiace-van-front-angle-low-view-230068.jpg" alt="toyota-hiace-van-front-angle-low-view-230068" border="0"></a>
<a href="https://ibb.co/D4S7cmn"><img src="https://i.ibb.co/fMPC6Z7/001.jpg" alt="001" border="0"></a>
<a href="https://ibb.co/hm23BCg"><img src="https://i.ibb.co/YLfHcbN/rent-a-car-img-2.jpg" alt="rent-a-car-img-2" border="0"></a> */}
      <section className="rent-car container">
        <div className="rent-card ps-3">
          <p class="card-text text-white">visit your destination</p>
          <Link to="/rentCarServices" class="btn btn-primary ps-5 pe-5">
            Rent A Car
          </Link>
        </div>
        <div className="rent-card ps-3">
          <p class="card-text text-white">visit your destination</p>
          <Link to="/rentCarServices" class="btn btn-primary ps-5 pe-5">
            Rent A Car
          </Link>
        </div>
        <div className="rent-card ps-3">
          <p class="card-text text-white">visit your destination</p>
          <Link to="/rentCarServices" class="btn btn-primary ps-5 pe-5">
            Rent A Car
          </Link>
        </div>
        <div className="rent-card ps-3">
          <p class="card-text text-white">visit your destination</p>
          <Link to="/rentCarServices" class="btn btn-primary ps-5 pe-5">
            Rent A Car
          </Link>
        </div>
      </section>
      <section className="extra-section container">
        <div className="mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark  mt-5 text-md-center text-lg-start ">
            Find Your Rental Services
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
                  <h5 class="card-title">
                    Car services inside & outside city{" "}
                  </h5>
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
                  Book Cars
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div className="extra-img">
              <div>
                <img
                  src="https://i.ibb.co/n0L0ssr/car-img.webp"
                  className="img rounded"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/znCYpSZ/toyota-hiace-van-front-angle-low-view-230068.jpg"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                  className="img rounded"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/fMPC6Z7/001.jpg"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                  className="img rounded"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/YLfHcbN/rent-a-car-img-2.jpg"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                  className="img rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentACar;
