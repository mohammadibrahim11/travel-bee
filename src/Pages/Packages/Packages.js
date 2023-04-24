import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import DisplayPackage from "../DisplayPackage/DisplayPackage";
import UserReviews from "../Home/UserReviews/UserReviews";
// import { ApiContext } from "../../DataContext.js/DataContext";
import "./Packages.css";

const Packages = () => {
  // const { packages } = useContext(ApiContext);
  // console.log(packages);
  // !param.tpFilter  &&
  // !param.twpFilter &&
  // !param.thrFilter
  const [packages, setPackages] = useState([]);
  const [intFilter, setIntFilter] = useState(false);
  const [tpFilter, setTpFilter] = useState(false);
  const [twpFilter, setTwpFilter] = useState(false);
  const [thrFilter, setThrFilter] = useState(false);
  const [dmsFilter, setdmsFilter] = useState(false);
  const [visible, setVisible] = useState(6);
  // const [cart, setCart] = useState([]);

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/packages?intFilter=${intFilter || ""}&dmsFilter=${
        dmsFilter || ""
      }&tpFilter=${tpFilter || ""}&twpFilter=${twpFilter || ""}&thrFilter=${
        thrFilter || ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        // console.log(data);
      });
  }, [intFilter, dmsFilter, tpFilter, twpFilter, thrFilter]);

  return (
    <div>
      <section className="package-section">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      <section>
        <div className="container home-icon-container">
          <div>
            <img
              src="https://i.ibb.co/7S8QCjN/flight.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              {" "}
              <Link to="/findFlights" className="header-icon-text">
                See Flights
              </Link>
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/TRsxdxm/hotel-bed.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              <Link to="/findHotels" className="header-icon-text">
                See Hotels
              </Link>
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/1qp3R6q/travel-bag.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              <Link to="/packages" className="header-icon-text">
                {" "}
                See Packages
              </Link>
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/1mwY7Km/setting.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              <Link to="/facilities" className="header-icon-text">
                Our Services
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="row container m-auto ">
        <div className="checkbox-container  col-md-12 col-sm-12 col-lg-2">
          <p className="package-filter">Filters</p>
          <hr className="text-dark" />

          <div>
            <div>
              <p className="filter-title"> package category</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="international"
                id=""
                className="checkbox"
                checked={intFilter}
                onClick={(e) => setIntFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">International</span>{" "}
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="domestic"
                className="checkbox"
                id=""
                checked={dmsFilter}
                onClick={(e) => setdmsFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">Domestic</span> <br />
            </div>
          </div>
          <div>
            <hr />
            <div>
              <p className="filter-title">Offers</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="international"
                id=""
                className="checkbox"
                checked={tpFilter}
                onClick={(e) => setTpFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">10% discount</span>{" "}
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="domestic"
                className="checkbox"
                id=""
                checked={twpFilter}
                onClick={(e) => setTwpFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">20%discount</span> <br />
            </div>
            <div>
              <input
                type="checkbox"
                name="domestic"
                className="checkbox"
                id=""
                checked={thrFilter}
                onClick={(e) => setThrFilter(e.target.checked)}
              />
              <span className="input-filter-text ms-2">30%discount</span> <br />
            </div>
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
            <span className="package-container">
              <span>{packages.length}</span> Packages and offers
            </span>{" "}
          </div>
          <hr />

          <div>
            {packages.slice(0, visible).map((packageData) => (
              <DisplayPackage
                packageData={packageData}
                // handleAddToFavourite={handleAddToFavourite}
                key={packageData._id}
              ></DisplayPackage>
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

export default Packages;
