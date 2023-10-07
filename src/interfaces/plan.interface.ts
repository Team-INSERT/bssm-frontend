import ICalender from "./calender.interface";

export default interface IPlan extends ICalender {
  id: number;
  type: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}
