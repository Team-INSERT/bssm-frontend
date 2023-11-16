const ROUTER = {
  HOME: "/",
  MEISTER: "/meister",
  APPLICATIONS: "/applications",
  LOGIN: "/oauth",
  POST: {
    LIST: "/post",
    WRITE: "/post/write",
    UPDATE: "/post/edit",
  },
  TIMETABLE: "/timetable",
  MYPAGE: "/mypage",
  NOTFOUND: "/404",
  MEAL: "/meal",
  RESERVE: "/reserve",
  JOIN_CHECK: "/join",
  CALENDER: "/calendar",
} as const;

export default ROUTER;
