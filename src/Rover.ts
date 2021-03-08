import { Direction } from './Direction';

export class Rover {
  x: number = 0;
  y: number = 0;

  direction = Direction.NORTH;

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
