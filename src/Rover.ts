import { Direction } from './Direction';

export class Rover {
  x: number = 0;
  y: number = 0;

  direction = Direction.NORTH;

  forward() {
    this.y += 1;
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

      default:
        this.direction = Direction.WEST;
        break;
    }
  }
}
