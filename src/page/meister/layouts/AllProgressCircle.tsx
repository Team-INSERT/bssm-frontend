import ProgressIcon from "@/assets/icons/ProgressIcon";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import flex from "@/styles/flex";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

const idCSS = "gradient_svg";

const GradientSVG = () => {
  const gradientTransform = `rotate(0)`;
  return (
    <svg width={0}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="16.29%" stopColor={color.primary_blue} />
          <stop offset="85.56%" stopColor={color.primary_mint} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const AllProgressCircle = () => {
  return (
    <Container>
      <Row alignItems="center" width="100%" gap="6px">
        <ProgressIcon />
        <Title>전체 인증제 점수 달성도</Title>
      </Row>
      <ProgressBox>
        <CircularProgressBox>
          <CircularProgressbar
            strokeWidth={8}
            value={58}
            text={`${78}%`}
            styles={
              (buildStyles({
                textSize: "24px",
                pathColor: color.primary_red,
                textColor: color.primary_red,
                trailColor: color.on_tertiary,
              }),
              {
                path: { stroke: `url(#${idCSS})`, height: "100%" },
                trail: {
                  stroke: "#2e2e2e",
                },
                text: {
                  fontWeight: 600,
                },
              })
            }
          />
        </CircularProgressBox>
      </ProgressBox>
      <GradientSVG />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 38vh;
  background-color: ${color.white};
  padding: 14px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  ${font.H6};
`;

const ProgressBox = styled.div`
  width: 100%;
  height: 60%;
  ${flex.COLUMN_CENTER};
`;

const CircularProgressBox = styled.div`
  width: 60%;
  height: 55%;
`;

export default AllProgressCircle;
