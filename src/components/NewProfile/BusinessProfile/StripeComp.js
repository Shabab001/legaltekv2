import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";

let stripePK =
  "pk_test_51IeumWK6tNvAlffQIRqsnl5UILjlp5C165rxioyfQ2jHvLWjp0vOpFfckBAjIKp75EB3hFTgWTBwCArz030JbWlX00wmWR9yXW";
let stripeSecret =
  "sk_test_51IeumWK6tNvAlffQexGN0F9EqUdj2fiyxJgNrDmhV6pTtZAVzodo0LluVxDHxl0bqW2xdgQrcAtrjvbhBmCXIklb00jdHgAwj9";

const stripePromise = loadStripe(stripePK);

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  //   const stripe = useStripe();
  //   const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = (ev) => {
    // ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    // const billingDetails = {
    //   name: ev.target.name.value,
    //   email: ev.target.email.value,
    //   address: {
    //     city: ev.target.city.value,
    //     line1: ev.target.address.value,
    //     state: ev.target.state.value,
    //     postal_code: ev.target.zip.value,
    //   },
    // };

    // setProcessingTo(true);

    // const cardElement = elements.getElement("card");

    // try {
    //   const { data: clientSecret } = await axios.post("/api/payment_intents", {
    //     amount: price * 100,
    //   });

    //   const paymentMethodReq = await stripe.createPaymentMethod({
    //     type: "card",
    //     card: cardElement,
    //     billing_details: billingDetails,
    //   });

    //   if (paymentMethodReq.error) {
    //     setCheckoutError(paymentMethodReq.error.message);
    //     setProcessingTo(false);
    //     return;
    //   }

    //   const { error } = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: paymentMethodReq.paymentMethod.id,
    //   });

    //   if (error) {
    //     setCheckoutError(error.message);
    //     setProcessingTo(false);
    //     return;
    //   }

    //   onSuccessfulCheckout();
    // } catch (err) {
    //   setCheckoutError(err.message);
    // }
  };

  return (
    <Elements stripe={stripePromise}>
      {" "}
      <MyComponent
      //   options={cardElementOpts}
      //   onChange={handleCardDetailsChange}
      />
    </Elements>
  );
};

export default CheckoutForm;

const MyComponent = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  // const {options, onChange} = props
  const handleCardDetailsChange = (ev) => {
      console.log(ev)
    // ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async () => {
    
    const cardElement = elements.getElement("card");

    try {
        console.log('got in')
    //   const { data: clientSecret } = await axios.post("/api/payment_intents", {
    //     amount: 20 * 100
    //   });
    //   console.log(clientSecret)

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement
      });
      console.log(paymentMethodReq)
    }catch(err){
        console.log(err)
    }
  }

  const iframeStyles = {
    base: {
      color: "#000",
      fontSize: "16px",
      iconColor: "#000",
      "::placeholder": {
        color: "gray",
      },
    },
    invalid: {
      iconColor: "#000",
      color: "#000",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };
  return (
      <div className="stripeCont">
        <CardElement
          options={cardElementOpts}
          onChange={handleCardDetailsChange}
        />
        {/* <button
          onClick={(e) =>{
            e.preventDefault()
            handleFormSubmit()
          }}
        >
          Submit
        </button> */}
      </div>
  );

  // rest of the component
};
