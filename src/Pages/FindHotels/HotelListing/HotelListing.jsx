import React, { useEffect, useRef, useState } from "react";
import "./HotelListing.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import AllHotelListing from "./AllHotelListing";
// import SearchBar from '../SearchBar/SearchBar';
import { FaSearch } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import AllHotelListing from "../AllHotelListing/AllHotelListing";
// import { Col } from 'react-bootstrap';
const HotelListing = () => {
  const location = useLocation();
  const [hotelNames, setHotelNames] = useState([]);
  const [category, setCategory] = useState([]);
  const [brfFilter, setBrfFilter] = useState(false);
  const [frIntFilter, setFrIntFilter] = useState(false);
  const [freeAirFilter, setFreeAirFilter] = useState(false);
  const [airConFilter, setAirConFilter] = useState(false);
  const [fitness, setFitness] = useState(false);
  const [pool, setPool] = useState(false);

  // const location = useLocation();

  // const [data] = useState(location.state);

  // console.log(data);

  // const navigate = useNavigate();

  const priceRef = useRef(0);

  const searchPrice = async () => {
    const price = priceRef.current.value;

    // console.log(price);

    if (price === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `http://localhost:5000/category/search/getHotelBySearch?price=${price}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    // console.log(result.data);
    setHotelNames(result.data);
  };

  const [visible, setVisible] = useState(4);

  const showMore = () => {
    setVisible((preValue) => preValue + 2);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/category/filter/v2?brfFilter=${
        brfFilter || ""
      }&frIntFilter=${frIntFilter || ""}&freeAirFilter=${
        freeAirFilter || ""
      }&airConFilter=${airConFilter || ""}&fitness=${fitness || ""}&pool=${
        pool || ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setHotelNames(data);
        // console.log(data);
      });
  }, [brfFilter, frIntFilter, freeAirFilter, airConFilter, fitness, pool]);

  // const { country,title,city,price,avgRating,cafe,photo  } = hotelName;

  useEffect(() => {
    if (location?.search) {
      axios
        .get(`http://localhost:5000/category${location?.search}`)
        .then((res) => {
          if (res.data) {
            setHotelNames(res.data);
          }
          setCategory(res.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  }, [location]);

  const cityRef = useRef("");
  const roomRef = useRef(0);

  const searchHandler = async () => {
    const city = cityRef.current.value;
    const room = roomRef.current.value;

    // console.log(city, room);

    if (city === "" || room === "") {
      // return alert('All fields are required!')
    }

    const res = await fetch(
      `http://localhost:5000/category/search/getHotelBySearch?city=${city}&room=${room}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    // console.log(result);
    setHotelNames(result.data);

    // navigate(`/hotel-listing/search?city=${city}&room=${room}`,{state: result.data} );
  };

  // const [startDate, setStarDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  // const handleSelect = (date) => {
  //   setStarDate(date.selection.startDate);
  //   setEndDate(date.selection.endDate);
  // };

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: "selection",
  // };

  return (
    <>
      <section className="allFlights-header-section ">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>

      <section className="flight-search-section-container container pt-4">
        <form className="flight-search-section container m-auto">
          {/* <div className="col-12 d-flex align-items-center justify-content-evenly"> */}
          <div className="input-container">
            <input
              type="text"
              id="form3Example1m"
              className="input"
              placeholder="Enter Destination"
              ref={cityRef}
            />
          </div>

          <div className="input-container">
            <input
              type="date"
              id="date"
              className="input"
              placeholder=" "
              name="date"
              required
            />
            <label className="label">select date</label>
          </div>

          <div className="input-container">
            <input
              type="date"
              id="date"
              className="input"
              placeholder=" "
              name="date"
              required
            />
            <label className="label">select date</label>
          </div>

          <div className="input-container">
            <input
              type="number"
              id="form3Example1m"
              className="input"
              placeholder="Rooms"
              ref={roomRef}
            />
          </div>
          <FaSearch
            className="search"
            type="submit"
            onClick={searchHandler}
          ></FaSearch>
          {/* </div> */}
        </form>
      </section>

      <section className="container mt-4">
        <div className="row">
          <div className="col-12  col-md-12 col-sm-12 col-lg-2">
            <h5 className="filter">price</h5>

            <form className="mt-2 mb-2 d-flex justify-content-between align-content-center ">
              <input
                type="number"
                id="form3Example1m"
                className="price__box "
                placeholder="price"
                ref={priceRef}
              />{" "}
              <div
                className="btn btn-light "
                type="submit"
                onClick={searchPrice}
              >
                search
              </div>
            </form>

            <hr />

            <h5 className="filter">Freebies</h5>

            <div>
              <input
                type="checkbox"
                name="breakFast"
                id=""
                checked={brfFilter}
                // value="International"
                onClick={(e) => setBrfFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2 ">Free breakfast</span>{" "}
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="internet"
                id=""
                checked={frIntFilter}
                // value="International"
                onClick={(e) => setFrIntFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Free internet</span>{" "}
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="freeAirportShuttle"
                id=""
                checked={freeAirFilter}
                // value="International"
                onClick={(e) => setFreeAirFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">
                Free airport shuttle
              </span>{" "}
              <br />
            </div>

            <hr />

            <h5 className="filter">Amenities</h5>

            <div>
              <input
                type="checkbox"
                name="airConditioned"
                id=""
                checked={airConFilter}
                // value="International"
                onClick={(e) => setAirConFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Air-conditioned</span>{" "}
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="fitness"
                id=""
                checked={fitness}
                // value="International"
                onClick={(e) => setFitness(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Fitness</span> <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="pool"
                id=""
                checked={pool}
                // value="International"
                onClick={(e) => setPool(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Pool</span> <br />
            </div>
          </div>

          <div
            class=" d-lg-flex justify-content-evenly align-items-center mt-5  d-md-none d-lg-block d-sm-none d-block col-lg-1"
            style={{ height: "auto" }}
          >
            <div class="vr mt-5"></div>
          </div>

          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="d-flex mt-4">
              <p className="showing">
                Showing {hotelNames.length} of{" "}
                <span className="all__places">16 places</span>{" "}
              </p>
            </div>

            <div class="mb-3 mt-4">
              <div class="row g-0">
                <div class="mb-3 mt-4">
                  <div class="row g-0">
                    {hotelNames.length === 0 ? (
                      <h4 className="text-center">No hotel found</h4>
                    ) : (
                      hotelNames
                        .slice(0, visible)
                        .map((hotelName) => (
                          <AllHotelListing
                            key={hotelName._id}
                            hotelName={hotelName}
                            category={category}
                          ></AllHotelListing>
                        ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4" onClick={showMore}>
              <button className="btn btn-light">show more results</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelListing;
