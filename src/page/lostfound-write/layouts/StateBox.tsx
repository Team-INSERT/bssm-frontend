import { Row, Column } from "@/components/Flex";
import { LOSTFOUND } from "@/constants";
import { Category } from "@/components/atoms";
import styled from "styled-components";
import { font } from "@/styles";

const lostfounds = [
  {
    type: LOSTFOUND.LOST.TYPE,
    name: LOSTFOUND.LOST.NAME,
  },
  {
    type: LOSTFOUND.FOUND.TYPE,
    name: LOSTFOUND.FOUND.NAME,
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
