import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { APPLICATIONS } from "@/constants";
import React from "react";
import styled, { css, keyframes } from "styled-components";

const filters = [
  {
    type: APPLICATIONS.BSM.TYPE,
    name: APPLICATIONS.BSM.NAME,
  },
  {
    type: APPLICATIONS.OTHER.TYPE,
    name: APPLICATIONS.OTHER.NAME,
  },
];

const AppListFilter = () => {
  const [checked, setChecked] = React.useState("bsm_service");

  const onCheckFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="14px" alignItems="center">
      {filters.map((filter) => (
        <Row key={filter.type}>
          <AppListLabel checked={filter.type === checked} htmlFor={filter.type}>
            {filter.name}
          </AppListLabel>
          <AppListRadio
            onChange={onCheckFilter}
            type={APPLICATIONS.TYPE}
            id={filter.type}
            name={APPLICATIONS.NAME}
          />
        </Row>
      ))}
    </Row>
  );
};

const AppListRadio = styled.input`
  display: none;
`;

const selected = keyframes`
  to {
    ${font.H2};
  }
`;

const AppListLabel = styled.label<{ checked: boolean }>`
  ${({ checked }) =>
    checked
      ? css`
          ${font.H2};
        `
      : css`
          ${font.H3};
          color: ${color.gray};
        `}

  &:after {
    content: " 서비스";
  }

  &:hover {
    animation-fill-mode: forwards;
    animation-duration: 0.1s;
    animation-name: ${selected};
  }
`;

export default AppListFilter;
