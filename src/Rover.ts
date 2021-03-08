import { Direction } from "./Direction";

export class Rover {
   x: number = 0;
   y: number = 0;

   direction = Direction.NORTH;

  forward() {
    this.y += 1;
  }

  left(){
    if (this.direction === Direction.WEST) {
      this.direction = Direction.SOUTH;
      return;  
    }
    this.direction = Direction.WEST;
  }
}
