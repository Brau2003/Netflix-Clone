"use-strict";
const documentReady = () => {
  const tabHeaderItems = document.querySelectorAll(".tabs__tab-item");
  const tabContentItems = document.querySelectorAll(".tab-content__item");
  const tabHeaderIcons = document.querySelectorAll(".tab__icon");
  const movieTypes = document.querySelectorAll(".splide__movie-info");
  const movieContainer = document.querySelectorAll(".splide__movie-image-container");

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
  movieContainer.forEach((movie) => {
    movie.addEventListener("mouseenter", () => {});
    movie.addEventListener("mouseleave", () => {
      console.log("unhovered");
    });
  });
};

document.addEventListener("DOMContentLoaded", documentReady);