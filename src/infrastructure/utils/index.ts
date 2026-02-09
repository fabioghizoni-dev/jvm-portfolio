import { useEffect, useState } from "react";

export const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Copiado!");
    })
    .catch(err => {
      console.error("Erro ao copiar", err);
    });
};

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

