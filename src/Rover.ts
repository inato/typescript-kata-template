import { Direction } from './Direction';
import { north, position, Position } from './position';

export class Rover {
  private _position = position(0, 0);

  direction = Direction.NORTH;

  position(): Position {
    return this._position;
  }

  forward() {
    switch (this.direction) {
      case Direction.WEST:
        this._position = this.west(this._position);
        break;
      case Direction.SOUTH:
        this._position = position(this._position.x, this._position.y - 1);
        break;
      case Direction.NORTH:
        this._position = north(this._position);
        break;
      case Direction.EAST:
        this._position = position(this._position.x + 1, this._position.y);
        break;
    }
  }

  private west(pos: Position) {
    return position(pos.x - 1, pos.y);
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
