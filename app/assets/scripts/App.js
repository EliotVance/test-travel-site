import "../styles/styles.css";
import "lazysizes"
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */"./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("There was an error."));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
