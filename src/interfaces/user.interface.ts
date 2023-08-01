interface AuthenticatedUser {
  isLogin: true;
  code: number;
  nickname: string;
  email: string;
  level: number;
  profile: string;
  role: "STUDENT" | "TEACHER";
}

export interface Student extends AuthenticatedUser {
  role: "STUDENT";
  student: {
    name: string;
    enrolledAt: number;
    grade: number;
    classNo: number;
    studentNo: number;
  };
}

export interface Teacher extends AuthenticatedUser {
  role: "TEACHER";
  teacher: {
    name: string;
  };
}

export interface UnauthenticatedUser {
  isLogin: boolean;
}
