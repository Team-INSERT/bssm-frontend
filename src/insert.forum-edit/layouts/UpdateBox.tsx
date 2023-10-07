import styled from "styled-components";
import { Column } from "@/_components/Flex";
import { color, font } from "@/_styles";
import InputBox from "./InputBox";

interface IUpdateBoxProps {
  id: number;
}

const UpdateBox = ({ id }: IUpdateBoxProps) => {
  return (
    <Layout>
      <Column gap="4px">
        <Title />
        <SubTitle />
      </Column>
      <InputBox id={id} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  ${font.H2};

  &:after {
    content: "✍🏻 글 수정하기";
  }
`;

const SubTitle = styled.p`
  ${font.context};
  color: ${color.gray};

  &:after {
    content: "게시글의 어떤 내용을 수정하고 싶으신가요?";
  }
`;

export default UpdateBox;
