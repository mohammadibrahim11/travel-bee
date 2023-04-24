import React from "react";
import AddReviews from "../../Components/AddReviews/AddReviews";
import Header from "../Header/Header";
import Places from "./Places/Places";
import UserReviews from "./UserReviews/UserReviews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Places></Places>
      <UserReviews></UserReviews>
      <AddReviews></AddReviews>
          
    </div>
  );
};

export default Home;
