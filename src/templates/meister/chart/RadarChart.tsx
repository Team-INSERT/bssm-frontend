import React, { useState } from "react";
import Radar from "react-d3-radar";
import radarChartVariables from "../assets/data/radarChartVariables";
import { MEISTER } from "../constants";
import Meister from "../interfaces/meister.interface";

interface DataSet {
  key: string;
  label: string;
  values: Record<string, number>;
}

interface ChartData {
  variables: Array<{ key: string; label: string }>;
  sets: DataSet[];
}

const RadarChart = ({ ...meisterData }: Meister) => {
  const chartData: ChartData = {
    variables: radarChartVariables,
    sets: [
      {
        key: "avg",
        label: "학년 평균",
        values: {
          [MEISTER.직업기초능력]: meisterData.avg[MEISTER.직업기초능력],
          [MEISTER.전문기술역량]: meisterData.avg[MEISTER.전문기술역량],
          [MEISTER.인성직업의식]: meisterData.avg[MEISTER.인성직업의식],
          [MEISTER.인문학적소양]: meisterData.avg[MEISTER.인문학적소양],
          [MEISTER.외국어능력]: meisterData.avg[MEISTER.외국어능력],
        },
      },
      {
        key: "my",
        label: "내 점수",
        values: {
          [MEISTER.직업기초능력]: meisterData.meister[MEISTER.직업기초능력],
          [MEISTER.전문기술역량]: meisterData.meister[MEISTER.전문기술역량],
          [MEISTER.인성직업의식]: meisterData.meister[MEISTER.인성직업의식],
          [MEISTER.인문학적소양]: meisterData.meister[MEISTER.인문학적소양],
          [MEISTER.외국어능력]: meisterData.meister[MEISTER.외국어능력],
        },
      },
    ],
  };
  const [highlighted, setHighlighted] = useState<{
    key: string;
    label: string;
  } | null>(null);

  const onHover = (
    hovered: {
      key: string;
      label: string;
    } | null,
  ) => {
    if (!highlighted && !hovered) return;
    if (highlighted && hovered && hovered.key === highlighted.key) return;
    setHighlighted(hovered);
  };

  return (
    <Radar
      width={250}
      height={250}
      padding={30}
      domainMax={60}
      highlighted={highlighted}
      onHover={onHover}
      data={chartData}
    />
  );
};

export default RadarChart;
