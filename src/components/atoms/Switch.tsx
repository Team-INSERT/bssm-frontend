import color from "@/styles/color";
import React from "react";
import styled, { keyframes } from "styled-components";

interface ISwitchProps {
  isSwitch: boolean;
  handleToggle: () => void;
}

const Switch = ({ isSwitch, handleToggle }: ISwitchProps) => {
  return (
    <ToggleButton isSwitch={isSwitch} onClick={handleToggle}>
      <ToggleCircle isSwitch={isSwitch} />
    </ToggleButton>
  );
};

const moveToLeft = keyframes`
  from {
    transform: translateX(4px);
  }
  to {
    transform: translateX(4px);
  }
`;

const moveToRight = keyframes`
  from {
    transform: translateX(-10px);
  }
  to {
    transform: translateX(0);
  }
`;

const ToggleButton = styled.div<{ isSwitch: boolean }>`
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 15px;
  background-color: ${({ isSwitch }) =>
    isSwitch ? color.primary_blue : color.content};
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
`;

const ToggleCircle = styled.div<{ isSwitch: boolean }>`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${color.white};
  transition: transform 0.3s ease;
  animation-fill-mode: forwards;
  transform: ${({ isSwitch }) =>
    isSwitch ? "translateX(20px)" : `translateX(4px)`};
  animation: ${(isSwitch) => (isSwitch ? moveToLeft : moveToRight)} 0.3s ease;
`;

export default Switch;
