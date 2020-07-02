export default [
  {
    text: "APP",
    url: "/app",
    icon: "appstore",
  },
  {
    text: "Part-One",
    url: "/partone",
    icon: "code",
    children: [
      {
        text: "One",
        url: "/partone/one",
      },
      {
        text: "Two",
        url: "/partone/two",
      },
    ],
  },
  {
    text: "html5",
    url: "/html",
    icon: "html5",
  },
  {
    text: "可视化",
    url: "/visual",
    icon: "line-chart",
    children: [
      {
        text: "饼图",
        url: "/visual/pie",
      },
      {
        text: "折线图",
        url: "/visual/line",
      },
    ],
  },
];
