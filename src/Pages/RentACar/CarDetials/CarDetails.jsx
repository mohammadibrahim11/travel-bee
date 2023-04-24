import React from "react";
import "./CarDetails.css";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const carDetails = useLoaderData();
  const { category, trip, image, duration, info, original_price,_id } = carDetails;
 
  return <div>car details</div>;
};

export default CarDetails;
