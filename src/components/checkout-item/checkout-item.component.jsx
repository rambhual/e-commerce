import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  addItem,
  removeCart
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem, clearItem, addCart, removeCart }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <span>&#10005;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeCartItem(item)),
  addCart: item => dispatch(addItem(item)),
  removeCart: item => dispatch(removeCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
