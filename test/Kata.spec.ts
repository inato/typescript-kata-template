import { Direction } from '../src/Direction';
import { Rover } from '../src/Rover';

describe('Rover', () => {
  let rover: Rover;

  beforeEach(() => {
    rover = new Rover();
  });
  // it('should accept a sequence of commands', () => {
  //   let rover = new Rover();

  //   rover.forward();
  //   rover.right();
  //   rover.forward();
  //   rover.forward();
  //   rover.left();
  //   rover.forward();
  //   rover.left();

  //   expect(rover.direction()).toBe(Direction.WEST);
  //   expect(rover.position()).toBe(new Position(2,2));
  // });

  it('should start at origin', () => {
    expect(rover.x).toBe(0);
    expect(rover.y).toBe(0);
  });

  it('should start facing North', () => {
    expect(rover.direction).toBe(Direction.NORTH);
  });

  describe('moving forward', () => {
    it('should move forward facing North', () => {
      rover.forward();

      expect(rover.x).toBe(0);
      expect(rover.y).toBe(1);
    });

    it('should not change direction when moving forward', () => {
      rover.forward();

      expect(rover.direction).toBe(Direction.NORTH);
    });
  });

  describe('left', () => {
    it('should not change the position', () => {
      rover.left();

      expect(rover.x).toBe(0);
      expect(rover.y).toBe(0);
    });

    it('should face WEST after turning once', () => {
      rover.left();

      expect(rover.direction).toBe(Direction.WEST);
    });

    it('should face SOUTH after turning twice', () => {
      rover.left();
      rover.left();

      expect(rover.direction).toBe(Direction.SOUTH);
    });

    it('should face EAST after turning 3 times', () => {
      rover.left();
      rover.left();
      rover.left();

      expect(rover.direction).toBe(Direction.EAST);
    });

    it('should face NORTH after turning 4 times', () => {
      rover.left();
      rover.left();
      rover.left();
      rover.left();

      expect(rover.direction).toBe(Direction.NORTH);
    });
  });
});
