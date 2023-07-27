import Arrow from "@/global/assets/svgs/Arrow";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled, { css } from "styled-components";

interface ISelectProps {
  options: string[];
  defaultOption: string;
  label: string;
  width?: string;
  handler:
    | React.Dispatch<React.SetStateAction<string>>
    | ((props: string) => void);
}

const Select = ({
  options,
  defaultOption,
  label,
  width = "80px",
  handler,
}: ISelectProps) => {
  const [isHover, setIsHover] = React.useState(true);

  const toggleHandler = (option: string) => {
    handler(option);
    setIsHover(true);
  };
  return (
    <StyledSelect
      onMouseEnter={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(true)}
    >
      <StyledDefaultList width={width}>
        <StyledDefaultListText label={label}>
          {defaultOption}
        </StyledDefaultListText>
        <Arrow width={12} height={8} />
      </StyledDefaultList>
      <StyledList isHover={isHover}>
        {options.map((option) => (
          <StyledListItem
            key={option}
            width={width}
            label={label}
            onClick={() => toggleHandler(option)}
          >
            {option}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  width: fit-content;
  cursor: pointer;
  z-index: 2;
`;

const StyledDefaultList = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ width }) => width};
  padding: 6px 0;
  border-radius: 4px;
  background-color: ${color.white};
  box-shadow: 4px 4px 10px 0 rgba(144, 144, 144, 0.15);

  &:hover {
    background-color: ${color.on_tertiary};
  }
`;

const StyledDefaultListText = styled.div<{ label: string }>`
  ${font.context};
  color: ${color.black};

  &:after {
    content: "${({ label }) => label}";
  }
`;

const StyledList = styled.ul<{ isHover: boolean }>`
  position: absolute;
  border-radius: 4px;
  background-color: ${color.white};
  padding: 6px 4px;

  ${({ isHover }) =>
    isHover &&
    css`
      display: none;
    `}
`;

const StyledListItem = styled.li<{ width: string; label: string }>`
  width: calc(${({ width }) => width} - 8px);
  padding: 6px 0 6px 8px;
  border-radius: 4px;
  ${font.context};
  background-color: ${color.white};

  &:hover {
    background-color: ${color.on_tertiary};
  }

  &:after {
    content: "${({ label }) => label}";
  }
`;

export default Select;
