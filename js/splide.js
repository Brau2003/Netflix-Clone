const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 4,
  breakpoints: {
    830: {
      perPage: 3,
    },
    480: {
      perPage: 2,
    },
  },
  pauseOnHover: true,
  autoScroll: {
    speed: 0.1,
  },
});

splide.mount(window.splide.Extensions);
