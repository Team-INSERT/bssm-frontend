export default interface IClassInfo {
  period: string;
  subject: string;
  endTime: {
    hour: number;
    minute: number;
  };
  startTime: {
    hour: number;
    minute: number;
  };
}
