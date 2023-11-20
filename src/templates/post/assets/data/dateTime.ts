import { POST_INPUT } from "../../constants";

const dateTime: Array<{
  label: string;
  name: string;
  dataName: "startTime" | "endTime";
}> = [
  {
    label: "시작 날짜",
    name: POST_INPUT.START_TIME,
    dataName: "startTime",
  },
  {
    label: "마감 날짜",
    name: POST_INPUT.END_TIME,
    dataName: "endTime",
  },
];

export default dateTime;
