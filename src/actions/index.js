const addToCart = (book) => {
  return { type: "ADD_TO_CART", payload: book };
};

const removeFromCart = (id) => {
    return { type: "REMOVE_FROM_CART", payload: id };
};

const increase = (id) => {
    return { type: "INCREASE_BOOKS", payload: id };
};

const decrease = (id) => {
    return { type: "DECREASE_BOOKS", payload: id };
};

export { addToCart, removeFromCart, increase, decrease }
