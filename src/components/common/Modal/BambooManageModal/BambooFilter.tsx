import { Row } from "@/components/Flex";
import BAMBOO from "@/constants/bamboo.constant";
import { bambooFilterStore } from "@/store/bamboo.store";
import { color, flex, font } from "@/styles";
import React from "react";
import { useRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";

const filters = [
  { name: BAMBOO.PENDING.NAME, type: BAMBOO.PENDING.TYPE },
  { name: BAMBOO.ALLOWED.NAME, type: BAMBOO.ALLOWED.TYPE },
];

const BambooFilter = () => {
  const [checked, setChecked] = useRecoilState(bambooFilterStore);

  const onCheckFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Container>
      {filters.map((filter) => (
        <Row key={filter.type}>
          <ForumLabel checked={filter.type === checked} htmlFor={filter.type}>
            {filter.name}
          </ForumLabel>
          <ForumRadio
            onChange={onCheckFilter}
            type={BAMBOO.TYPE}
            id={filter.type}
            name={BAMBOO.NAME}
          />
        </Row>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 14px 0;
  border-bottom: 1.5px solid ${color.on_tertiary};
  ${flex.HORIZONTAL};
  gap: 12px;
`;

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
    content: " 글";
  }

  &:hover {
    animation-fill-mode: forwards;
    animation-duration: 0.1s;
    animation-name: ${selected};
  }
`;

export default BambooFilter;
