import DownArrow from "@/page/timetable/assets/DownArrow";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled, { css } from "styled-components";

interface ISelectProps {
  options: string[];
  defaultOption: string;
  label: string;
  size?: string;
  handler: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({
  options,
  defaultOption,
  label,
  size = "80px",
  handler,
}: ISelectProps) => {
  const [hover, setHover] = React.useState(true);

  const toggleHandler = (option: string) => {
    handler(option);
    setHover(true);
  };
  return (
    <StyledSelect
      onMouseEnter={() => setHover(false)}
      onMouseLeave={() => setHover(true)}
    >
      <StyledDefaultList size={size}>
        <StyledDefaultListText label={label}>
          {defaultOption}
        </StyledDefaultListText>
        <DownArrow width={12} height={8} />
      </StyledDefaultList>
      <StyledList hover={hover}>
        {options.map((option) => (
          <StyledListItem
            key={option}
            size={size}
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
`;

const StyledDefaultList = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ size }) => size};
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

const StyledList = styled.ul<{ hover: boolean }>`
  position: absolute;
  border-radius: 4px;
  background-color: ${color.white};
  padding: 6px 4px;

  ${({ hover }) =>
    hover &&
    css`
      display: none;
    `}
`;

const StyledListItem = styled.li<{ size: string; label: string }>`
  width: calc(${({ size }) => size} - 8px);
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
