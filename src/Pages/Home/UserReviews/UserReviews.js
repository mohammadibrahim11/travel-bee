import React, { useContext } from "react";
import { ApiContext } from "../../../DataContext.js/DataContext";
// import { AuthContext } from '../../../Context/UserContext';
import "./UserReviews.css";

const UserReviews = () => {
  const { reviews } = useContext(ApiContext);

  return (
    <div>
      <hr />
      <div className="review-header container">
        <h2 className="fw-bold text-dark">Reviews</h2>
        <p className="text-secondary">what people says about us</p>
      </div>
      <section className="reviews-container container">
        {reviews.map((review) => (
          <>
            <div class="row review">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card rounded-3 shadow" style={{ width: "23rem" }}>
                  <div class="card-body">
                    <div className="d-flex justify-content-between  align-items-center">
                      <img
                        src={review?.photoURL}
                        style={{ width: "40px", height: "40px" }}
                        class="rounded rounded-circle"
                        alt="..."
                      />

                      <img
                        src="https://i.ibb.co/R07n40p/rating.png"
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <h5 class="card-title mt-3"> {review.name}</h5>
                    <p class="card-text">{review?.text.slice(0,50)}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default UserReviews;
