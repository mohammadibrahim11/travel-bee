import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { all } from "axios";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [tourGuide, setTourGuide] = useState([]);
  const [packages, setPackages] = useState([]);
  const [bookInfo, setBookInfo] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [favouriteHotel, setFavouriteHotel] = useState([]);
  const [favouriteFlight, setFavouriteFlight] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [carServices, setCarServices] = useState([]);
  const { user } = useContext(AuthContext);

  // get all car service data from database and filter by checkbox value
  const [visible, setVisible] = useState(6);
  // const [carServices, setCarServices] = useState([]);
  // console.log(packages);
  const [insideCityFilter, setInsideCityFilter] = useState(false);
  const [outSideCityFilter, setOutsideCityFilter] = useState(false);
  const [allDayFilter, setAlldayFilter] = useState(false);
  const [halfDayFilter, setHalfDayFilter] = useState(false);
  const [oneWayFilter, setOneWayFilter] = useState(false);
  const [roundFilter, setRoundFilter] = useState(false);
  console.log(
    allDayFilter,
    halfDayFilter,
    oneWayFilter,
    roundFilter,
    outSideCityFilter,
    insideCityFilter
  );

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/tourGuide")
      .then((res) => res.json())
      .then((data) => {
        setTourGuide(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/v2?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookInfo(data);
      });
  }, [user]);

  useEffect(() => {
    fetch("http://localhost:5000/favourites")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFavourites(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/favouritesHotel")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFavouriteHotel(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/favouritesFlight")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFavouriteFlight(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllUsers(data);
      });
  }, []);

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:5000/packages?intFilter=${intFilter || ""}&dmsFilter=${
  //       dmsFilter || ""
  //     }&tpFilter=${tpFilter || ""}&twpFilter=${twpFilter || ""}&thrFilter=${
  //       thrFilter || ""
  //     }`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPackages(data);
  //       // console.log(data);
  //     });
  // }, [intFilter, dmsFilter, tpFilter, twpFilter, thrFilter]);

  useEffect(() => {
    fetch(`http://localhost:5000/carServices?insideCityFilter=${insideCityFilter || ""}&outSideCityFilter=${outSideCityFilter || ""}`)
      .then((res) => res.json())
      .then((data) => {
        setCarServices(data);
        console.log(data);
      });
  }, [
    insideCityFilter,
    outSideCityFilter,

  ]);

  const apiData = {
    places,
    reviews,
    tourGuide,
    packages,
    bookInfo,
    favourites,
    favouriteHotel,
    favouriteFlight,
    allUsers,
    carServices,
    showMore,
    visible,
    insideCityFilter,
    outSideCityFilter,
    // halfDayFilter,
    // allDayFilter,
    // oneWayFilter,
    // roundFilter,
    setInsideCityFilter,
    setOutsideCityFilter,
    // setAlldayFilter,
    // setHalfDayFilter,
    // setOneWayFilter,
    // setRoundFilter,
  };

  return (
    <div>
      <ApiContext.Provider value={apiData}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
