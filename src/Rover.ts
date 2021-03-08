import { Direction } from './Direction';


export interface Position {
  x: number;
  y: number;
}
export class Rover {
  x: number = 0;
  y: number = 0;

  direction = Direction.NORTH;

  position():Position {
    // return [x,y];
  }

  forward() {
    switch (this.direction) {
      case Direction.WEST:
        this.x -= 1;
        break;
      case Direction.SOUTH:
        this.y -= 1;
        break;
      case Direction.NORTH:
        this.y += 1;
        break;
      case Direction.EAST:
        this.x += 1;
        break;
    }
  }

  left() {
    switch (this.direction) {
      case Direction.WEST:
        this.direction = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.direction = Direction.EAST;
        break;
      case Direction.NORTH:
        this.direction = Direction.WEST;
        break;
      case Direction.EAST:
        this.direction = Direction.NORTH;
        break;
    }
  }
}
