const get요일ByWeekday = (weekday: string) => {
  switch (weekday) {
    case "MONDAY":
      return "월요일";
    case "TUESDAY":
      return "화요일";
    case "WEDNESDAY":
      return "수요일";
    case "THURSDAY":
      return "목요일";
    case "FRIDAY":
      return "금요일";
    default:
      return weekday;
  }
};

export default get요일ByWeekday;
