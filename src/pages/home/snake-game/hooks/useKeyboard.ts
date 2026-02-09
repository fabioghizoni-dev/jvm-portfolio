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

      if (e.key === "ArrowUp") next = { x: 0, y: -1 };
      if (e.key === "ArrowDown") next = { x: 0, y: 1 };
      if (e.key === "ArrowLeft") next = { x: -1, y: 0 };
      if (e.key === "ArrowRight") next = { x: 1, y: 0 };

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
