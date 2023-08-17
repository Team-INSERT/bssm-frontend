import React, { useState } from "react";
import Radar from "react-d3-radar";

interface Variable {
  key: string;
  label: string;
}

interface ValueSet {
  [key: string]: number;
}

interface DataSet {
  key: string;
  label: string;
  values: ValueSet;
}

interface ChartData {
  variables: Variable[];
  sets: DataSet[];
}

const chartData: ChartData = {
  variables: [
    { key: "anxiety", label: "직업기초능력" },
    { key: "illness", label: "전문기술역량" },
    { key: "sucidal", label: "인성/직업의식" },
    { key: "distress", label: "인문학적 소양" },
    { key: "depression", label: "외국어 능력" },
  ],
  sets: [
    {
      key: "served",
      label: "학년 평균",
      values: {
        anxiety: 20,
        illness: 30,
        sucidal: 26,
        distress: 31,
        openness: 8,
      },
    },
    {
      key: "civilians",
      label: "Civilians",
      values: {
        anxiety: 20,
        illness: 52,
        sucidal: 20,
        distress: 10,
        openness: 24,
      },
    },
  ],
};

const RadarChart = () => {
  const [highlighted, setHighlighted] = useState<Variable | null>(null);

  const onHover = (hovered: Variable | null) => {
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
