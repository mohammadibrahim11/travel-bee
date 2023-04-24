import React from "react";
import { Link } from "react-router-dom";
import './Bookinfo.css'

const Bookinfo = ({ book, handleDelete }) => {
  const {
    packageName,
    userName,
    email,
    contact,
    totalPrice,
    bookingDate,
    _id,
  } = book;
  return (
    <div>
      <section className="book-info">
        <div
          class="card text-bg-primary mb-3 pb-4 pt-2"
          // style={{ "max-width": "800px" }}
        >
          <div class="card-header"> {packageName} </div>
          <div class="card-body">
            <div className="d-flex justify-content-between align-content-center ">
              <h5 class="card-title">Name :{userName}</h5>
              <p class="card-text">Email :{email}</p>
            </div>
            <div className="d-flex justify-content-between align-content-center">
              <p class="card-text">Contact :{contact}</p>
              <p class="card-text">Price :{totalPrice}</p>
            </div>
            <p class="card-text">BookingDate :{bookingDate}</p>
          </div>
          <div className="d-flex justify-content-evenly align-content-center">
            {totalPrice && !book.paid ? (
              <Link to={`/paymentcard/${_id}`} className="btn btn-warning">
                make payment
              </Link>
            ) : (
              <>
                {" "}
                <Link to={`/downloadpdf/${_id}`} className="btn btn-warning ">
                  download Pdf
                </Link>
              </>
            )}
            <div className="btn btn-danger" onClick={() => handleDelete(_id)}>
              cancel booking
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookinfo;
