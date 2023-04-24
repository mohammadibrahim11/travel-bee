import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple, FaChevronLeft } from "react-icons/fa";
import "./ForgetPassword.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div>
      <section className="forget-section">
        <div className="container  py-5 ">
          <div className="row ">
            <div className="col">
              <div className="">
                <div className="row g-0 flex-row-reverse ">
                  <div className="col-xl-6 d-none d-xl-block ">
                    <img
                      src="https://i.ibb.co/xmbWzPk/Group-5.png"
                      alt="SamplePhoto"
                      className="img_fluid"
                    />
                  </div>
                  <div className="col-xl-6 ">
                    <div className="forget-password-body">
                      <Link
                        className=" reverse"
                        to="/login"
                      >
                        <FaChevronLeft  className="mb-1"/> Back To Login
                      </Link>
                      <h3 className="mb-4 mt-4 fw-bold forget-password-title">
                        Forgot Your Password?
                      </h3>
                      <p className="fw-normal text-muted">
                        Don’t worry, happens to all of us. Enter your email
                        below to recover your password
                      </p>

                      {/* <div className="row ">
                        <div className="col-md-6 mb-4">
                          <div className="input-container">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">First Name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="input-container">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">Last Name</label>
                          </div>
                        </div>
                      </div> */}

                      <div className="row">
                        <div className="mb-4 mt-3">
                          <div className="input-container">
                            <input
                              type="email"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">Enter Your Email</label>
                          </div>
                        </div>
                        {/* <div className="col-md-6 mb-4">
                          <div className="input-container">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">Phone</label>
                          </div>
                        </div> */}
                      </div>
                      {/* 
                      <div className="input-container password mb-4">
                        <input
                          type="password"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Password</label>
                      </div> */}

                      {/* <div className="mb-4 d-flex justify-content-between">
                       <div>
                       <input type="checkbox" />
                        <label className="ms-1">Remember me</label>
                       </div>
                       <div>
                        <Link to='' className="text-danger text-decoration-none">Forgot Password?</Link>
                       </div>
                      </div> */}

                      <div className="login">
                        <button
                          type="button"
                          className="btn create-account-button btn-light w-100"
                        >
                          Submit
                        </button>
                      </div>
                      {/* <div className="text-center mt-3">
                        <span className="text-muted fw-bold">
                          Don't Have an Account?
                        </span>{" "}
                        <span className="login-text">Login</span>
                      </div> */}
                      <div className="mb-5">
                        <hr className="mt-5" />
                        <p className="text-center text-muted">
                          {" "}
                          Or Log in with
                        </p>
                      </div>

                      <div className="social-login mt-5">
                        <button className="btn btn-light  w-100 text-primary p-2">
                          <FaFacebook
                            style={{ width: "22px", height: "22px" }}
                          />
                        </button>
                        <button className="btn btn-light   w-100  p-2">
                          <FcGoogle style={{ width: "22px", height: "22px" }} />
                        </button>
                        <button className="btn btn-light   w-100  p-2">
                          <FaApple style={{ width: "22px", height: "22px" }} />
                        </button>
                        {/* <button className="btn btn-light ps-5 pe-5 w-100">< FaFacebook/></button> */}
                        {/* <button className="btn btn-light ps-5 pe-5 w-100">< FaFacebook/></button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
