import React, { useEffect, useRef } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";

const labelOption = {
  show: true,
  position: "insideBottom",
  distance: 50,
  rotate: 90,
  verticalAlign: "center",
  formatter: "{a}: {c}",
  // formatter: "{c}",
  fontWeight: "bolder",
};

function Bar() {
  const echart = useRef();

  useEffect(() => {
    initBar();
  }, []);

  const initBar = () => {
    let bChart = echarts.init(echart.current);

    bChart.setOption({
      title: {
        text: "柱状图",
        subtext: "虚构数据",
        left: "center",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Forest",
          type: "bar",
          label: labelOption,
          data: [320, 132, 301, 334, 390],
          color: "rgba(105, 105, 105, 0.8)",
        },
        {
          name: "Steppe",
          type: "bar",
          label: labelOption,
          data: [220, 182, 291, 334, 290],
          color: "rgba(255, 165, 0, 0.8)",
        },
        {
          name: "Desert",
          type: "bar",
          label: labelOption,
          data: [150, 232, 201, 154, 190],
          color: "rgba(255, 0, 255, 0.8)",
        },
        {
          name: "Wetland",
          type: "bar",
          label: labelOption,
          data: [98, 77, 101, 99, 40],
          color: "rgba(65, 105, 225, 0.8)",
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
    });
  };

  /* const initBar = () => {
    const bChart = echarts.init(bar.current);

    bChart.setOption({
      title: {
        text: "柱状图",
        subtext: "虚构数据",
        left: "center",
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        type: "category",
        data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
      },
      legend: {
        type: "plain",
        top: 50,
      },
      grid: {
        top: 80,
      },
      series: [
        {
          name: "2018",
          type: "bar",
          label: labelOption,
          data: [18203, 23489, 29034, 104970, 131744, 630230],
          color: "rgba(255, 0, 255, 0.8)",
        },
        {
          name: "2019",
          type: "bar",
          label: labelOption,
          data: [19325, 23438, 31000, 121594, 134141, 681807],
          color: "rgba(255, 165, 0, 0.8)",
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
    });
  }; */

  return (
    <div>
      <div ref={echart} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}

export default Bar;
