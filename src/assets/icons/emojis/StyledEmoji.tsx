import styled from "styled-components";

export interface IStyledEmoji extends React.SVGAttributes<HTMLOrSVGElement> {
  isHover?: boolean;
}

const StyledEmoji = styled.svg`
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export default StyledEmoji;
