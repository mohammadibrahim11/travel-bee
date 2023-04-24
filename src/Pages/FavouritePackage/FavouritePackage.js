import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/UserContext";
import { ApiContext } from "../../DataContext.js/DataContext";
import FPackage from "../../FPackage/FPackage";

const FavouritePackage = () => {
  const { favourites } = useContext(ApiContext);
  const { loading } = useContext(AuthContext);

  const handleDelete = (_id) => {
    const agree = window.confirm("are you sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/favourites/${_id}`, {
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
  return (
    <div>
      <section>
        {favourites.length ? (
          <div>
            {favourites.map((favPackage) => (
              <FPackage
                favPackage={favPackage}
                handleDelete={handleDelete}
              ></FPackage>
            ))}
          </div>
        ) : (
          <p className="text-semibold text-danger-emphasis container m-auto">
            No Favourites Package Found
          </p>
        )}
      </section>
    </div>
  );
};

export default FavouritePackage;
