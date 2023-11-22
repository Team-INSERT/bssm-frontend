import styled from "styled-components";
import { theme } from "@/styles";
import DistributionIcon from "@/assets/icons/DistributionIcon";
import HomeHead from "./HomeHead";

const HomeRadarChart = () => {
  return (
    <Container>
      <HomeHead
        icon={<DistributionIcon />}
        title="인증제 점수"
        href="/meister"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 31.2vw;
  border-radius: 4px;
  background-color: ${theme.white};
`;

export default HomeRadarChart;
