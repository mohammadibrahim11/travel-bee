import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaSearch, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import AddReviews from "../../Components/AddReviews/AddReviews";
import UserReviews from "../Home/UserReviews/UserReviews";
import "./AllFlights.css";
import { toast } from "react-hot-toast";

const AllFlights = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [visible, setVisible] = useState(6);
  const [filter, setFilter] = useState();
  const [filterQueries, setFilterQueries] = useState("");
  const [tripQueries, setTripQueries] = useState("");
  const [flyDFilter, setFlyDFilter] = useState(false);
  const [qantFilter, setQantFilter] = useState(false);
  const [emrFilter, setEmrFilter] = useState();
  const [qatarFilter, setQatarFilter] = useState();
  const [onewayFilter, setOnewayFilter] = useState(false);
  const [returnFilter, setReturnFilter] = useState(false);
  const navigate = useNavigate();

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  const locationRef = useRef("");
  const classRef = useRef("");
  const tripRef = useRef("");

  // const roomRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const trip = tripRef.current.value;
    const tclass = classRef.current.value;

    const res = await fetch(
      `http://localhost:5000/api/flights?location=${location}&class=${tclass}&trip=${trip}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    // console.log(result);
    setFilter(result.data);
  };

  const checkboxHandler = (event, data) => {
    // console.log(event.target.value, data);

    setFlyDFilter((prev) => {
      if (!prev) {
        setFilterQueries(data);
      } else {
        setFilterQueries("");
      }
      return !prev;
    });
  };

  const qantasCheckbox = (event, data) => {
    setQantFilter((prev) => {
      if (!prev) {
        setFilterQueries(data);
      } else {
        setFilterQueries("");
      }
      return !prev;
    });
  };

  const emrCheckbox = (event, data) => {
    // console.log(event.target.value);
    setEmrFilter((prev) => {
      if (!prev) {
        setFilterQueries(data);
      } else {
        setFilterQueries("");
      }
      return !prev;
    });
  };

  const qtrCheckbox = (event, data) => {
    // console.log(event.target.value);
    setQatarFilter((prev) => {
      if (!prev) {
        setFilterQueries(data);
      } else {
        setFilterQueries("");
      }
      return !prev;
    });
  };

  const OnewayFilter = (event, data) => {
    // console.log(event.target.value, data);
    setOnewayFilter((prev) => {
      if (!prev) {
        setTripQueries(data);
      } else {
        setTripQueries("");
      }
      return !prev;
    });
  };

  const ReturnFilter = (event, data) => {
    // console.log(event);
    setReturnFilter((prev) => {
      if (!prev) {
        setTripQueries(data);
      } else {
        setTripQueries("");
      }
      return !prev;
    });
  };
  // console.log(filterQueries);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/flights?airlines_name=${filterQueries}&trip=${tripQueries}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilter(data.data);
        // console.log(data);
      });
  }, [filterQueries, tripQueries]);

  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);

  const searchPrice = async () => {
    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;

    // console.log(minPrice, maxPrice);

    if (minPrice === "" || maxPrice === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `http://localhost:5000/api/flights?price={"min":${minPrice},"max":${maxPrice}}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    // console.log(result.data);
    setFilter(result.data);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/flights?pageConfig={"content":40,"page":1}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilter(data.data);
      });
  }, []);
  const handleAddToFavourite = (filter) => {
    fetch("http://localhost:5000/favouritesFlight", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(filter),
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
      <section className="allFlights-header-section ">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>

      <section className="flight-search-section-container container pt-4 ">
        <form className="flight-search-section container m-auto  ">
          <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className="input"
              placeholder="Enter Destination"
              ref={locationRef}
            />
          </div>
          <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className="input"
              placeholder="trip"
              ref={tripRef}
            />
          </div>
          <div className="input-container ">
            <input
              type="text"
              id="form3Example1m"
              className=" input"
              placeholder="class"
              ref={classRef}
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

          <div>
            <FaSearch
              className="search"
              type="submit"
              onClick={searchHandler}
            ></FaSearch>
          </div>
        </form>
      </section>

      <section className="row container m-auto mt-5 mb-5">
        <div className="checkbox-container mt-5 mb-5 col-12  col-md-12 col-sm-12 col-lg-2">
          <p className="flights-filter">Filters</p>
          <hr className="text-dark" />

          <div className="airlines-filter">
            <div>
              <p className="filter-title"> Airlines</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="Flydubai"
                // value
                checked={flyDFilter}
                onChange={(event) => checkboxHandler(event, "Flydubai")}
              />
              <span className="input-filter-text ms-2">Flydubai</span> <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="Qantas"
                checked={qantFilter}
                onChange={(event) => qantasCheckbox(event, "Qantas")}
              />
              <span className="input-filter-text ms-2">Qantas</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="international"
                id=""
                className="checkbox"
                checked={emrFilter}
                onClick={(event) => emrCheckbox(event, "Emirates")}
              />
              <span className="input-filter-text ms-2">Emirates</span> <br />
            </div>

            <div>
              <input
                type="checkbox"
                name="domestic"
                className="checkbox"
                id=""
                checked={qatarFilter}
                onClick={(event) => qtrCheckbox(event, "Qatar Airways")}
              />
              <span className="input-filter-text ms-2">Qatar</span> <br />
            </div>
          </div>

          <hr />

          <div className="trip-filter">
            <div>
              <p className="filter-title"> Trip</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="oneway"
                id=""
                className="checkbox"
                checked={onewayFilter}
                onChange={(event) => OnewayFilter(event, "oneway")}
              />
              <span className="input-filter-text ms-2">oneway</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="international"
                id=""
                className="checkbox"
                checked={returnFilter}
                onChange={(event) => ReturnFilter(event, "return")}
              />
              <span className="input-filter-text ms-2">return</span> <br />
            </div>
          </div>
          <hr />
          <div>
            <form className="mt-2 mb-2">
              <input
                type="number"
                id="form3Example1m"
                className="price__box mb-1"
                placeholder="minprice"
                ref={minPriceRef}
              />
              <input
                type="number"
                id="form3Example1m"
                className="price__box"
                placeholder="maxprice"
                ref={maxPriceRef}
              />
              {/* <div className="btn btn-light mt-2">
                <FaSearch
                  className="price__search"
                  type="submit"
                  onClick={searchPrice}
                ></FaSearch>
              </div> */}
              <div
                className="btn btn-light "
                type="submit"
                onClick={searchPrice}
              >
                search
              </div>
            </form>
          </div>
        </div>

        <div
          class=" d-lg-flex justify-content-evenly align-items-center mt-5  d-md-none d-lg-block d-sm-none d-block col-lg-1"
          style={{ height: "auto" }}
        >
          <div class="vr mt-5"></div>
        </div>

        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className=" mt-5">
            <span className="all-flights-container">
              <h6>
                Showing{" "}
                <span className="length-color">{filter && filter?.length}</span>{" "}
                Flights
              </h6>
            </span>{" "}
          </div>
          <hr />

          <div>
            {filter &&
              filter?.slice(0, visible)?.map((filter) => (
                <div className="flight-card">
                  <div class="card mb-3" style={{ "max-width": "840px" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src={filter.airlines_logo_URL}
                          class="p-2"
                          alt="..."
                          style={{ height: "120px", width: "160px" }}
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <div className="d-flex justify-content-between align-items-st">
                            {" "}
                            <h5 class="card-title">
                              {filter.airlines_name}
                              {/* <span>{filter.rating}</span> */}
                            </h5>
                            <h5 class="card-title">${filter.price}</h5>
                          </div>
                          <div class="card-text d-flex justify-content-between align-items-center mb-3">
                            <span> {filter.location} </span>
                            <span class="card-text ms-2 text-warning">
                              {filter.trip}
                            </span>{" "}
                            <span className="d-flex justify-content-start align-items-center ms-3">
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
                                {filter.ratings} start reviews
                              </p>
                            </span>{" "}
                          </div>

                          <div className="">
                            <p>
                              <span>oneway : {filter.time.departure}</span>-
                              <span>{filter.time.arrival}</span>
                            </p>
                            <p>
                              <span>
                                return : {filter.return_time.departure}
                              </span>
                              -<span>{filter.return_time.arrival}</span>
                            </p>

                            <p className="mt-3">{filter.class}</p>
                          </div>

                          <div class="mt-2 d-flex justify-content-start align-items-center gap-3 ">
                            <Link
                              to="/"
                              className="border rounded-2 ps-2 pe-2"
                              onClick={() => handleAddToFavourite(filter)}
                            >
                              <FaHeart />
                            </Link>{" "}
                            <Link
                              to={`/flightDetails/${filter._id}`}
                              class=" btn btn-info package-details-button"
                              // style={{ width: "428px", height: "38px" }}
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="text-center mt-4" onClick={showMore}>
          <button className="btn btn-light ">show more</button>
        </div>
      </section>
      <section>
        <UserReviews></UserReviews>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};

export default AllFlights;
