const getStudentId = (
  grade: number,
  classNum: number,
  studentNumber: number,
) => {
  return String(grade * 1000 + classNum * 100 + studentNumber || "");
};

export default getStudentId;
