const ROUTER = {
  HOME: "/",
  MEISTER: "/meister",
  APPLICATIONS: "/applications",
  LOGIN: "/oauth",
  LOSTFOUND: {
    LIST: "/lostfound",
    WRITE: "/lostfound/write",
  },
  POST: {
    LIST: "/post",
    WRITE: "/post/write",
    UPDATE: "/update",
  },
  TIMETABLE: "/timetable",
  MYPAGE: "/mypage",
  NOTFOUND: "/404",
  MEAL: "/meal",
  RESERVE: "/reserve",
  JOIN_CHECK: "/join",
  CALENDER: "/calender",
} as const;

export default ROUTER;
