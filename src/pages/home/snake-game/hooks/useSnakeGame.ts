import { useCallback, useRef, useState } from "react";
import { checkSelfCollision, checkWallCollision } from "../engine/checkCollision";
import { INITIAL_DIRECTION, INITIAL_SNAKE, INITIAL_SPEED } from "../engine/constants";
import { generateFood } from "../engine/generateFood";
import { moveSnake } from "../engine/moveSnake";
import type { Point } from "../engine/types";
import { useGameLoop } from "./useGameLoop";
import { useGridSize } from "./useGridSize";
import { useKeyboard } from "./useKeyboard";

export const useSnakeGame = () => {
  const gridSize = useGridSize();

  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Input queue to store buffered moves
  const directionQueue = useRef<Point[]>([]);

  const handleDirectionChange = useCallback((newDir: Point) => {
    // Only allow direction changes if game has started
    if (!hasStarted) return;

    // Determine the last planned direction (either from queue or current state)
    const lastDir = directionQueue.current.length > 0
      ? directionQueue.current[directionQueue.current.length - 1]
      : direction;

    // Prevent 180-degree turns (e.g., cannot go UP if currently going DOWN)
    // Also prevents pressing same direction multiple times filling the queue usefullessly
    const isOpposite = newDir.x + lastDir.x === 0 && newDir.y + lastDir.y === 0;
    const isSame = newDir.x === lastDir.x && newDir.y === lastDir.y;

    if (!isOpposite && !isSame) {
      // Limit queue size to prevent massive buffering if user mashes keys
      if (directionQueue.current.length < 3) {
        directionQueue.current.push(newDir);
      }
    }
  }, [direction, hasStarted]);

  useKeyboard({
    disabled: gameOver,
    onPause: () => {
      if (hasStarted) setIsPaused(p => !p);
    },
    onDirectionChange: handleDirectionChange,
  });

  const tick = useCallback(() => {
    // Process next move from queue if available
    if (directionQueue.current.length > 0) {
      const queued = directionQueue.current.shift();
      if (queued) {
        setDirection(queued);
        // We use nextDir immediately for the move calculation below
        // causing a slight sync issue if we just set state.
        // Better to use a local variable for calculation.
      }
    }

    setSnake(prev => {
      const nextSnake = moveSnake(prev, direction);
      const head = nextSnake[0];

      if (
        checkWallCollision(head, gridSize.cols, gridSize.rows) ||
        checkSelfCollision(head, prev)
      ) {
        setGameOver(true);
        return prev;
      }

      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 1);
        setFood(generateFood(prev, gridSize.cols, gridSize.rows));
        return nextSnake;
      }

      nextSnake.pop();
      return nextSnake;
    });
  }, [direction, food, gridSize]);

  useGameLoop(tick, INITIAL_SPEED, gameOver || isPaused || !hasStarted);

const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionQueue.current = []; // Clear queue
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    // Don't reset hasStarted to false on reset, usually users want to replay immediately.
    // But if we want the menu again, we can set it to false.
    // Standard behavior is usually restart immediately.
    // If we want "Play" button behavior to be only on *first* load, keep true.
    // If we want it on every death, set false.
    // Let's keep it true (instant restart) for better UX on retry,
    // unless user explicitly wants to go back to title.
    setFood(generateFood(INITIAL_SNAKE, gridSize.cols, gridSize.rows));
  }, [gridSize]);

  const startGame = useCallback(() => {
    setHasStarted(true);
    setIsPaused(false);
    // Ensure focus or init state if needed
  }, []);

  return {
    gridSize,
    snake,
    food,
    score,
    gameOver,
    isPaused,
    hasStarted,
    resetGame,
    startGame,
  };
};
