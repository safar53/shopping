import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = (props) => {
  return (
    <div className="App">
      <Route exact path="/shopping" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

export default App;
