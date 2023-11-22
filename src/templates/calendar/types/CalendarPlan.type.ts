import Calendar from "./Calender.type";

export default interface CalendarPlan extends Calendar {
  id: number;
  type: string;
  title: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}
