import { POST } from "@/constants";
import { IInputPost } from "@/interfaces";
import { toast } from "react-toastify";

const checkPostValid = (post: IInputPost) => {
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
    category === POST.COMMON || category === POST.NOTICE;
  const is분실물찾기카테고리라면 =
    category === POST.LOST || category === POST.FOUND;

  // 공통사항
  if (!title.trim()) return toast.error("글 제목을 입력해주세요.");

  // 일반 혹은 공지사항 카테고리일 경우 content 유효성 검사
  if (is일반혹은공지사항카테고리라면 && !content.trim())
    return toast.error("글 내용을 입력해주세요.");

  // 코드리뷰 카테고리일 경우 PR 링크 유효성 검사
  if (category === POST.CODE_REVIEW && !prUrl.trim())
    return toast.error("PR 링크를 입력해주세요.");

  // 프로젝트 카테고리일 경우
  if (category === POST.PROJECT) {
    if (!startTime) return toast.error("프로젝트 시작 기한을 입력해주세요.");
    if (!endTime) return toast.error("프로젝트 마감 기한을 입력해주세요.");
    if (!field.trim()) return toast.error("프로젝트 분야를 입력해주세요.");
  }

  // 분실물찾기 카테고리일 경우
  if (is분실물찾기카테고리라면 && !place.trim())
    return toast.error("장소를 입력해주세요.");
  if (category === POST.FOUND && !keepingPlace.trim())
    return toast.error("보관 장소를 입력해주세요.");

  return true;
};

export default checkPostValid;
