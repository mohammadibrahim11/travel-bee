import React from "react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
// import GoogleMapReact from 'google-map-react';
import "./ContactUs.css";
// import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <section>
        <div className="contact-us-header">
          <img
            src="https://i.ibb.co/xh81RnT/header-img.png"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>

        <div>
          <div className="container  py-5 ">
            <div>
              <h2 className="mb-4 fw-bold contact-title">Contact Us</h2>
              <p className="text-center w-100">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="row ">
              <div className="col">
                <div className="">
                  <div className="row g-0 flex-row-reverse">
                    <div className=" col-xl-6 contact-info-container order-1">
                      <div className="mt-5">
                        <span className="ms-5">
                          <FaHome style={{ width: "32px", height: "32px" }} />{" "}
                          <span className="ms-3">
                            street-1001, MoteJhel, Dhaka, Bangladesh
                          </span>
                        </span>
                      </div>
                      <div className="mt-5">
                        <span className="ms-5 ">
                          <FaPhoneAlt
                            style={{ width: "28px", height: "28px" }}
                          />{" "}
                          <span className="ms-3">+012 123 456 78</span>
                        </span>
                      </div>

                      <div className="mt-5">
                        <span className="ms-5">
                          <HiMail style={{ width: "28px", height: "28px" }} />{" "}
                          <span className="ms-3">@info@mydomain.com</span>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-form-body">
                        <h4 className="mb-4 fw-bold text-muted">
                          Send us message
                        </h4>
                        <div className="row ">
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
                        </div>

                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="input-container">
                              <input
                                type="email"
                                id="form3Example1m"
                                className="input"
                                placeholder=" "
                              />
                              <label className="label">Email</label>
                            </div>
                          </div>
                        </div>

                        <div className="input-container  mb-4">
                          <textarea
                            id="w3review"
                            name="w3review"
                            rows="40"
                            cols="30"
                            className="input"
                            placeholder=" "
                          ></textarea>
                          <label className="label" for="w3review">
                            message
                          </label>
                        </div>

                        <div className="send-message">
                          <button
                            type="button"
                            className="btn send-message-button btn-light w-100"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="google-map-section">
          <GoogleMap></GoogleMap>

          {/* <GoogleMapReact
  bootstrapURLKeys={{ key: "" }}
  defaultCenter={this.props.center}
  defaultZoom={this.props.zoom}
  yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
>
  <AnyReactComponent
    lat={59.955413}
    lng={30.337844}
    text="My Marker"
  />
</GoogleMapReact> */}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
