import React from "react";
import "./custom.button.styles.scss";
const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`
      ${isGoogleSignIn ? "google-signin" : ""} 
      ${inverted ? "inverted" : ""}
      custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
