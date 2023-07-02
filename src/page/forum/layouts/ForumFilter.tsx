import Row from "@/components/Flex/Row";
import { forumFilterStore } from "@/store/forumType.store";
import color from "@/styles/color";
import { font } from "@/styles/font";
import forum from "@/utils/constants/forum.constant";
import React from "react";
import { useRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";

const filters = [
  {
    type: forum.student.type,
    name: forum.student.name,
  },
  {
    type: forum.free.type,
    name: forum.free.name,
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
            type={forum.type}
            id={filter.type}
            name={forum.name}
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
