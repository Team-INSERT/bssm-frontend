const ROUTER = {
  HOME: "/",
  MEISTER: "/meister",
  APPLICATIONS: "/applications",
  LOGIN: "/oauth",
  POST: {
    DETAIL: "/post",
    LIST: "/post",
    WRITE: "/post/write",
    UPDATE: "/edit",
  },
  TIMETABLE: "/timetable",
  MYPAGE: "/mypage",
  NOTFOUND: "/404",
  MEAL: "/meal",
  RESERVE: "/ber",
  JOIN_CHECK: "/join",
  CALENDER: "/calendar",
} as const;

export default ROUTER;
