import React, { useContext } from "react";
import "./UserProfile.css";
import { AuthContext } from "../../Context/UserContext";
import { ApiContext } from "../../DataContext.js/DataContext";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-hot-toast";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const { bookInfo } = useContext(ApiContext);
  const { loading } = useContext(AuthContext);
  // const [remaining , setRemaining] = useState(bookInfo);
  // console.log(bookInfo);

  const handleDelete = (id) => {
    const agree = window.confirm("are you sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            window.location.reload();
          }
        });
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  // console.log(user);
  return (
    <div>
      <section className="profile-header-section">
        <div>
          <h2>See Your Profile</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      <section className="w-50 m-auto">
        <div className="d-flex justify-content-center align-items-center">
          <img className="border rounded-circle" src={user.photoURL} alt="" />
          <div className="fw-semibold fs-6 ms-3">
            <small>{user.displayName}</small>
            <br />
            <small>{user.email}</small>
          </div>
        </div>
      </section>
      <hr />
      <section className=" mt-5 mb-5 container">
        <h4 className="mt-5 mb-4 fw-semibold">Your Booking Info</h4>

        <div className="container"> 
          {bookInfo.map((book) => (
            <>
              <div
                class="card text-bg-primary mb-3 pb-4 pt-2"
                // style={{ "max-width": "800px" }}
              >
                <div class="card-header"> {book.packageName} </div>
                <div class="card-body">
                  <div className="d-flex justify-content-between align-content-center ">
                    <h5 class="card-title">Name :{book.userName}</h5>
                    <p class="card-text">Email :{book.email}</p>
                  </div>
                  <div className="d-flex justify-content-between align-content-center">
                    <p class="card-text">Contact :{book.contact}</p>
                    <p class="card-text">Price :{book.totalPrice}</p>
                  </div>
                  <p class="card-text">BookingDate :{book.bookingDate}</p>
                </div>
                <div className="d-flex justify-content-evenly align-content-center">
                  {book.totalPrice && !book.paid ? (
                    <Link
                      to={`/paymentcard/${book._id}`}
                      className="btn btn-warning"
                    >
                      make payment
                    </Link>
                  ) : (
                    <>
                      {" "}
                      <Link
                        to={`/downloadpdf/${book._id}`}
                        className="btn btn-warning "
                      >
                        download Pdf
                      </Link>
                    </>
                  )}
                  <div
                    className="btn btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    cancel booking
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
