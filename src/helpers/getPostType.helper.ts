import { FORUM } from "@/constants";

const getPostType = (postType: string) => {
  if (postType === FORUM.FREE.TYPE) return FORUM.FREE.NAME;
  return FORUM.STUDENT.NAME;
};

export default getPostType;
