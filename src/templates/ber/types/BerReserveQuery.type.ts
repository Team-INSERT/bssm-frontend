import BerReserve from "./BerReserve.type";

export default interface BerReserveQuery {
  reservedBerNumber: Array<number>;
  berResList: Array<BerReserve>;
}
