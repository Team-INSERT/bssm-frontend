export default interface IReserve {
  id: number;
  berNumber: number;
  reservation: string;
  reservationUsersName: string;
  user: {
    id: number;
    name: string;
    nickname: string;
    profileImage: string;
    grade: number;
    class_number: number;
    student_number: number;
  };
}
