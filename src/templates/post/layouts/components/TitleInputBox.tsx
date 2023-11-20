import React from "react";
import { Input } from "@/components/atoms";
import { PostCategoryInputBoxProps } from "../../interfaces";
import POST_INPUT from "../../constants/postInput.constant";

const TitleInputBox = ({
  handleChange,
  postData,
}: PostCategoryInputBoxProps) => {
  return (
    <Input
      label="글 제목"
      placeholder="글 제목을 입력해주세요"
      name={POST_INPUT.TITLE}
      onChange={handleChange}
      value={postData.title}
    />
  );
};

export default TitleInputBox;
