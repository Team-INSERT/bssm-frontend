import { POST } from "@/constants";
import { PostCategoryType } from "@/types";

const getWriteContentLabel = (category: PostCategoryType) => {
  if (category === POST.PROJECT) return "프로젝트에 대해 설명해주세요.";
  if (category === POST.LOST) return "잃어버린 물건에 대해 설명해주세요.";
  if (category === POST.FOUND) return "습득한 물건에 대해 설명해주세요.";
  if (category === POST.CODE_REVIEW)
    return "PR에 대한 요구사항 등을 설명해주세요.";
  return "글의 내용을 입력해주세요.";
};

export default getWriteContentLabel;
