import { Direction } from './Direction';

export class Rover {
  x: number = 0;
  y: number = 0;

  direction = Direction.NORTH;

  forward() {
    if (this.direction === Direction.WEST) {
      this.x -= 1;
      return;
    }
    if (this.direction === Direction.SOUTH) {
      this.y -= 1;
      return;
    }
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
      case Direction.EAST:
        this.direction = Direction.NORTH;
        break;
    }
  }
}
