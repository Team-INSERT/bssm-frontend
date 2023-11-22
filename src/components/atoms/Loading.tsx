import { theme, flex } from "@/styles";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <PuffLoader color={theme.primary_blue} size={40} />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  ${flex.CENTER};
`;

export default Loading;
