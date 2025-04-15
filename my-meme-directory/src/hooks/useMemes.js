// src/hooks/useMemes.js
import { useState, useEffect } from "react";
import defaultMemes from "../data/memes";

const useMemes = () => {
  const loadMemes = () => {
    const saved = localStorage.getItem("memes");
    return saved ? JSON.parse(saved) : defaultMemes;
  };

  const [memes, setMemes] = useState(loadMemes);

  useEffect(() => {
    localStorage.setItem("memes", JSON.stringify(memes));
  }, [memes]);

  return [memes, setMemes];
};

export default useMemes;
