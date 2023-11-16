import CalenderPlan from "./calenderPlan.interface";

export default interface CalenderItem {
  date: string;
  plans: Array<CalenderPlan>;
}
