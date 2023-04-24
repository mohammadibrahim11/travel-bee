import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import FFlights from "../../Components/FFlights/FFlights";

import { ApiContext } from "../../DataContext.js/DataContext";

const FavouriteFlights = () => {
  const {favouriteFlight}  = useContext(ApiContext);
  // console.log(favouriteFlight);

  const handleDelete = (_id) => {
    const agree = window.confirm("are you sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/favouritesFlight/${_id}`, {
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
  return (
    <div>
      {" "}
      <section>
        {favouriteFlight.length ? (
          <div>
            {favouriteFlight.map((favflight) => (
              <FFlights
                favflight={favflight}
                handleDelete={handleDelete}
              ></FFlights>
            ))}
          </div>
        ) : (
          <p className="text-semibold text-danger-emphasis container m-auto">
            No Favourites Flights Found
          </p>
        )}
      </section>
    </div>
  );
};

export default FavouriteFlights;
