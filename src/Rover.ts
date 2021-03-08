import { Direction } from "./Direction";

export class Rover {
  direction(): Direction {
    return Direction.NORTH;
  }
  y(): number {
    return 0;
  }
  x(): number {
    return 0;
  }
}
