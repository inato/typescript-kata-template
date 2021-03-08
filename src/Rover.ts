import { Direction } from './Direction';
import { north, west, position, Position, east, south } from './position';

export class Rover {
  private _position = position(0, 0);

  direction = Direction.NORTH;

  position(): Position {
    return this._position;
  }

  forward() {
    switch (this.direction) {
      case Direction.WEST:
        this._position = west(this._position);
        break;
      case Direction.SOUTH:
        this._position = south(this._position);
        break;
      case Direction.NORTH:
        this._position = north(this._position);
        break;
      case Direction.EAST:
        this._position = east(this._position);
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
  right() {
    this.left();
    this.left();
    this.left();
  }
}
