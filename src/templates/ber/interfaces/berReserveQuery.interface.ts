import BerReserve from "./berReserve.interface";

export default interface BerReserveQuery {
  reservedBerNumber: Array<number>;
  berResList: Array<BerReserve>;
}
