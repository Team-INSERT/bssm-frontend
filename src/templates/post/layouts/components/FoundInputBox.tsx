import { Input } from "@/components/atoms";
import { PostCategoryInputBoxProps } from "../../types/@props";
import { POST_INPUT } from "../../constants";

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
      value={postData.keepingPlace}
    />
  );
};

export default FoundInputBox;
