import { IClassInfo } from "@/_interfaces";

export default interface ITimetable {
  [day: string]: IClassInfo[];
}
