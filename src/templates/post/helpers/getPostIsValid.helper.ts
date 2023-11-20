import { toast } from "react-toastify";
import { Post } from "../interfaces";
import { CATEGORY } from "../constants";

const errorReturner = (message: string) => {
  toast.error(message);
  return false;
};

const getPostIsValid = (post: Post) => {
  const {
    title,
    category,
    content,
    prUrl,
    place,
    keepingPlace,
    startTime,
    endTime,
    field,
  } = post;
  const is일반혹은공지사항카테고리라면 =
    category === CATEGORY.COMMON || category === CATEGORY.NOTICE;
  const is분실물찾기카테고리라면 =
    category === CATEGORY.LOST || category === CATEGORY.FOUND;

  // 공통사항
  if (!title.trim()) return errorReturner("글 제목을 입력해주세요.");

  // 일반 혹은 공지사항 카테고리일 경우 content 유효성 검사
  if (is일반혹은공지사항카테고리라면 && !content.trim())
    return errorReturner("글 내용을 입력해주세요.");

  // 코드리뷰 카테고리일 경우 PR 링크 유효성 검사
  if (category === CATEGORY.CODE_REVIEW && !prUrl?.trim())
    return errorReturner("PR 링크를 입력해주세요.");

  // 프로젝트 카테고리일 경우
  if (category === CATEGORY.PROJECT) {
    if (!field?.trim()) return errorReturner("프로젝트 분야를 입력해주세요.");
    if (!startTime) return errorReturner("프로젝트 시작 기한을 입력해주세요.");
    if (!endTime) return errorReturner("프로젝트 마감 기한을 입력해주세요.");
  }

  // 분실물찾기 카테고리일 경우
  if (is분실물찾기카테고리라면 && !place?.trim())
    return errorReturner("장소를 입력해주세요.");
  if (category === CATEGORY.FOUND && !keepingPlace?.trim())
    return errorReturner("보관 장소를 입력해주세요.");

  return true;
};

export default getPostIsValid;
