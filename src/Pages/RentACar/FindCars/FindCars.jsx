import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../../DataContext.js/DataContext";
import "./FindCars.css";
import DisplayCars from "../DisplayCars/DisplayCars";

const FindCars = () => {
  const {
    carServices,
    showMore,
    visible,
    insideCityFilter,
    outSideCityFilter,
    // halfDayFilter,
    // allDayFilter,
    // oneWayFilter,
    // roundFilter,
    setInsideCityFilter,
    setOutsideCityFilter,
    // setAlldayFilter,
    // setHalfDayFilter,
    // setOneWayFilter,
    // setRoundFilter,
  } = useContext(ApiContext);

  return (
    <div>
      {" "}
      <section className="row container m-auto ">
        <div className="checkbox-container  col-md-12 col-sm-12 col-lg-2">
          <p className="package-filter">Filters</p>
          <hr className="text-dark" />

          <div>
            <div>
              <p className="filter-title">Location</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="inside-city"
                id=""
                className="checkbox"
                checked={insideCityFilter}
                onClick={(e) => setInsideCityFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Inside City</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="outside-city"
                className="checkbox"
                id=""
                checked={outSideCityFilter}
                onClick={(e) => setOutsideCityFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Outside City</span>{" "}
              <br />
            </div>
          </div>
          {/* <div>
            <hr />
            <div>
              <p className="filter-title">Category</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="all-day"
                id=""
                className="checkbox"
                checked={allDayFilter}
                onClick={(e) => setAlldayFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">All Day</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="half-day"
                className="checkbox"
                id=""
                checked={halfDayFilter}
                onClick={(e) => setHalfDayFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">half-day</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="one-way"
                className="checkbox"
                id=""
                checked={oneWayFilter}
                onClick={(e) => setOneWayFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">one-way</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="round"
                className="checkbox"
                id=""
                checked={roundFilter}
                onClick={(e) => setRoundFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">round</span> <br />
            </div>
          </div> */}
        </div>

        <div
          class=" d-lg-flex justify-content-evenly align-items-center mt-5  d-md-none d-lg-block d-sm-none d-block col-lg-1"
          style={{ height: "auto" }}
        >
          <div class="vr mt-5"></div>
        </div>

        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className=" mt-5">
            <span className="package-container">
              <span>{carServices.length}</span> Packages and offers
            </span>{" "}
          </div>
          <hr />

          <div>
            {carServices.slice(0, visible).map((carService) => (
              <DisplayCars
                carService={carService}
                // handleAddToFavourite={handleAddToFavourite}
                key={carService._id}
              ></DisplayCars>
            ))}
          </div>
        </div>

        <div className="text-center mt-4" onClick={showMore}>
          <button className="btn btn-light ">show more</button>
        </div>
      </section>
    </div>
  );
};

export default FindCars;
