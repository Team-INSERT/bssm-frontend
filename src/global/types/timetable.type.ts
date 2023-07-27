import IClass from "./class.type";

export default interface ITimetable {
  [day: string]: IClass[];
}
