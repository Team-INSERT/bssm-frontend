import styled from "styled-components";
import { theme, flex } from "@/styles";

const BlinkerBox = () => {
  return (
    <Layout>
      <Red />
      <Yellow />
      <Green />
    </Layout>
  );
};

const Layout = styled.div`
  ${flex.HORIZONTAL};
  gap: 6px;

  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 25px;
`;

const Red = styled(Circle)`
  background-color: ${theme.primary_red};
`;

const Yellow = styled(Circle)`
  background-color: ${theme.primary_yellow};
`;

const Green = styled(Circle)`
  background-color: ${theme.primary_mint};
`;

export default BlinkerBox;
