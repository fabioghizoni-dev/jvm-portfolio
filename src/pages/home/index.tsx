import { Header } from "../../layouts/Header";
import { HeroTitle } from "../components/hero-title";
import { SnakeGame } from "./snake-game";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroTitle />
      <SnakeGame />
    </>
  );
};