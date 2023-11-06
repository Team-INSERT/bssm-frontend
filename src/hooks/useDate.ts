import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/ko";
import useUser from "./useUser";

dayjs.extend(customParseFormat);

interface GetDateType {
  date: string;
}

interface DateType {
  type?: "KOR" | "ENG" | "ENG_DETAIL";
}

interface TranslateType {
  to: "KOR" | "ENG" | "ENG_DETAIL";
}

interface IFormatDateOptions {
  summary: boolean;
}

const weekdaysENG = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const weekdaysENGDetail = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
const weekdaysKOR = ["일", "월", "화", "수", "목", "금", "토"];

const useDate = () => {
  const { user } = useUser();
  const dateObject = new Date();

  const currentYearsWithSchool = Array.from({ length: 3 }).map(
    (_, i) => user.enroll + i,
  );

  const formatDate = (date?: string, option?: IFormatDateOptions) => {
    if (option?.summary) return dayjs(date).locale("ko").format("YYYY.MM.DD.");
    return dayjs(date).locale("ko").format("YYYY.MM.DD. A hh:mm");
  };

  const unformatDate = (date: string, option?: IFormatDateOptions) => {
    if (option?.summary) return dayjs(date).format("YYYY-MM-DD");
    return dayjs(date).format("YYYY-MM-DDThh:mm:ss");
  };

  const getHMSDate = () => {
    const date = dayjs();
    const HMSDate = dayjs(date).locale("ko").format("A h:mm:ss");
    return HMSDate;
  };

  const getDate = ({ date }: GetDateType) => {
    const parseDate = dayjs(date).locale("ko");

    const formattedDate = parseDate.format("YYYY.MM.DD. A hh:mm");
    return formattedDate;
  };

  const getMealDate = () => {
    return dayjs().format("YYMMDD");
  };

  const getDayOfWeek = (date: string) => {
    return dayjs(date, "YYMMDD").locale("ko").format("dddd");
  };

  const getMealDateTitle = (date: string) => {
    return dayjs(date, "YYMMDD").locale("ko").format("M월 D일 dddd");
  };

  const setMealDate = (date: string, day: number) => {
    return dayjs(date, "YYMMDD").add(day, "day").format("YYMMDD");
  };

  const getNowWeekDay = ({ type }: DateType) => {
    const today = dayjs().day();

    if (type === "KOR") return weekdaysKOR[today];
    if (type === "ENG_DETAIL") return weekdaysENGDetail[today];
    return weekdaysENG[today];
  };

  const translateDay = (date: string, { to }: TranslateType) => {
    if (to === "KOR") {
      if (date.includes("DAY")) {
        const index = weekdaysENGDetail.indexOf(date);
        return weekdaysKOR[index];
      }
      const index = weekdaysENG.indexOf(date);
      return weekdaysKOR[index];
    }

    if (to === "ENG_DETAIL") {
      const index = weekdaysKOR.indexOf(date);
      return weekdaysENGDetail[index];
    }

    const index = weekdaysKOR.indexOf(date);
    return weekdaysENG[index];
  };

  const getDiffDayTime = (from: string, to: string) => {
    const fromDayTime = dayjs(from, "HH:mm");
    const toDayTime = dayjs(to, "HH:mm");

    return fromDayTime.diff(toDayTime);
  };

  const getDiffNowDayTime = (day: string) => {
    const currentDayTime = dayjs(day, "HH:mm");
    const nowDayTime = dayjs();

    return nowDayTime.diff(currentDayTime);
  };

  const getDiffTimeProgress = () => {
    const nowTime = "00:00";
    const dayTime = getDiffDayTime("24:00", "00:00");
    const diffNowDayTime = getDiffNowDayTime(nowTime);

    const classProgress = diffNowDayTime / dayTime;
    return classProgress;
  };

  return {
    weekdaysENG,
    weekdaysKOR,
    weekdaysENGDetail,
    currentYearsWithSchool,
    unformatDate,
    formatDate,
    getHMSDate,
    getDate,
    getDayOfWeek,
    getMealDate,
    getMealDateTitle,
    setMealDate,
    getNowWeekDay,
    translateDay,
    getDiffDayTime,
    getDiffNowDayTime,
    getDiffTimeProgress,
    date: dateObject,
  };
};

export default useDate;
