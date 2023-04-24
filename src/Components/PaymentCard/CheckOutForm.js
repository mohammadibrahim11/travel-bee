import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/UserContext";

const CheckOutForm = ({ data }) => {
  // const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(data);
  const navigate = useNavigate();
  const { totalPrice, _id, userName, email } = data;
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProccesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalPrice,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProccesing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(
        clientSecret,
        // '{PAYMENT_INTENT_CLIENT_SECRET}',
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: email,
            },
          },
        }
      );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        totalPrice,

        transactionId: paymentIntent.id,
        email: email,
        bookingId: _id,
        user: userName,
        email,
        // name: name,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            setPaymentSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
            navigate("/bookingInfo");
            window.location.reload();
          }
        });
    }
    setProccesing(false);
    // console.log("paymentIntent", paymentIntent);
  };
  return (
    <div>
      <section>
        <h4 className="text-center text-primary mt-3 mb-5">
          Please,make your payment here
        </h4>
        <form className="payment-card" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "15px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            className="mt-4 btn btn-primary"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
          <p className="text-danger">{cardError}</p>
          {paymentSuccess && (
            <div>
              <p className="text-success">{paymentSuccess}</p>
              <p className="text-success">
                {" "}
                your transactionId : {transactionId}
              </p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default CheckOutForm;
