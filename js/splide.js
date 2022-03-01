const splide = new Splide(".splide", {
  // type: "loop",
  drag: "free",
  focus: "center",
  perPage: 3,
  pauseOnHover: true,
  // autoScroll: {
  //   speed: 0.2,
  // },
});

splide.mount(window.splide.Extensions);