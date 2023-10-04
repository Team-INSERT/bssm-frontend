import IReserve from "./reserve.interface";

export default interface IReserveList {
  reservedBerNumber: Array<number>;
  berResList: Array<IReserve>;
}
