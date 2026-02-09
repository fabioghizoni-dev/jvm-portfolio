import type { Point } from "./types";

export const moveSnake = (
  snake: Point[],
  direction: Point
): Point[] => {
  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y,
  };

  return [newHead, ...snake];
};
