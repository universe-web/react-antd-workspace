import React, { useRef, useEffect } from "react";
import echarts from "echarts";
import "echarts/lib/chart/pie";

function Line() {
  const line = useRef();

  useEffect(() => {
    initLine();
  }, []);

  const initLine = () => {
    let lChart = echarts.init(line.current);
    lChart.setOption({
      title: {
        text: "周数据",
        subtext: "虚构数据",
        left: "center",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "1号店",
          type: "line",
          /* data: [
            ["Mon", 820],
            ["Tue", 932],
            ["Wed", 901],
            ["Thu", 934],
            ["Fri", 1290],
            ["Sat", 1330],
            ["Sun", 1320],
          ], */
          data: [600, 932, 1100, 934, 1290, 1330, 1220],
        },
        {
          name: "2号店",
          type: "line",
          data: [920, 1032, 900, 1030, 1490, 1430, 1520],
        },
      ],
      tooltip: {
        show: true,
        // trigger: "item",
        // formatter: "{a} <br />{b}: {c}",
        trigger: "axis",
      },
      legend: {
        data: ["1号店", "2号店"],
        right: 20,
      },
    });
  };

  return (
    <div>
      <div ref={line} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}

export default Line;
