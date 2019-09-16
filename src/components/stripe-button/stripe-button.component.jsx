import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_hpTBOriVe0iEtyNa1mvss4AX";
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="Dhanai fruits mart"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
