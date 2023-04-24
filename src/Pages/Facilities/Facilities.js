import React, { useContext, useState } from "react";
import AddReviews from "../../Components/AddReviews/AddReviews";
import GuideCard from "../../Components/GuideCard/GuideCard";
import { ApiContext } from "../../DataContext.js/DataContext";
import UserReviews from "../Home/UserReviews/UserReviews";
import { BiDish } from "react-icons/bi";
import { GiForestCamp } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import {
  MdOutlineEmojiTransportation,
  MdMedicalServices,
  MdTour,
} from "react-icons/md";
import "./Facilities.css";

const Facilities = () => {
  const { tourGuide } = useContext(ApiContext);
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  return (
    <div>
      <section className="facilities-header-section">
        <div>
          <h2>Travel World To Gain Knowledge</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      <section className="tour-guide-section ">
        <div className="heading">
          <h2>Meet Our Tour Guide</h2>
          <p>
            Find a Local tour guide. so, you can know more about the tourist
            places
          </p>
        </div>

        <div className="tour-guide-card-container container m-auto ">
          {tourGuide.slice(0, visible).map((guide) => (
            <GuideCard guide={guide} key={guide._id}></GuideCard>
          ))}
        </div>
        <div className=" d-flex justify-content-center mt-4" onClick={showMore}>
          <button className="btn btn-light ">show more</button>
        </div>
      </section>
      <section className="services-section container">
        <div className="service-section-heading">
          <h2> Our Services </h2>
          <p className="text-center">see our popular services.</p>
        </div>
        <div className="benefits-container">
          <div className="d-flex justify-content-start align-items-start   gap-3 p-3 border rounded-3 shadow">
            <div>
              <BiDish
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Food & Drink</h4>
              <p>
                Fresh and best quality food in our
                <br /> known resturent.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3 shadow ">
            <div>
              <MdOutlineEmojiTransportation
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Transportation</h4>
              <p>
                We provie you the best trasportation
                <br /> facility in the city.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <FaBed
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Accommodation</h4>
              <p>
                You will find the best hotel
                <br /> in our tour packages.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <MdMedicalServices
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Medical</h4>
              <p>
                we will take care when you fall into
                <br /> trouble in your journey.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <GiForestCamp
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>CampFire</h4>
              <p>
                we can arrange best camping
                <br /> as your favourites.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start  gap-3 p-3 border rounded-3  shadow">
            <div>
              <MdTour
                className="benefits-icon"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="benefits-info">
              <h4>Tour Guide</h4>
              <p>
                Choose your favourite tour guide
                <br /> from our tour guide list.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="accordion-section container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h6>What they say</h6>
            <h2>Frequently Asked Question</h2>
            <p>
              Travel is one of those things that naturally gives rise to
              queries, concerns and doubts, so we’re here to put your mind at
              ease. Which trip is right for me? What do I do about visas? How
              does Intrepid manage COVID-19? How much do I tip? Should I have
              banh mi or pho for lunch? For questions frequent and otherwise,
              this is the spot.
            </p>
          </div>
          <div className=" col-sm-12 col-lg-6 col-md-6">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Do you book a group travel?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes, we book group travel all the time! We specialize in
                    helping groups of all sizes plan their dream trips. From
                    family reunions to corporate retreats, we can take care of
                    all the details so you can relax and enjoy your time away.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Do i need travel insurance?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes. We highly recommend travel protection, it’s important
                    to protect your trip investment and loved ones. We will
                    offer you the best option for your vacation.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    When can I book my trip with guide my Away?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    You can book your trip with us at any time. We are available
                    to help you plan your next adventure, and we offer a wide
                    range of services, including flight and hotel bookings,
                    tours and activities, and much more. So whether you are
                    planning a last-minute getaway or a long-awaited vacation,
                    we can help you make it happen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>

        {/* <div className="col-6">
          <h6>What they say</h6>
          <h2>Frequently Asked Question</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            eaque corporis. Cumque dicta delectus accusantium blanditiis
            inventore at dolore vitae.
          </p>
        </div>
        <div className="col-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How to book a trip?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How to get in touch with you?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                 How to cancel a trip?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <hr />
      <section>
        <UserReviews></UserReviews>
      </section>
      <section>
        <AddReviews></AddReviews>
      </section>
    </div>
  );
};

export default Facilities;
