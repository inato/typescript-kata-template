import { Direction } from "./Direction";

export class Rover {
  readonly x: number = 0;
  readonly y: number = 0;


  forward() {
    return this;
  }
  direction(): Direction {
    return Direction.NORTH;
  }
}
