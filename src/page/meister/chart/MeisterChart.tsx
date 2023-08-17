import React from "react";
import * as d3 from "d3";
import { color } from "@/styles";

type YearType = "2021" | "2022" | "2023";

interface MeisterChartData {
  group: string;
  year: YearType;
  points: number;
}

const graphColor = {
  "2021": color.primary_yellow,
  "2022": color.primary_blue,
  "2023": color.primary_red,
};

const groups = [
  "외국어 능력",
  "인성 직업 의식",
  "전문 기술 역량",
  "인문학적 소양",
  "직업 기초 능력",
];

const data: MeisterChartData[] = [
  { group: "외국어 능력", year: "2021", points: 32 },
  { group: "외국어 능력", year: "2022", points: 43 },
  { group: "외국어 능력", year: "2023", points: 44 },

  { group: "인성 직업 의식", year: "2021", points: 40 },
  { group: "인성 직업 의식", year: "2022", points: 36 },
  { group: "인성 직업 의식", year: "2023", points: 31 },

  { group: "전문 기술 역량", year: "2021", points: 37 },
  { group: "전문 기술 역량", year: "2022", points: 10 },
  { group: "전문 기술 역량", year: "2023", points: 17 },

  { group: "인문학적 소양", year: "2021", points: 10 },
  { group: "인문학적 소양", year: "2022", points: 23 },
  { group: "인문학적 소양", year: "2023", points: 4 },

  { group: "직업 기초 능력", year: "2021", points: 38 },
  { group: "직업 기초 능력", year: "2022", points: 2 },
  { group: "직업 기초 능력", year: "2023", points: 25 },
];

const meisterSeparation = [0, 30, 60];

const MeisterChart = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas
      .append("svg")
      .attr("width", "100%")
      .attr("height", "14vw");

    let separator = 0;

    data.forEach((item, idx) => {
      const index = idx + 1;
      const startX = 20;

      const X = index * 30 + startX + separator;

      if (index % 3 === 0) separator += 50;

      svg
        .append("rect")
        .attr("x", X)
        .attr("height", "0%")
        .attr("y", "100%")
        .attr("width", 15)
        .attr("fill", graphColor[item.year])
        .transition()
        .duration(1000)
        .attr("height", `${(item.points / data.length) * 100}%`)
        .attr("y", `${100 - item.points}%`);

      svg
        .append("text")
        .attr("x", X + 1)
        .attr("y", `100%`)
        .style("fill", "none")
        .style("font-weight", "600")
        .style("font-size", "10px")
        .transition()
        .duration(1000)
        .attr("y", `${98 - item.points}%`)
        .text(item.points)
        .style("fill", color.gray);
    });

    groups.forEach((groupText, index) => {
      svg
        .append("text")
        .attr("x", (index + 1) * 138 - 80)
        .attr("y", "20%")
        .text(groupText)
        .style("fill", color.gray)
        .style("font-weight", "600")
        .style("font-size", "12px");
    });

    meisterSeparation.forEach((item) => {
      svg
        .append("line")
        .attr("x1", 40)
        .attr("x2", "95%")
        .attr("y1", `${100 - item}%`)
        .attr("y2", `${100 - item}%`)
        .attr("stroke-width", 1)
        .style("stroke-dasharray", "8, 3")
        .attr("stroke", color.on_tertiary);

      svg
        .append("text")
        .attr("x", 20)
        .attr("y", `${99 - item}%`)
        .text(item)
        .style("fill", color.on_tertiary)
        .style("font-weight", "600")
        .style("font-size", "12px");
    });
  }, []);

  return <div ref={canvasRef} />;
};

export default MeisterChart;
