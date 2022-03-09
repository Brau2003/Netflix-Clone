"use-strict";
const documentReady = () => {
  // Start header
  const headerScroll = () => {
    const header = document.getElementById("header");
    header.classList.toggle("header--scroll", window.scrollY > 0);
  };
  window.addEventListener("scroll", headerScroll);

  // End header

  const tabHeaderItems = document.querySelectorAll(".tabs__tab-item");
  const tabContentItems = document.querySelectorAll(".tab-content__item");
  const tabHeaderIcons = document.querySelectorAll(".tab__icon");
  const metricasNextYearbtn = document.getElementById("metricasNextYearButton");
  const dynamicDateEl = document.querySelectorAll("#dynamicDateEl");

  // Dynamic date element
  const date = new Date();
  date.setDate(date.getDate() + 30);
  const dayIn30Days = String(date.getDate()).padStart(2, "0");
  const monthIn30Days = String(date.getMonth() + 1).padStart(2, "0");
  const yearIn30Days = date.getFullYear();
  const dateIn30Days = dayIn30Days + "/" + monthIn30Days + "/" + yearIn30Days;

  dynamicDateEl.forEach((element) => {
    element.innerHTML = dateIn30Days;
  });

  function removeHeaderTabActive() {
    tabHeaderItems.forEach((item) => {
      item.classList.remove("tabs__tab-item--active");
    });
  }

  function removeTabIconActive() {
    tabHeaderIcons.forEach((icon) => {
      icon.classList.remove("tab__icon--active");
    });
  }

  function removeTabShow() {
    tabContentItems.forEach((item) => {
      item.classList.remove("show");
    });
  }

  function selectTabItem() {
    removeHeaderTabActive();
    removeTabShow();
    removeTabIconActive();
    this.classList.add("tabs__tab-item--active");

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
    tabContentItem.classList.add("show");
    tabHeaderIcon.classList.add("tab__icon--active");
  }

  function enterTabItem() {
    const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
    tabHeaderIcon.classList.add("tab__icon--hover");
  }

  function leaveTabItem() {
    const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
    tabHeaderIcon.classList.remove("tab__icon--hover");
  }

  tabHeaderItems.forEach((item) => {
    item.addEventListener("click", selectTabItem);
    item.addEventListener("mouseenter", enterTabItem);
    item.addEventListener("mouseleave", leaveTabItem);
  });
};

// Animate Button for FAQ

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var classname = document.getElementsByClassName("faq__button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener("click", animateButton, false);
}

document.addEventListener("DOMContentLoaded", documentReady);
