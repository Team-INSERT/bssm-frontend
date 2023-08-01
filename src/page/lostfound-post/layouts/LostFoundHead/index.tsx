import styled from "styled-components";
import Category from "./Category";
import LostFoundTitle from "./LostFoundTitle";

const LostFoundHead = () => {
  return (
    <Container>
      <Category />
      <LostFoundTitle />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default LostFoundHead;
