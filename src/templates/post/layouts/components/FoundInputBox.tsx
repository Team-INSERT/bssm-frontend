import React from "react";
import { Input } from "@/components/atoms";
import { PostCategoryInputBoxProps } from "../../interfaces";
import POST_INPUT from "../../constants/postInput.constant";

const FoundInputBox = ({
  handleChange,
  postData,
}: PostCategoryInputBoxProps) => {
  return (
    <Input
      label="보관 장소"
      placeholder="물품을 보관 중인 장소를 입력해주세요"
      name={POST_INPUT.KEEPING_PLACE}
      onChange={handleChange}
      value={postData.place}
    />
  );
};

export default FoundInputBox;
