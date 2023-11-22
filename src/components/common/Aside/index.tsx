import styled from "styled-components";
import { Row } from "@/components/Flex";
import { flex } from "@/styles";
import { useUser } from "@/@user/hooks";
import InfomationBox from "./StudentInfoBox";
import MeisterBox from "./MeisterInfoBox";
import JoinCheckBox from "./CheckInBox";

const Aside = () => {
  const { isLogined } = useUser();

  return (
    <Row>
      {isLogined && (
        <Container>
          <InfomationBox />
          <Row gap="6px" height="100%">
            <MeisterBox />
            <JoinCheckBox />
          </Row>
        </Container>
      )}
    </Row>
  );
};

const Container = styled.aside`
  ${flex.COLUMN_FLEX};
  width: 22vw;
  height: 30vh;
  gap: 6px;
  margin-left: auto;

  @media screen and (max-width: 900px) {
    width: 28vw;
  }

  @media screen and (max-width: 800px) {
    width: 24vw;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Aside;
