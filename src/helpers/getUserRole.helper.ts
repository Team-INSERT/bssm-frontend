import { USER } from "@/constants";

const ROLE = {
  STUDENT: "학생",
  TEACHER: "선생님",
};

const getUserRole = (role: string) => {
  if (role === USER.STUDENT) return ROLE.STUDENT;
  return ROLE.TEACHER;
};

export default getUserRole;
