import React, { useRef, useEffect } from "react";
import echarts from "echarts";
import "echarts/lib/chart/pie";

function Pie() {
  const pie = useRef();

  useEffect(() => {
    initPie();
  }, []);

  const initPie = () => {
    let pChart = echarts.init(pie.current);
    pChart.setOption({
      title: {
        text: "前端技术使用统计",
        subtext: "虚构数据",
        left: "center",
      },
      series: [
        {
          name: "使用统计",
          type: "pie",
          radius: "55%",
          // width: 300,
          // left: 20,
          data: [
            { value: 666, name: "React" },
            { value: 500, name: "Vue" },
            { value: 310, name: "小程序" },
            { value: 135, name: "Angular" },
            { value: 80, name: "原生" },
          ],
        },
      ],
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a} <br />{b}: {c}({d}%)",
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        right: 50,
        top: 20,
        bottom: 20,
      },
      color: [
        "rgb(30, 144, 255)",
        "rgb(0, 191, 255)",
        "rgb(252, 157, 154)",
        "rgb(255, 215, 0)",
        "rgb(255, 218, 185)",
      ],
    });
  };

  return (
    <div>
      <div ref={pie} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}

export default Pie;
