const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 5,
  breakpoints: {
    920: {
      perPage: 4,
    },
    800: {
      perPage: 3,
    },
    570: {
      perPage: 2,
    },
  },
  pauseOnHover: true,
  autoScroll: {
    speed: 0.12,
  },
});

splide.mount(window.splide.Extensions);
