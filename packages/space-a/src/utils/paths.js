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
    text: "Part-Two",
    url: "/parttwo",
    icon: "code",
    children: [
      {
        text: "Canvas",
        url: "/parttwo/canvas",
      },
      {
        text: "弹窗动画",
        url: "/parttwo/ui",
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
      {
        text: "柱状图",
        url: "/visual/bar",
      },
      {
        text: "地图",
        url: "/visual/geo",
      },
    ],
  },
];
