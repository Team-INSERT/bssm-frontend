export default interface BerReserveMapProps {
  currentRoom: number;
  reservedList: Array<number>;
  handleClick: (roomNumber: number) => void;
}
