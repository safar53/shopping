import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart, increase, decrease } from "../actions";
import {
  FiShoppingCart,
  FiArrowLeft,
  FiPlus,
  FiMinus,
  FiShoppingBag,
} from "react-icons/fi";

const Cart = (props) => {

  const totalCartAmount = props.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  const totalCartCount = props.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <div className="container">
      <div className="header">
        <div className="header-top">
          <FiShoppingBag />
          Shop
        </div>
        <div className="navbar">
          <Link to="/shopping">
            <FiArrowLeft />
            Book List
          </Link>{" "}
          <span>
            <FiShoppingCart />
            Cart ({totalCartCount})
          </span>
        </div>
      </div>
      <div className="content">
        <div className="total-amount">Total Cart Amount: {totalCartAmount}$</div>
        {props.cart.map((book) => (
          <div className="book-container" key={book.id}>
            <div className="book-img">
              <div className="aspect-ratio-container">
                <img
                  className="aspect-ratio-item"
                  src={book.image}
                  alt={book.name}
                />
              </div>
            </div>
            <div className="book-info">
              <h3 className="book-name">{book.name}</h3>
              <p className="author">Author: {book.author}</p>
              <p className="price">Price: {book.price}$</p>
              <p className="count">Count: {book.count}</p>
              <p className="total-price">Total: {(book.price * book.count).toFixed(2)}$</p>
              <button className="increase" onClick={() => props.decrease(book.id)}>
                <FiMinus />
              </button>
              <button className="decrease" onClick={() => props.increase(book.id)}>
                <FiPlus />
              </button>
              <button className="remove-from-cart" onClick={() => props.removeFromCart(book.id)}>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart, increase, decrease })(Cart);
