import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Row } from "@/components/Flex";
import { forumFilterStore } from "@/store/forumType.store";
import { color, font } from "@/styles";
import { FORUM } from "@/constants";
import { useRecoilState } from "recoil";

const filters = [
  {
    type: FORUM.STUDENT.TYPE,
    name: FORUM.STUDENT.NAME,
  },
  {
    type: FORUM.FREE.TYPE,
    name: FORUM.FREE.NAME,
  },
];

const ForumFilter = () => {
  const [checked, setChecked] = useRecoilState(forumFilterStore);

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
    ${font.H2};
  }
`;

const ForumLabel = styled.label<{ checked: boolean }>`
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
    content: "게시판";
  }

  &:hover {
    animation-fill-mode: forwards;
    animation-duration: 0.1s;
    animation-name: ${selected};
  }
`;

export default ForumFilter;
