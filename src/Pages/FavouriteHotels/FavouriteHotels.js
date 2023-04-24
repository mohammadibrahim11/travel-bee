import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsFillCupFill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdDelete, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/UserContext";
import { ApiContext } from "../../DataContext.js/DataContext";
import Fhotel from "../Fhotel/Fhotel";

const FavouriteHotels = () => {
  const { favouriteHotel } = useContext(ApiContext);
  // console.log(favouriteHotel);
  const { loading } = useContext(AuthContext);

  const handleDelete = (_id) => {
    const agree = window.confirm("are you sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/favouritesHotel/${_id}`, {
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

  // const handleRemove = (id) => {
  //   const agree = window.confirm("are you sure you want to delete?");
  //   if (agree) {
  //     fetch(`http://localhost:5000/favouritesHotel/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           toast.success("deleted successfully");
  //           window.location.reload();
  //         }
  //       });
  //   }
  // };
  if (loading) {
    return <Loading></Loading>;
  }
  // }
  return (
    <div>
      <section>
        <div>
          {favouriteHotel.length ? (
            <div>
              {favouriteHotel.map((FHotel) => (
                <Fhotel FHotel={FHotel} handleDelete={handleDelete}></Fhotel>
              ))}
            </div>
          ) : (
            <p className="text-semibold text-danger-emphasis container m-auto">
              No Favourites Hotel Found
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavouriteHotels;
