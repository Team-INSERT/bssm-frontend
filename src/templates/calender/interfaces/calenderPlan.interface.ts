import Calender from "./calender.interface";

export default interface CalenderPlan extends Calender {
  id: number;
  type: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}
