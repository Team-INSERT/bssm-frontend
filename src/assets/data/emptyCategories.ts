import { FORUM } from "@/constants";

const categories = [
  {
    type: FORUM.COMMON.TYPE,
    name: FORUM.COMMON.NAME,
  },
  {
    type: FORUM.NOTICE.TYPE,
    name: FORUM.NOTICE.NAME,
  },
  {
    type: FORUM.PROJECT.TYPE,
    name: FORUM.PROJECT.NAME,
  },
  {
    type: FORUM.CODE_REVIEW.TYPE,
    name: FORUM.CODE_REVIEW.NAME,
  },
  {
    type: FORUM.LOST_FOUND.TYPE,
    name: FORUM.LOST_FOUND.NAME,
  },
];

export default categories;
