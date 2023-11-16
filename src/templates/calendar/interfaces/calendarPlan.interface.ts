import Calendar from "./calendar.interface";

export default interface CalendarPlan extends Calendar {
  id: number;
  type: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}
