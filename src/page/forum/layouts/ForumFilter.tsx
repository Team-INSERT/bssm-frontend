import Row from "@/components/Flex/Row";
import color from "@/styles/color";
import { font } from "@/styles/font";
import filter from "@/utils/constants/filter";
import React from "react";
import styled, { css } from "styled-components";

const filters = [
  {
    type: filter.student.type,
    name: filter.student.name,
  },
  {
    type: filter.free.type,
    name: filter.free.name,
  },
];

const ForumFilter = () => {
  const [checked, setChecked] = React.useState(filter.student.type);

  const onCheckFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="14px" alignItems="center">
      {filters.map((item) => (
        <>
          <ForumLabel checked={item.type === checked} htmlFor={item.type}>
            {item.name}
          </ForumLabel>
          <ForumRadio
            onChange={onCheckFilter}
            type={filter.type}
            id={item.type}
            name={filter.name}
          />
        </>
      ))}
    </Row>
  );
};

const ForumRadio = styled.input`
  display: none;
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
`;

export default ForumFilter;
