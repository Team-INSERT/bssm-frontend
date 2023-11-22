export default interface MeisterRankingItem {
  score: number;
  positivePoint: number;
  negativePoint: number;
  student: {
    grade: number;
    classNo: number;
    studentNo: number;
    name: string;
  };
}
