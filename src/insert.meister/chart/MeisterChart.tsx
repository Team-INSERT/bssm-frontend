import React from "react";
import * as d3 from "d3";
import { color } from "@/_styles";
import { IMeister } from "@/_interfaces";
import { useDidMountEffect } from "@/_hooks/useDidMountEffect";

interface MeisterChartData {
  group:
    | "basicJobSkills"
    | "professionalTech"
    | "workEthic"
    | "humanities"
    | "foreignScore";
  scoreType: "avg" | "meister" | "max";
}

const graphColor = {
  avg: color.primary_yellow,
  meister: color.primary_blue,
  max: color.primary_red,
};

const groups = [
  "직업 기초 능력",
  "전문 기술 역량",
  "인성 직업 의식",
  "인문학적 소양",
  "외국어 능력",
];

const data: MeisterChartData[] = [
  { group: "basicJobSkills", scoreType: "avg" },
  { group: "basicJobSkills", scoreType: "meister" },
  { group: "basicJobSkills", scoreType: "max" },

  { group: "professionalTech", scoreType: "avg" },
  { group: "professionalTech", scoreType: "meister" },
  { group: "professionalTech", scoreType: "max" },

  { group: "workEthic", scoreType: "avg" },
  { group: "workEthic", scoreType: "meister" },
  { group: "workEthic", scoreType: "max" },

  { group: "humanities", scoreType: "avg" },
  { group: "humanities", scoreType: "meister" },
  { group: "humanities", scoreType: "max" },

  { group: "foreignScore", scoreType: "avg" },
  { group: "foreignScore", scoreType: "meister" },
  { group: "foreignScore", scoreType: "max" },
];

const meisterSeparation = [0, 30, 60];

interface IMeisterChartProps {
  meisterData: IMeister;
}

const MeisterChart = ({ meisterData }: IMeisterChartProps) => {
  const canvasRef = React.useRef(null);

  useDidMountEffect(() => {
    if (meisterData.avg.basicJobSkills === 0) return;
    const canvas = d3.select(canvasRef.current);
    const svg = canvas
      .append("svg")
      .attr("width", "100%")
      .attr("height", "14vw");

    let separator = 0;

    data.forEach((item, idx) => {
      const index = idx + 1;
      const startX = 1.5;

      const X = `${index * 4 + startX + separator}%`;

      if (index % 3 === 0) separator += 8;

      svg
        .append("rect")
        .attr("x", X)
        .attr("height", "0%")
        .attr("y", "100%")
        .attr("width", 15)
        .attr("fill", graphColor[item.scoreType])
        .transition()
        .duration(1000)
        .attr(
          "height",
          `${(meisterData[item.scoreType][item.group] / data.length) * 120}%`,
        )
        .attr("y", `${110 - meisterData[item.scoreType][item.group]}%`);

      svg
        .append("text")
        .attr("x", X)
        .attr("y", `100%`)
        .style("fill", "none")
        .style("font-weight", "600")
        .style("font-size", "10px")
        .transition()
        .duration(1000)
        .attr("y", `${108 - meisterData[item.scoreType][item.group]}%`)
        .text(Math.round(meisterData[item.scoreType][item.group]))
        .style("fill", color.gray);
    });

    groups.forEach((groupText, index) => {
      svg
        .append("text")
        .attr("x", `${(index + 1) * 19.5 - 12}%`)
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
        .attr("x2", "98%")
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
  }, [meisterData]);

  return <div ref={canvasRef} />;
};

export default MeisterChart;
