import IClass from "@/global/types/class.type";
import ITimetable from "@/global/types/timetable.type";

export const emptyClass: IClass = {
  className: "",
  endTime: "23:59:59",
  startTime: "00:00:00",
  type: "normal",
  isNow: false,
};

export const emptyTimetable: ITimetable = {
  SUN: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
  FRI: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
  SAT: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
  TUE: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
  THU: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
  MON: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
  WED: [
    {
      className: "",
      endTime: "23:59:59",
      startTime: "00:00:00",
      type: "normal",
      isNow: false,
    },
  ],
};
