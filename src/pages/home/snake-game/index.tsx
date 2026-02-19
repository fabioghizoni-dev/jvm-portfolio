import { Icon } from "@iconify/react";
import { memo, useMemo, useRef } from "react";
import { theme } from "../../../infrastructure/theme";
import { useMediaQuery } from "../../../infrastructure/utils";
import { useSnakeGame } from "./hooks/useSnakeGame";
import * as S from "./styles";

const SnakeSegment = memo(({ segment, index, gridSize }: {
  segment: { x: number; y: number };
  index: number;
  gridSize: { cols: number; rows: number }
}) => {
  const isHead = index === 0;
  return (
    <S.SnakeSegment
      key={index}
      $x={segment.x}
      $y={segment.y}
      $cols={gridSize.cols}
      $rows={gridSize.rows}
      $isHead={isHead}
    />
  );
});

SnakeSegment.displayName = 'SnakeSegment';

const FoodComponent = memo(({ food, gridSize }: {
  food: { x: number; y: number };
  gridSize: { cols: number; rows: number }
}) => {
  return (
    <S.Food
      $x={food.x}
      $y={food.y}
      $cols={gridSize.cols}
      $rows={gridSize.rows}
    />
  );
});

FoodComponent.displayName = 'FoodComponent';

export const SnakeGame = () => {
  const isMobile = useMediaQuery(`(${theme.utils.maxWidth + theme.spacing.md})`);
  const boardRef = useRef<HTMLDivElement>(null);
  const {
    score,
    snake,
    food,
    gridSize,
    gameOver,
    hasStarted,
    startGame,
    resetGame,
  } = useSnakeGame(boardRef);

  const snakeSegments = useMemo(() => {
    return snake.map((segment, index) => (
      <SnakeSegment
        key={index}
        segment={segment}
        index={index}
        gridSize={gridSize}
      />
    ));
  }, [snake, gridSize]);

  const foodComponent = useMemo(() => (
    <FoodComponent
      food={food}
      gridSize={gridSize}
    />
  ), [food, gridSize]);

  return (
    <S.GameContainer>
      <S.Score>Pontos: <S.Value>{score}</S.Value></S.Score>
      <S.Board ref={boardRef} $cols={gridSize.cols} $rows={gridSize.rows}>
        {snakeSegments}
        {foodComponent}

        {!hasStarted && (
          <S.GameOverOverlay>
            <S.StartButton onClick={startGame}>
              Play <Icon icon="mdi:play" width={28} />
            </S.StartButton>
          </S.GameOverOverlay>
        )}

        {gameOver && (
          <S.GameOverOverlay>
            <div>Game Over</div>
            <S.RestartButton onClick={resetGame}>Tentar novamente</S.RestartButton>
          </S.GameOverOverlay>
        )}
      </S.Board>
      <S.Text>{isMobile ? "Use o touch para mover" : "Use as setas para mover, espaço para pausar"}</S.Text>
    </S.GameContainer>
  );
};
