import { Direction } from "./Direction";

export class Rover {
   x: number = 0;
   y: number = 0;


  forward() {
    this.y += 1;
  }
  direction(): Direction {
    return Direction.NORTH;
  }
}
