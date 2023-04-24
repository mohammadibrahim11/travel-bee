import React, { useContext, useEffect } from "react";
import { useState } from "react";
// import Calendar from "react-calendar";
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./FindFlights.css";

const FindFlights = () => {
  const { flights } = useContext(ApiContext);
  // const flightsData = flights.data;
  // console.log(flightsData)

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <section className="flight-header-section">
        <div className="w-50 m-auto ">
          <h2>Make your travel whishlist, we’ll do the rest</h2>
          <p>Special offers to suit your plan</p>
        </div>
      </section>

      {/* <section className="flight-search-section-container container">
        <form className="flight-search-section container m-auto ">
          <div>
    
            <select name="" id="destination" className="select-option">
              <option value=" From">From</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
            </select>
      
          </div>
          <div>

            <select name="" id="destination" className="select-option">
              <option value=" To">To</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
            </select>
 
          </div>
          <div>
        
            <select
              name=""
              id="Trip"
              placeholder="Trip"
              className="select-option"
            >
      
              <option value="One Way">One Way</option>
              <option value="Return">Return</option>
             
            </select>
          
          </div>
          <div>
            <DatePicker
              className="datepicker "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="departure time"
            />
          </div>
          <div>
            <DatePicker
              className="datepicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
          <div>

            <select name="" id="bookingclass" className="select-option">
              <option value="Bookingclass">Booking class</option>
              <option value="First class">First class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>

          </div>
          <div>
            <Link className="btn btn-light " to="/flightListing/api/flights">
              search
            </Link>
          </div>
        </form>
      </section> */}

      <section>
        <div className="container mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark ">Fall into travel</h3>
          <p className="text-dark-emphasis ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got <br /> the travel tools to get you
            to your destination.
          </p>
        </div>
        <div className="fall-into-travel container">
          <div class="card">
            <img
              src="https://i.ibb.co/k0JjmGY/Rectangle-6.png"
              class="card-img"
              alt="..."
              style={{ height: "350px" }}
            />
            <div class="card-body card-img-overlay">
              <h5 class="card-title">Columbia</h5>
              <p class="card-text">Amazing streets</p>
              <Link to="/allFlights" class="btn btn-primary">
                Book Flights
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://i.ibb.co/F0Lnt7y/Rectangle-5.png"
              class="card-img"
              alt="..."
              style={{ height: "350px" }}
            />
            <div class="card-body card-img-overlay">
              <h5 class="card-title">London</h5>
              <p class="card-text">London eye adventure</p>
              <Link to="/allFlights" class="btn btn-primary">
                Book Flights
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://i.ibb.co/19XNPzC/Rectangle-4.png"
              class="card-img"
              alt="..."
              style={{ height: "350px" }}
            />
            <div class="card-body card-img-overlay">
              <h5 class="card-title">Paris</h5>
              <p class="card-text">An amazing journey</p>
              <Link to="/allFlights" class="btn btn-primary">
                Book Flights
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://i.ibb.co/Gpk0TC2/Rectangle-3-4.png"
              class="card-img"
              alt="..."
              style={{ height: "350px" }}
            />
            <div class="card-body card-img-overlay">
              <h5 class="card-title">Malbourne</h5>
              <p class="card-text"> An amazing journey journey</p>
              <Link to="/allFlights" class="btn btn-primary">
                Book Flight
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="extra-section container">
        <div className="container mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark ">Fall into travel</h3>
          <p className="text-dark-emphasis ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <div className="d-lg-flex d-md-flex d-sm-flex  justify-content-between align-items-center">
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
                <Link to="/allFlights" class="btn btn-light book-flight-btn">
                  Book Flight
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-12 col-lg-6 col-md-6">
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
      </section>
      <section>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};
export default FindFlights;
