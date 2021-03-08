
export const position=(x, y) =>{
  return { x, y };
}
export interface Position {
  x: number;
  y: number;
}

export const north = (pos: Position) => {
    return position(pos.x, pos.y +1)
}

export const west =(pos: Position) => {
  return position(pos.x - 1, pos.y);
}