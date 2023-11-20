import styled from "styled-components";
import FlexPropsType from "./type";

const Row = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
  as,
  ...props
}: FlexPropsType) => {
  return (
    <StyledRow
      as={as}
      {...props}
      style={{ gap, justifyContent, alignItems, width }}
    >
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
`;
