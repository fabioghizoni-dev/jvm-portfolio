import type { Point } from "./types";

export const checkWallCollision = (
  point: Point,
  cols: number,
  rows: number
) =>
  point.x < 0 ||
  point.y < 0 ||
  point.x >= cols ||
  point.y >= rows;

export const checkSelfCollision = (
  head: Point,
  snake: Point[]
) =>
  snake.some(s => s.x === head.x && s.y === head.y);
