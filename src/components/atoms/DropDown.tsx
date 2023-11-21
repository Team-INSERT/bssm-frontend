import React from "react";
import styled, { css } from "styled-components";
import { theme, font, flex } from "@/styles";
import { ArrowIcon } from "@/assets/icons";

interface DropDownProps {
  optionList: Array<string>;
  selected: string;
  label: string;
  width?: string;
  handler:
    | React.Dispatch<React.SetStateAction<string>>
    | ((props: string | number) => void);
}

const DropDown = ({
  optionList,
  selected,
  label,
  width = "80px",
  handler,
}: DropDownProps) => {
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
        <StyledDefaultListText label={label}>{selected}</StyledDefaultListText>
        <ArrowIcon width={12} height={8} />
      </StyledDefaultList>
      <StyledList isHover={isHover}>
        {optionList.map((option) => (
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
  ${flex.CENTER};
  gap: 8px;
  width: ${({ width }) => width};
  padding: 6px 0;
  border-radius: 4px;
  background-color: ${theme.white};
  box-shadow: 4px 4px 10px 0 rgba(144, 144, 144, 0.15);

  &:hover {
    background-color: ${theme.on_tertiary};
  }
`;

const StyledDefaultListText = styled.div<{ label: string }>`
  ${font.context};
  color: ${theme.black};

  &:after {
    content: "${({ label }) => label}";
  }
`;

const StyledList = styled.ul<{ isHover: boolean }>`
  position: absolute;
  border-radius: 4px;
  background-color: ${theme.white};
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
  background-color: ${theme.white};

  &:hover {
    background-color: ${theme.on_tertiary};
  }

  &:after {
    content: "${({ label }) => label}";
  }
`;

export default DropDown;
