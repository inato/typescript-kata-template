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

     expect(rover.x()).toBe(0);
     expect(rover.y()).toBe(0);
  });

  it('should start facing North', () => {
    const rover = new Rover();

    expect(rover.direction()).toBe(Direction.NORTH);
 });
});
