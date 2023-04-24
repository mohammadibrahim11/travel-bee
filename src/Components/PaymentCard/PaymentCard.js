import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import "./PaymentCard.css";

const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);
// console.log(stripePromise);

const PaymentCard = () => {

  const data = useLoaderData();
  // console.log(data);

  // strip password: tEfGB3!ppE{ZYw2
  // pk: pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8
  return <div>
    <section className="mt-5 mb-5 pb-5 pt-5  "> 
      <div  >
      <Elements  stripe={stripePromise} >
            <CheckOutForm data={data} ></CheckOutForm>
        </Elements>
      </div>
    </section>
  </div>;
};

export default PaymentCard;
