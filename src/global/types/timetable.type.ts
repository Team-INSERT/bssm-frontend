import IClass from "./classInfo.type";

export default interface ITimetable {
  [day: string]: IClass[];
}
