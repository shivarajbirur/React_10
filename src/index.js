// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const customerHeading = {
  color: "#32c888",
  fontSize: "80px"
};

customerHeading.color = "#c8129a";

const myElement = (
  <div>
    <h1 style={customerHeading}>Hello World!!!</h1>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(myElement);
