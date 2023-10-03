import IPlan from "./plan.interface";

export default interface ICalenderItem {
  date: string;
  plans: Array<IPlan>;
}
