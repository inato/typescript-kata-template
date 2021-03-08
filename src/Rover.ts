import { Direction } from "./Direction";

export class Rover {
  private x: number;
  private y: number;

  forward() {
    throw new Error("Method not implemented.");
  }
  direction(): Direction {
    return Direction.NORTH;
  }
}
