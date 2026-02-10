import { useEffect } from "react";
import type { Point } from "../engine/types";

type Props = {
  onDirectionChange: (dir: Point) => void;
  onPause: () => void;
  disabled: boolean;
};

export const useKeyboard = ({
  onDirectionChange,
  onPause,
  disabled,
}: Props) => {
  useEffect(() => {
    if (disabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      let next: Point | null = null;

      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") next = { x: 0, y: -1 };
      if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") next = { x: 0, y: 1 };
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") next = { x: -1, y: 0 };
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") next = { x: 1, y: 0 };

      if (e.key === " ") {
        e.preventDefault();
        onPause();
        return;
      }

      if (next) {
        onDirectionChange(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [disabled, onDirectionChange, onPause]);
};
