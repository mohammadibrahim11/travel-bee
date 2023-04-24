import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./AddReviews.css";

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const photoURL = user?.photoURL;
    const text = form.message.value;
    // const category = form.category.value;
    // console.log(name, photoURL, text, email);

    const addreview = {
      name,
      photoURL,
      text,
      email,
      // category
    };

    if (user) {
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addreview),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            alert("added review successfully");
            form.reset();
            window.location.reload();
          }
        })
        .catch((error) => console.error(error));
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <section>
        <div className=" add-reviews-container ">
          <p className="add-reviews">add a review</p>
          <form className="text-center " onSubmit={handleAddReview}>
            <textarea
              name="message"
              id=""
              cols="50"
              rows="2"
              className="text-area border rounded"
              placeholder="review for guide, service or packages"
            ></textarea>

            <div>
              <input
                className="review-submit-button m-2 ps-3 pe-3 pt-2 pb-2"
                type="submit"
                value="add a review"
              />
            </div>
          </form>
        </div>
      </section>

      <div className="newsletter-section p-3 container">
        <div>
          <h2 className="newsletter-title">Subscribe NewsLetter</h2>
          <h6 className="newsletter-subtitle">The Travel</h6>
          <p className="review-text">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>

          <form action="" className="form-container">
            <div className="input-container">
              <input
                type="email"
                id="email"
                className="input form-control"
                placeholder=" "
                name="email"
                required
              />
              <label className="label">Your email address</label>
            </div>
            {/* <textarea
                  name="message"
                  id=""
                  cols="50"
                  // rows="2"
                  className="w-30 border rounded"
                  placeholder="write a review about my service"
                ></textarea> */}

            <div>
              <input
                className="subscribe-button m-2 ps-3 pe-3 pt-1 pb-1  "
                type="submit"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
        <div className="d-none d-lg-block d-md-block">
          <img
            src="https://i.ibb.co/hym9Qv1/emojione-v1-open-mailbox-with-lowered-flag.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
