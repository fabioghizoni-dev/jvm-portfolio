import { type RefObject, useEffect } from "react";
import type { Point } from "../engine/types";

type Props = {
  ref: RefObject<HTMLElement | null>;
  onDirectionChange: (dir: Point) => void;
  disabled: boolean;
};

export const useTouch = ({ ref, onDirectionChange, disabled }: Props) => {
  useEffect(() => {
    if (disabled || !ref.current || !('ontouchstart' in window)) return;

    let startX = 0;
    let startY = 0;
    const minSwipeDistance = 50; // Minimum distance to consider as swipe

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      if (!startX || !startY) return;

      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Only consider swipe if distance is greater than minSwipeDistance
      if (Math.max(absDeltaX, absDeltaY) < minSwipeDistance) return;

      let next: Point | null = null;

      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) next = { x: 1, y: 0 }; // Right
        else next = { x: -1, y: 0 }; // Left
      } else {
        // Vertical swipe
        if (deltaY > 0) next = { x: 0, y: 1 }; // Down
        else next = { x: 0, y: -1 }; // Up
      }

      if (next) {
        onDirectionChange(next);
      }
    };

    const element = ref.current;
    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [disabled, onDirectionChange, ref]);
};
