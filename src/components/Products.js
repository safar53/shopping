import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";

const Products = (props) => {

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
          <Link to="/cart">
            <FiShoppingCart />
            Cart ({totalCartCount})
          </Link>
        </div>
      </div>
      <div className="content">
        {props.bookList.map((book) => (
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
              <button
                className="add-to-cart"
                onClick={() => props.addToCart(book)}
              >
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart
  };
};

export default connect(mapStateToProps, { addToCart })(Products);
