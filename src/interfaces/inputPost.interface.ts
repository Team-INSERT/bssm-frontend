import { PostCategoryType } from "@/types";

export default interface IInputPost {
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
