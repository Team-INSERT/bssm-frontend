/* eslint-disable */
// @ts-nocheck

import { color } from "@/styles";
import * as d3 from "d3";
import dayjs from "dayjs";
import React from "react";
import "dayjs/locale/ko";
import styled from "styled-components";

type D3SelectionType = d3.Selection<SVGGElement, unknown, null, undefined>;

const lineChartData = [
  {
    values: [
      {
        date: "2023/01/01",
        close: 230,
      },
      {
        date: "2023/02/01",
        close: 269,
      },
      {
        date: "2023/03/01",
        close: 234,
      },
      {
        date: "2023/04/01",
        close: 282,
      },
      {
        date: "2023/05/01",
        close: 231,
      },
      {
        date: "2023/06/01",
        close: 240,
      },
      {
        date: "2023/07/01",
        close: 213,
      },
      {
        date: "2023/08/01",
        close: 320,
      },
      {
        date: "2023/09/01",
        close: 253,
      },
      {
        date: "2023/10/01",
        close: 264,
      },
      {
        date: "2023/11/01",
        close: 272,
      },
      {
        date: "2023/12/01",
        close: 290,
      },
    ],
  },
];

const LineChart = () => {
  const lineRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const margin = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    };

    const width = 680 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const createGradient = (select: D3SelectionType) => {
      const gradient = select
        .select("defs")
        .append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "0%")
        .attr("y2", "0%");

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("style", `stop-color:${color.primary_blue};stop-opacity:0.05`);

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("style", `stop-color:${color.primary_blue};stop-opacity:.5`);
    };

    const createGlowFilter = (select: D3SelectionType) => {
      const filter = select.select("defs").append("filter").attr("id", "glow");

      filter
        .append("feGaussianBlur")
        .attr("stdDeviation", "4")
        .attr("result", "coloredBlur");

      const femerge = filter.append("feMerge");

      femerge.append("feMergeNode").attr("in", "coloredBlur");
      femerge.append("feMergeNode").attr("in", "SourceGraphic");
    };

    const svg = d3
      .select(lineRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    svg.append("defs");
    svg.call(createGradient);
    svg.call(createGlowFilter);

    const parseTime = d3.timeParse("%Y/%m/%d");

    const parsedData = lineChartData.map((company) => ({
      values: company.values.map((val) => ({
        close: val.close,
        date: parseTime(val.date),
      })),
    }));

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(parsedData, (d) => d3.min(d.values, (v) => v.date)),
        d3.max(parsedData, (d) => d3.max(d.values, (v) => v.date)),
      ])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(parsedData, (d) => d3.min(d.values, (v) => v.close)),
        d3.max(parsedData, (d) => d3.max(d.values, (v) => v.close)),
      ])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.close))
      .curve(d3.curveCatmullRom.alpha(0.5));

    svg
      .selectAll(".line")
      .data(parsedData)
      .enter()
      .append("path")
      .attr("d", (d) => {
        console.log(d);
        const lineValues = line(d.values).slice(1);
        const splitedValues = lineValues.split(",");

        return `M0,${height},${lineValues},l0,${
          height - splitedValues[splitedValues.length - 1]
        }`;
      })
      .style("fill", "url(#gradient)");

    svg
      .selectAll(".line")
      .data(parsedData)
      .enter()
      .append("path")
      .attr("d", (d) => line(d.values))
      .attr("stroke-width", "2")
      .style("fill", "none")
      .style("filter", "url(#glow)")
      .attr("stroke", color.primary_blue);

    const tick = svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(12))
      .selectAll(".tick")
      .style("transition", ".2s");

    tick
      .selectAll("line")
      .attr("stroke-dasharray", `5, 5`)
      .attr("stroke", "#ccc")
      .attr("y2", `-${height}px`);

    tick
      .append("rect")
      .attr("width", `${width / 12 + 10}px`)
      .attr("x", `-${width / 24 + 5}px`)
      .attr("y", `-${height}px`)
      .attr("height", `${height + 30}px`)
      .style("cursor", "pointer")
      .style("fill", "transparent");

    svg
      .selectAll(".tick")
      .append("circle")
      .attr("r", "4px")
      .style("fill", "#72B9FF")
      .attr("cy", (x, i) => -height + yScale(parsedData[0].values[i].close));
  }, []);

  return <LineChartContainer ref={lineRef} />;
};

const LineChartContainer = styled.div`
  width: fit-content;
`;

export default LineChart;
