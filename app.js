import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement(
  "div",
  { class: "first" },
  React.createElement("div", { class: "second" }, [
    React.createElement("h1", {}, "Here we go.."),
    React.createElement("h3", {}, "BITW.."),
  ]),
  React.createElement("div", { class: "next" }, [
    React.createElement("h1", {}, "FINISH THE STORY"),
    React.createElement("h2", {}, "FINISH THE STORY"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
