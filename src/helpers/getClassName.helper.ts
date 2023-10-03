const getClassName = (classname: string) => {
  switch (classname) {
    case "GRADE":
      return "학년";
    case "CLASS":
      return "학급";
    case "SCHOOL":
      return "학교";
    default:
      return classname;
  }
};

export default getClassName;
