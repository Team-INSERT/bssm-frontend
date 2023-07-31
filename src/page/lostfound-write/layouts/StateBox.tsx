import Column from "@/components/Flex/Column";
import Row from "@/components/Flex/Row";
import React from "react";
import lostfoundKey from "@/global/constants/lostfound.constant";
import Category from "@/components/atoms/Category";
import styled from "styled-components";
import { font } from "@/styles/font";

const lostfounds = [
  {
    type: lostfoundKey.lost.type,
    name: lostfoundKey.lost.name,
  },
  {
    type: lostfoundKey.found.type,
    name: lostfoundKey.found.name,
  },
];

interface IStateBoxProps {
  checked: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StateBox = ({ checked, handler }: IStateBoxProps) => {
  return (
    <Column gap="6px">
      <StateLabel />
      <Row gap="6px">
        {lostfounds.map((lostfound) => (
          <Category
            key={lostfound.type}
            id={lostfound.type}
            name="lostfound"
            onChange={handler}
            label={lostfound.name}
            checked={lostfound.type === checked}
          />
        ))}
      </Row>
    </Column>
  );
};

const StateLabel = styled.span`
  ${font.context};

  &:after {
    content: "카테고리";
  }
`;

export default StateBox;
