import React from "react";
import "./Errorpage.css";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <section className="container">
        <div class="d-flex align-items-center justify-content-center vh-100 ">
          <div class="text-center row">
            <div class="col-12">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                class="img-fluid h-100"
              />
            </div>
            <div class="col-12 mt-5">
              <p class="fs-3">
                {" "}
                <span class="text-danger">Opps!</span> Page not found.
              </p>
              <p class="lead">The page you’re looking for doesn’t exist.</p>
              <Link to="/" class="btn btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Errorpage;
