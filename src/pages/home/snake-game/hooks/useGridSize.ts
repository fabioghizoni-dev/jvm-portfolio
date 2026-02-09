import { useEffect, useState } from "react";

export const useGridSize = () => {
  const [gridSize, setGridSize] = useState({ cols: 20, rows: 20 });

  useEffect(() => {
    const handleResize = () => {
      setGridSize(
        window.innerWidth >= 768
          ? { cols: 40, rows: 18 }
          : { cols: 20, rows: 20 }
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return gridSize;
};
