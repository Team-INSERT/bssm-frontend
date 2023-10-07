import { IMeister } from "@/_interfaces";
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

interface IRadarChartProps {
  meisterData: IMeister;
}

const RadarChart = ({ meisterData }: IRadarChartProps) => {
  const chartData: ChartData = {
    variables: [
      { key: "a", label: "직업기초능력" },
      { key: "b", label: "전문기술역량" },
      { key: "c", label: "인성/직업의식" },
      { key: "d", label: "인문학적 소양" },
      { key: "e", label: "외국어 능력" },
    ],
    sets: [
      {
        key: "avg",
        label: "학년 평균",
        values: {
          a: meisterData.avg.basicJobSkills,
          b: meisterData.avg.professionalTech,
          c: meisterData.avg.workEthic,
          d: meisterData.avg.humanities,
          e: meisterData.avg.foreignScore,
        },
      },
      {
        key: "my",
        label: "내 점수",
        values: {
          a: meisterData.meister.basicJobSkills,
          b: meisterData.meister.professionalTech,
          c: meisterData.meister.workEthic,
          d: meisterData.meister.humanities,
          e: meisterData.meister.foreignScore,
        },
      },
    ],
  };

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
