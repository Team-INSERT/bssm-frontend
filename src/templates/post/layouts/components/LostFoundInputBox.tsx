import styled from "styled-components";
import { DragDrop } from "@/components/common";
import { Input } from "@/components/atoms";
import { font } from "@/styles";
import { PostCategoryInputBoxProps } from "../../types/@props";
import { CATEGORY } from "../../constants";
import POST_INPUT from "../../constants/postInput.constant";

const LostFoundInputBox = ({
  postData,
  lostImageUrl,
  handleChange,
  handleFileSelect,
}: PostCategoryInputBoxProps) => {
  return (
    <>
      <Input
        label={postData.category === CATEGORY.LOST ? "분실 장소" : "습득 장소"}
        placeholder="물품을 분실 혹은 습득한 장소를 입력해주세요."
        name={POST_INPUT.PLACE}
        onChange={handleChange}
        value={postData.place}
      />
      <TitleInputLabelText>물품의 이미지를 업로드해주세요.</TitleInputLabelText>
      {handleFileSelect && (
        <DragDrop handler={handleFileSelect} previewImage={lostImageUrl} />
      )}
    </>
  );
};

const TitleInputLabelText = styled.h1`
  ${font.p3};
`;

export default LostFoundInputBox;
