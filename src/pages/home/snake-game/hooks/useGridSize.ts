import { useEffect, useState } from "react";

const getOptimalGridSize = (width: number) => {
  // Definir breakpoints mais granulares
  if (width >= 1200) {
    // Desktop grande
    return { cols: 50, rows: 22 };
  } else if (width >= 992) {
    // Desktop médio
    return { cols: 45, rows: 20 };
  } else if (width >= 768) {
    // Desktop pequeno / tablet em landscape
    return { cols: 40, rows: 18 };
  } else if (width >= 576) {
    // Tablet em portrait
    return { cols: 30, rows: 30 };
  } else if (width >= 480) {
    // Smartphone grande
    return { cols: 25, rows: 25 };
  } else {
    // Smartphone pequeno
    return { cols: 20, rows: 20 };
  }
};

export const useGridSize = () => {
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setGridSize(getOptimalGridSize(width));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return gridSize;
};
