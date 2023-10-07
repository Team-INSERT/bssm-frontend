import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { FORUM } from "@/constants";
import { useRecoilState } from "recoil";
import { domitoryFilterStore } from "@/store/domitory.store";
import DOMITORY from "@/constants/domitory.constant";

const filters = [
  {
    type: DOMITORY.NOT_JOINED.TYPE,
    name: DOMITORY.NOT_JOINED.NAME,
  },
  {
    type: DOMITORY.JOINED.TYPE,
    name: DOMITORY.JOINED.NAME,
  },
];

const DomitoryFilter = () => {
  const [checked, setChecked] = useRecoilState(domitoryFilterStore);

  const onCheckFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="14px" alignItems="center">
      {filters.map((filter) => (
        <Row key={filter.type}>
          <ForumLabel checked={filter.type === checked} htmlFor={filter.type}>
            {filter.name}
          </ForumLabel>
          <ForumRadio
            onChange={onCheckFilter}
            type={FORUM.TYPE}
            id={filter.type}
            name={FORUM.NAME}
          />
        </Row>
      ))}
    </Row>
  );
};

const ForumRadio = styled.input`
  display: none;
`;

const selected = keyframes`
  to {
    ${font.H3};
  }
`;

const ForumLabel = styled.label<{ checked: boolean }>`
  ${({ checked }) =>
    checked
      ? css`
          ${font.H3};
        `
      : css`
          ${font.H4};
          color: ${color.gray};
        `}

  &:after {
    content: " 목록";
  }

  &:hover {
    animation-fill-mode: forwards;
    animation-duration: 0.1s;
    animation-name: ${selected};
  }
`;

export default DomitoryFilter;
