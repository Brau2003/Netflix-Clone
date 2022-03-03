"use-strict";
const documentReady = () => {
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

  const displayProximamente = () => {
    document.getElementById("demo").innerHTML = "Próximamente...";
  };

  metricasNextYearbtn.addEventListener("click", displayProximamente);
};

function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}

document.addEventListener("DOMContentLoaded", documentReady);
