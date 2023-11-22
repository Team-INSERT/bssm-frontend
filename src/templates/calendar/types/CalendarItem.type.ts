import CalendarPlan from "./CalendarPlan.type";

export default interface CalendarItem {
  date: string;
  plans: Array<CalendarPlan>;
}
