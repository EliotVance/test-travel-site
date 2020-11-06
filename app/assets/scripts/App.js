import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";

// React related codes
import React from "react";
import ReactDOM from "react-dom";

// Import React components
import MyReactComponent from './modules/MyReactComponent'

ReactDOM.render(
  <MyReactComponent />,
  document.querySelector("#my-react-example")
);

new StickyHeader();
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("There was a problem."));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
