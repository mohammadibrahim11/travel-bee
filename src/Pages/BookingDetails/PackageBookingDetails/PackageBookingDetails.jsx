import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { FaApple, FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
// import { ApiContext } from "../../../DataContext.js/DataContext";
import "./PackageBookingDetails.css";

const PackageBookingDetails = () => {
  // const { bookinfo } = useContext(ApiContext);
  // console.log(bookinfo);
  // const { _id } = bookinfo;

  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const navigate = useNavigate();

  const { _id, img, offerPrice, name, price, journey, ratings } = details;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    // console.log(userName, email, phone, date);

    const booking = {
      userName: userName,
      packageName: name,
      bookingDate: date,
      email: email,
      contact: phone,
      packagePrice: price,
      totalPrice: grandtotal,
      journey: journey,
    };
    // console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully added!");
          navigate(`/bookingInfo`);
          window.location.reload();
        } else {
          toast.error(data.message);
        }
      });
  };

  // let total = 0;
  // let serviceCharge = 0;

  const sCharge = parseFloat(
    ((offerPrice ? offerPrice : price) * 0.01).toFixed(2)
  );
  const tax = parseFloat(((offerPrice ? offerPrice : price) * 0.01).toFixed(2));
  const grandtotal = sCharge + tax + (offerPrice ? offerPrice : price);
  // console.log(grandtotal);

  return (
    <div>
      <section className="container booking-details-section">
        <h2
          className="text-primary fw-semibold text-center 
        "
        >
          your booking Info
        </h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-8 col-md-8 ">
            <div class="card book-detail-card">
              <div class="card-body">
                <div className="d-flex justify-content-between book-detail align-content-center">
                  <h5 class="card-title">{name}</h5>
                  {offerPrice ? (
                    <span class="card-subtitle mb-2">${offerPrice}</span>
                  ) : (
                    <span class="card-subtitle mb-2">${price}</span>
                  )}
                </div>
                <p class="card-text text-center">{journey}</p>
                {/* <Link href="#" class="card-link">Card link</Link> */}
                {/* <Link href="#" class="card-link">Another link</Link> */}
              </div>
            </div>

            <form className=" m-auto p-2" onSubmit={handleBooking}>
              <Toaster />
              <div className="mb-3 text-start ">
                <h2 className="booking-form-header-title">Your Information</h2>
                <div className="row ">
                  <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-between align-items-center gap-2">
                    <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
                      <div className="input-container">
                        <input
                          type="email"
                          id="email"
                          className="input"
                          placeholder=" "
                          name="email"
                          defaultValue={user?.email}
                          required
                        />
                        <label className="label">Email</label>
                      </div>
                    </div>
                    <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
                      <div className="input-container">
                        <input
                          type="text"
                          id="name"
                          className="input"
                          placeholder=" "
                          name="name"
                          defaultValue={user?.displayName}
                          required
                        />
                        <label className="label">Your Name</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-between align-items-center gap-2">
                    <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
                      <div className="input-container">
                        <input
                          type="text"
                          id="phone"
                          className="input"
                          placeholder=" "
                          name="phone"
                          required
                        />
                        <label className="label">phone</label>
                      </div>
                    </div>
                    <div className="input-container col-md-12 col-sm-12 col-xl-6 col-lg-6 password mb-4">
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
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="continue"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-sm-12 col-lg-4 col-md-4">
            <div class="card shadow mb-3">
              <div class="row g-0">
                <div class="col-3 mt-3 text-center">
                  <img
                    src={img}
                    class="rounded ms-2"
                    alt="..."
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div class="col-9">
                  <div class="card-body">
                    <h6 class="card-title">{name}</h6>
                    <p class="card-text">{ratings}star</p>
                  </div>
                </div>
              </div>
              <hr className=" col-8 col-sm-8 col-md-12 col-lg-12" />
              <div className="price-container container">
                {offerPrice ? (
                  <div className="d-flex align-content-center justify-content-between">
                    {" "}
                    <p>Basic fare </p> <p> ${offerPrice}</p>
                  </div>
                ) : (
                  <div className="d-flex align-content-center justify-content-between">
                    <p>Basic fare</p>
                    <p>${price}</p>
                  </div>
                )}

                <div className="d-flex align-content-center justify-content-between">
                  <p> Service Charge </p>
                  <p>
                    {" "}
                    $ <small>{sCharge}</small>{" "}
                  </p>
                </div>
                <div className="d-flex align-content-center justify-content-between">
                  <p> Tax </p>
                  <p>
                    {" "}
                    $ <small>{tax}</small>{" "}
                  </p>
                </div>
                <hr className=" col-8 col-sm-8 col-md-12 col-lg-12" />
                <div className="d-flex align-content-center justify-content-between">
                  <p> Total </p>
                  <p>
                    {" "}
                    $ <small>{grandtotal.toFixed(2)}</small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageBookingDetails;
