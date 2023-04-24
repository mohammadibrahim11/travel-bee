import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./UserBookings.css";

const UserBookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["userookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  // console.log(bookings);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>packageName</th>
              <th>Date</th>
              <th>Email</th>
              <th>Payment</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.userName}</td>
                  <td>{booking.packageName}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.email}</td>
                  <td>
                    {booking.totalPrice && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-danger btn-small">
                          pay
                        </button>
                      </Link>
                    )}
                    {booking.totalPrice && booking.paid && (
                      <span className="btn btn-success disabled">Paid</span>
                    )}
                  </td>
                  {/* <td>
                    <button className="btn btn-danger">delete</button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookings;
