import { Direction } from "./Direction";

export class Rover {
   x: number = 0;
   y: number = 0;

   direction = Direction.NORTH;


  forward() {
    this.y += 1;
  }

  left(){
    this.direction = Direction.WEST;
  }
}
