import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllProduct from "./AllProducts";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./ProductDetails";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/AllProducts">
          <AllProduct />
        </Route>
        <Route exact path="/ProductDetails/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
