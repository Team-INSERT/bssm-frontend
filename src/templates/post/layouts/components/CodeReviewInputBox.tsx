import { Input } from "@/components/atoms";
import POST_INPUT from "../../constants/postInput.constant";
import { PostCategoryInputBoxProps } from "../../types/@props";

const CodeReviewInputBox = ({
  handleChange,
  postData,
}: PostCategoryInputBoxProps) => {
  return (
    <Input
      label="PR 링크"
      placeholder="리뷰받을 PR 링크를 입력해주세요"
      name={POST_INPUT.PR_URL}
      onChange={handleChange}
      value={postData.prUrl}
    />
  );
};

export default CodeReviewInputBox;
