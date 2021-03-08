import { Direction } from '../src/Direction';
import { Rover } from '../src/Rover';
import { position } from "../src/position";

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

  describe('init', () => {

    it('should start at origin', () => {
      expect(rover.position()).toStrictEqual(position(0, 0));
    });
  
    it('should start facing North', () => {
      expect(rover.direction).toBe(Direction.NORTH);
    });
  });


  describe('moving forward', () => {
    it('should move up when facing North', () => {
      rover.forward();

      expect(rover.position()).toStrictEqual(position(0, 1));
    });

    it('should not change direction when moving forward', () => {
      rover.forward();

      expect(rover.direction).toBe(Direction.NORTH);
    });

    it('should move left when facing west', () => {
      rover.left();
      rover.forward();

      expect(rover.position()).toStrictEqual(position(-1, 0));
    })

    it('should move down when facing south', () => {
      rover.left();
      rover.left();
      rover.forward();

      expect(rover.position()).toStrictEqual(position(0, -1));
    })

    it('should move right when facing east', () => {
      rover.left();
      rover.left();
      rover.left();
      rover.forward();

      expect(rover.position()).toStrictEqual(position(1, 0));
    })

    it('should move up twice when moving forward twice', () => {
      rover.forward();
      rover.forward();

      expect(rover.position()).toStrictEqual(position(0, 2));
    } )
  });

  describe('left', () => {
    it('should not change the position', () => {
      rover.left();

      expect(rover.position()).toStrictEqual(position(0, 0));
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
