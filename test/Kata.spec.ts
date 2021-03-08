import { Direction } from "../src/Direction";
import { Rover } from "../src/Rover";

describe('Rover', () => {
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
     const rover = new Rover();

     expect(rover.x).toBe(0);
     expect(rover.y).toBe(0);
  });

  it('should start facing North', () => {
    const rover = new Rover();

    expect(rover.direction).toBe(Direction.NORTH);
 });

   describe('moving forward', () => {
      

   it('should move forward facing North', () => {
      const rover = new Rover();

      rover.forward();

      expect(rover.x).toBe(0);
      expect(rover.y).toBe(1);
   });

   it('should not change direction when moving forward', () => {
      const rover = new Rover();

      rover.forward();

      expect(rover.direction).toBe(Direction.NORTH);
   });
   });

  it('should move forward facing North', () => {
    const rover = new Rover();

    rover.forward();

    expect(rover.x).toBe(0);
    expect(rover.y).toBe(1);
    expect(rover.direction).toBe(Direction.NORTH);
 });

 it('should turn left', () => {
    const rover = new Rover();

    rover.left();

    expect(rover.x).toBe(0);
    expect(rover.y).toBe(0);
    expect(rover.direction).toBe(Direction.WEST);
 });
});
