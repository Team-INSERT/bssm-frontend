import IClassInfo from "./classInfo.type";

export default interface ITimetable {
  [day: string]: IClassInfo[];
}
