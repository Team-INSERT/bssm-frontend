import styled from "styled-components";
import { Aside } from "@/components/common";
import { Column } from "@/components/Flex";
import { font } from "@/styles";
import MealSlider from "./layouts/MealSlider";

const MealPage = () => {
  return (
    <Layout>
      <Container>
        <Column gap="8px" width="67%">
          <Title />
          <MealSlider />
        </Column>
        <Aside />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  display: flex;
`;

const Title = styled.span`
  ${font.H2};
  &:after {
    content: "🍱  오늘의 급식";
  }
`;

export default MealPage;
