import React from "react";
import * as d3 from "d3";
import { theme } from "@/styles";
import { useDidMountEffect } from "@/hooks";
import { Meister } from "../types";
import {
  graphColorData,
  meisterChartData,
  meisterVariableData,
} from "../assets/data";

const MeisterChart = ({ ...meisterData }: Meister) => {
  const [canvasRef, setCanvasRef] = React.useState<HTMLDivElement | null>(null);

  useDidMountEffect(() => {
    if (!canvasRef) return;
    if (meisterData.avg.basicJobSkills === 0) return;
    const canvas = d3.select(canvasRef);
    const svg = canvas
      .append("svg")
      .attr("width", "100%")
      .attr("height", "14vw");
    let separator = 0;
    meisterChartData.forEach((item, idx) => {
      const index = idx + 1;
      const startX = 1.5;

      const X = `${index * 4 + startX + separator}%`;

      if (index % 3 === 0) separator += 8;
      const rectangleHeight =
        (meisterData[item.scoreType][item.group] / meisterChartData.length) *
        120;
      svg
        .append("rect")
        .attr("x", X)
        .attr("height", "0%")
        .attr("y", "100%")
        .attr("width", 15)
        .attr("fill", graphColorData[item.scoreType])
        .transition()
        .duration(1000)
        .attr("height", `${rectangleHeight}%`)
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
        .style("fill", theme.gray);
    });

    meisterVariableData.forEach((groupText, index) => {
      svg
        .append("text")
        .attr("x", `${(index + 1) * 19.5 - 12}%`)
        .attr("y", "20%")
        .text(groupText)
        .style("fill", theme.gray)
        .style("font-weight", "600")
        .style("font-size", "12px");
    });

    [0, 30, 60].forEach((item) => {
      svg
        .append("line")
        .attr("x1", 40)
        .attr("x2", "98%")
        .attr("y1", `${100 - item}%`)
        .attr("y2", `${100 - item}%`)
        .attr("stroke-width", 1)
        .style("stroke-dasharray", "8, 3")
        .attr("stroke", theme.on_tertiary);

      svg
        .append("text")
        .attr("x", 20)
        .attr("y", `${99 - item}%`)
        .text(item)
        .style("fill", theme.on_tertiary)
        .style("font-weight", "600")
        .style("font-size", "12px");
    });
  }, [canvasRef]);

  return <div ref={setCanvasRef} />;
};

export default MeisterChart;
