import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";

export const GameContainer = styled.div`
  width: ${theme.spacing.full};
  height: ${theme.spacing.full};
  display: flex;
  padding: .5rem;
  max-width: ${theme.spacing.lg};
  margin-top: -10px;
  position: relative;
  align-self: center;
  align-items: center;
  border-radius: 1rem;
  flex-direction: column;
  background: oklch(1 0 0 / 5%);
  backdrop-filter: blur(.625rem);
  border: 1px solid oklch(1 0 0 / 10%);
  box-shadow: 0 .25rem .375rem oklch(0 0 0 / 10%);

  @media (max-width: 768px) {
    padding: 0.25rem;
    margin-top: -5px;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    padding: 0.125rem;
    max-width: 98%;
    margin-top: 0;
  }
`;

export const Score = styled.div`
  gap: .4rem;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: .5rem;
  color: oklch(1 0 0 / 60%);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
`;

export const Value = styled.span`
  color: white;
`;

export const Board = styled.div<{ $cols: number; $rows: number }>`
  position: relative;
  width: ${theme.spacing.full};
  max-width: 90%;
  
  /* Maintain aspect ratio based on grid size */
  aspect-ratio: ${props => props.$cols} / ${props => props.$rows};

  background-color: oklch(0.1684 0 0);
  border: 2px solid oklch(0.3211 0 0);
  overflow: hidden; /* Ensure snake doesn't overflow visually if something bugs out */

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0.5rem;
    border-width: 1px;
  }

  @media (max-width: 480px) {
    border-width: 1px;
    touch-action: none; /* Melhora a experiência de toque */
  }
`;

interface PositionProps {
  $x: number;
  $y: number;
  $cols: number;
  $rows: number;
}

const getPositionStyles = (props: PositionProps) => `
  left: ${(props.$x / props.$cols) * 100}%;
  top: ${(props.$y / props.$rows) * 100}%;
  width: ${100 / props.$cols}%;
  height: ${100 / props.$rows}%;
`;

export const SnakeSegment = styled.div<{ $isHead?: boolean } & PositionProps>`
  position: absolute;
  ${props => getPositionStyles(props)}
  
  border-radius: 2px;
  z-index: ${props => props.$isHead ? 2 : 1};
  box-shadow: 0 0 5px oklch(0.628 0.2577 29.23 / 50%);
  background-color: ${props => props.$isHead ? theme.colors.red : 'oklch(0.673 0.2146 25.04)'};
  
  /* Smooth movement transition */
  transition: top 120ms linear, left 120ms linear;
`;

export const Food = styled.div<PositionProps>`
  position: absolute;
  ${props => getPositionStyles(props)}

  background-color: ${theme.colors.yellow};
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% { transform: scale(0.9); box-shadow: 0 0 8px rgba(255, 215, 0, 0.6); }
    50% { transform: scale(1.1); box-shadow: 0 0 12px rgba(255, 215, 0, 0.8); }
    ${theme.spacing.full} { transform: scale(0.9); box-shadow: 0 0 8px rgba(255, 215, 0, 0.6); }
  }
`;

export const GameOverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${theme.spacing.full};
  height: ${theme.spacing.full};
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  z-index: 10;
`;

export const RestartButton = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.red};
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: oklch(1 0 0 / 60%);
  }
`;

export const StartButton = styled(RestartButton)`
  gap: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h2`
  color: white;
  margin: .5rem 0;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
