import { IClassInfo } from "@/interfaces";

export default interface ITimetable {
  [day: string]: IClassInfo[];
}
