import { PostCategoryType } from "@/_types";

export default interface IPost {
  id: string;
  title: string;
  content: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
  category: PostCategoryType;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  doesLike: boolean;

  // POST.PROJECT
  startTime?: string;
  endTime?: string;
  field?: string;

  // POST.CODE_REVIEW
  prUrl?: string;
  isFinished?: boolean;

  // POST.LOST & POST.FOUND
  lostThingImage?: string;
  place?: string;
  foundUser?: {
    id: number;
    nickName: string;
  };

  // POST.FOUND
  keepingPlace?: string;
}
