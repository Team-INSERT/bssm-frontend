import AnonymousBox from "@/components/atoms/AnonymousBox";
import Category from "@/components/atoms/Category";
import Input from "@/components/atoms/Input";
import Column from "@/components/Flex/Column";
import Row from "@/components/Flex/Row";
import categories from "@/global/assets/data/categories";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import CustomEditor from "./CustomEditor";

const InputBox = () => {
  const [checked, setChecked] = React.useState("all");
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Container>
      <Column gap="6px">
        <CategoryLabel />
        <Row gap="6px">
          {categories.map((category) => (
            <Category
              key={category.type}
              id={category.type}
              name="category"
              onChange={onCheckCategory}
              label={category.name}
              checked={category.type === checked}
            />
          ))}
        </Row>
      </Column>
      <Input label="글 제목" placeholder="글 제목을 입력해주세요" />
      <CustomEditor />
      <ControlBox>
        <AnonymousBox clicked={isAnonymous} setClicked={setIsAnonymous} />
        <UploadButton />
      </ControlBox>
    </Container>
  );
};

const CategoryLabel = styled.span`
  ${font.context};

  &:after {
    content: "카테고리";
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ControlBox = styled.div`
  display: flex;
  gap: 24px;
  margin-left: auto;
`;

const UploadButton = styled.button`
  width: 70px;
  height: 28px;
  border-radius: 4px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  ${font.btn3};

  &:after {
    content: "작성";
  }
`;

export default InputBox;
