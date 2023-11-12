export default interface IAside {
  score: number;
  positivePoint: number;
  negativePoint: number;
  ranking: number;
  room: {
    roomNumber: number;
    yearSemester: {
      year: number;
      semester: number;
    };
    dormitoryType: string;
  };
  isCheckIn: false;
}
