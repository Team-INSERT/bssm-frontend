import CalendarPlan from "./calendarPlan.interface";

export default interface CalendarItem {
  date: string;
  plans: Array<CalendarPlan>;
}
