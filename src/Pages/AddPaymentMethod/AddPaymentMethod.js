import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaApple } from "react-icons/fa";
import './AddPaymentMethod.css'
import { Link } from 'react-router-dom';

const AddPaymentMethod = () => {
    return (
        <div>
             <section className="">
        <div className="container  py-5 ">
          <div className="row ">
            <div className="col">
              <div className="">
                <div className="row g-0">
                  <div className="  col-xl-6 d-none d-xl-block">
                    <img
                      src="https://i.ibb.co/xmbWzPk/Group-5.png"
                      alt="SamplePhoto"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6 ">
                
                    <div className="signup-body">
                      <h3 className="mb-4 fw-bold">Add A Payment Method</h3>
                      <p>Let’s get you all st up so you can access your personal account.</p>
                     

                      <div className="row ">
                        <div className="col-12 mb-4">
                          <div className="input-container">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">Card Number</label>
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
                            <label className="label">Last Name</label>
                          </div>
                        </div> */}
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              id="form3Example1m"
                              className="input"
                              placeholder=" "
                            />
                            <label className="label">Exp. Date</label>
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
                            <label className="label">CVC</label>
                          </div>
                        </div>
                      </div>

                      <div className="input-container password mb-4">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Name on Card</label>
                      </div>
                      <div className="input-container password mb-4">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="input"
                          placeholder=" "
                        />
                        <label className="label">Country or Region</label>
                      </div>
                      <div className='text-start'>
                       <input type="checkbox" />
                        <label className="ms-1">Securely save my information</label>
                       </div>

                      <div className="signUp">
                        <button type="button" className="btn create-account-button btn-light w-100">
                          Add payment method
                        </button>
                      </div>
                      <div className="text-center mt-3">
                        <span className="text-muted ">
                        By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
                        </span>
                      
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

export default AddPaymentMethod;