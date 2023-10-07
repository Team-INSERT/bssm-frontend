import { POST } from "@/constants";
import { IInputPost } from "@/interfaces";

const emptyInputPost: IInputPost = {
  id: "",
  title: "",
  category: POST.COMMON,
  content: "",
  prUrl: "",
  isFinished: false,
  lostThingImage: "",
  place: "",
  keepingPlace: "",
  startTime: "",
  endTime: "",
  field: "",
};

export default emptyInputPost;
