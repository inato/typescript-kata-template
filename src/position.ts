
export function position(x, y) {
  return { x, y };
}
export interface Position {
  x: number;
  y: number;
}

export const north = (pos) => {
    return position(pos.x, pos.y +1)
}