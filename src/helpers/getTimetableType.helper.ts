const getTimetableType = (type: string) => {
  switch (type) {
    case "bar":
      return "막대 형식";
    case "table":
      return "표 형식";
    default:
      return type;
  }
};

export default getTimetableType;
