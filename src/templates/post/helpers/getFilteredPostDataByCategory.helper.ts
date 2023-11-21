import dayjs from "dayjs";
import { CATEGORY } from "../constants";
import { Post } from "../types";

const getFilteredPostDataByCategory = (post: Post) => {
  const {
    title,
    content,
    prUrl,
    isFinished,
    startTime,
    endTime,
    field,
    lostThingImage,
    place,
    keepingPlace,
    category,
  } = post;

  const defaultPost = { title, content, category };

  // 게시글이 COMMON or NOTICE 라면 id, title, content, category만
  if (category === CATEGORY.COMMON || category === CATEGORY.NOTICE)
    return defaultPost;

  // 코드리뷰면 링크, 마감여부
  if (category === CATEGORY.CODE_REVIEW)
    return { ...defaultPost, prUrl, isFinished };

  // 프로젝트 모집이면 시작 기간, 마감 기간, 분야
  if (category === CATEGORY.PROJECT) {
    const formattedStartTime = dayjs(startTime).format("YYYY-MM-DDThh:mm:ss");
    const formattedEndTime = dayjs(endTime).format("YYYY-MM-DDThh:mm:ss");
    return {
      ...defaultPost,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      field,
    };
  }

  // 분실물이면 분실물 이미지, 분실장소
  if (category === CATEGORY.LOST)
    return { ...defaultPost, lostThingImage, place };

  // 습득물이면 분실물 이미지, 습득장소, 보관장소
  if (category === CATEGORY.FOUND)
    return { ...defaultPost, lostThingImage, place, keepingPlace };
};

export default getFilteredPostDataByCategory;
