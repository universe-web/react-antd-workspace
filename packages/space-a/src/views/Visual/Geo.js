import React, { useEffect, useRef } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/map/js/china";

const defaultData = [
  { name: "茂名", value: [110.88, 21.68, 10] },
  { name: "广州", value: [113.23, 23.16, 8] },
];

function Geo() {
  const echart = useRef();

  useEffect(() => {
    initGeo();
  }, []);

  const initGeo = () => {
    const gChart = echarts.init(echart.current);
    gChart.setOption({
      title: {
        text: "地理坐标系 & 散点图",
        subtext: "虚构数据",
        left: "center",
      },
      geo: {
        map: "china",
        roam: true,
        label: {
          show: true,
        },
        itemStyle: {
          areaColor: "rgba(0, 0, 0, 0.6)",
        },
        opacity: 0.7,
      },
      tooltip: {
        trigger: "item",
        formatter: (params) => {
          return `${params.name}: ${params.value[2]}`;
        },
      },
      series: [
        {
          name: "某种数据",
          type: "scatter",
          coordinateSystem: "geo",
          data: defaultData,
          symbolSize: 10,
          itemStyle: {
            color: "rgba(255, 140, 0, 0.8)",
          },
        },
      ],
    });
  };

  return (
    <div style={{ flex: "1", height: "0" }}>
      <div ref={echart} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Geo;
