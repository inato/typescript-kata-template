import { Direction } from './Direction';

export function position(x, y) {
  return { x, y };
}

export interface Position {
  x: number;
  y: number;
}

export class Rover {
  private x: number = 0;
  private y: number = 0;
  private _position = position(0, 0);

  direction = Direction.NORTH;

  position(): Position {
    return this._position;
  }

  forward() {
    switch (this.direction) {
      case Direction.WEST:
        this.x -= 1;
        this._position = position(this._position.x - 1, this._position.y);
        break;
      case Direction.SOUTH:
        this.y -= 1;
        this._position = position(this._position.x, this._position.y - 1);
        break;
      case Direction.NORTH:
        this.y += 1;
        this._position = position(this._position.x, this._position.y + 1);
        break;
      case Direction.EAST:
        this.x += 1;
        this._position = position(this._position.x + 1, this._position.y);
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
