import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [data, setData] = useState(0);

  return (
    <div>
      <section className="container mt-4">
        <div className="row">
          <div className="col-10">
            <h5 className="filter-title">Filters</h5>
            <div>
              <div className="filter-price">
                <p>Price</p>
                <input
                  type="range"
                  min="7000"
                  max="10000"
                  step="1000"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <p>{data}</p>
              </div>

              {/* <select
                class="form-select"
                aria-label="Default select example"
              ></select>
              <input type="range" class="form-range" id="customRange1" />
              <div className="d-flex justify-content-between">
                <p>$50</p>
                <p>$1200</p>
              </div> */}
              <hr />
            </div>

            <h5 className="filter">Airlines</h5>
            {/* <select
              class="form-select"
              aria-label="Default select example"
            ></select> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                us bangla
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                novo air
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
               Biman Bangladesh 
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
               Regent AirWays 
              </label>
            </div>
            <hr />

            <h5 className="filter">Trips</h5>
            {/* <select
              class="form-select"
              aria-label="Default select example"
            ></select> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                One Way
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Two Way
              </label>
            </div>
            <div class="form-check">
              {/* <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filters;
