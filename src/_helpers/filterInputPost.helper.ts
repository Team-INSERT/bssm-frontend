import { POST } from "@/_constants";
import { IInputPost } from "@/_interfaces";

const filterInputPost = (post: IInputPost) => {
  const {
    id,
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

  const defaultPost = { id, title, content, category };

  if (category === POST.COMMON || category === POST.NOTICE) return defaultPost;

  if (category === POST.CODE_REVIEW)
    return { ...defaultPost, prUrl, isFinished };

  if (category === POST.PROJECT)
    return { ...defaultPost, startTime, endTime, field };

  if (category === POST.LOST) return { ...defaultPost, lostThingImage, place };

  if (category === POST.FOUND)
    return { ...defaultPost, lostThingImage, place, keepingPlace };
};

export default filterInputPost;
