import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../views/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
    </BrowserRouter>
  );
};

export default Routes;
