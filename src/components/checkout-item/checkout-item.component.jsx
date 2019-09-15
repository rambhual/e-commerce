import React from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <span>&#10005;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeCartItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
