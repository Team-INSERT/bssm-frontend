import { PostCategoryType } from ".";

export default interface PostData {
  id: string;
  title: string;
  category: PostCategoryType;
  content: string;
  prUrl: string;
  isFinished: boolean;
  lostThingImage: string;
  place: string;
  keepingPlace: string;
  startTime: Date | string;
  endTime: Date | string;
  field: string;
}
