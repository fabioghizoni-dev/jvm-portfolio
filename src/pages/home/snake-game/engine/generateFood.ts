import type { Point } from "./types";

const snakePositionsCache = new Set<string>();

export const generateFood = (
  snake: Point[],
  cols: number,
  rows: number
): Point => {
  snakePositionsCache.clear();
  snake.forEach(s => snakePositionsCache.add(`${s.x},${s.y}`));

  let food: Point;
  let attempts = 0;
  const maxAttempts = 50;

  do {
    food = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
    };
    attempts++;
  } while (snakePositionsCache.has(`${food.x},${food.y}`) && attempts < maxAttempts);

  return food;
};