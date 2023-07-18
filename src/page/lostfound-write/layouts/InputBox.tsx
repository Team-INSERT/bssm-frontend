import AnonymousBox from "@/components/atoms/AnonymousBox";
import CustomEditor from "@/components/atoms/CustomEditor";
import Input from "@/components/atoms/Input";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import StateBox from "./StateBox";

const InputBox = () => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [checked, setChecked] = React.useState("lost");

  const onCheckLostFoundType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Container>
      <StateBox checked={checked} handler={onCheckLostFoundType} />
      <Input label="글 제목" placeholder="글 제목을 입력해주세요" />
      {checked === "lost" && (
        <Input label="분실 장소" placeholder="분실 장소를 알려주세요" />
      )}
      {checked === "found" && (
        <>
          <Input label="습득 장소" placeholder="습득 장소를 알려주세요" />
          <Input label="보관 장소" placeholder="보관 장소를 알려주세요" />
          <Input type="file" id="file" label="사진 선택" />
        </>
      )}
      <CustomEditor />
      <ControlBox>
        <AnonymousBox clicked={isAnonymous} setClicked={setIsAnonymous} />
        <UploadButton />
      </ControlBox>
    </Container>
  );
};

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
