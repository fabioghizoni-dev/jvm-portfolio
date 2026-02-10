import { personal } from "../../infrastructure/constants";
import { Header } from "../../layouts/Header";
import { HeroTitle } from "../components/hero-title";
import * as S from "./styles";

export const Projects = () => {
  return (
    <>
      <Header />
      <HeroTitle variant="primary">Meus Projetos</HeroTitle>
      <S.Grid>
        <S.ProjectCard>
          <S.ProjectTitle>JVM Launchpad</S.ProjectTitle>
          <S.ProjectDesc>Uma iniciativa colaborativa e voluntária que integra estudo e prática em um ambiente de gamificação. Foca em aprofundar conhecimentos e aplicar habilidades em projetos práticos.</S.ProjectDesc>
          <S.ExternalLink icon="fe:link-external" />
        </S.ProjectCard>
        <S.ProjectCard href={personal.projects.jvm} title={personal.projects.jvm}>
          <S.ProjectTitle>JVM Portfólio</S.ProjectTitle>
          <S.ProjectDesc>Site de Portfólio desenvolvido em parceria com JVM Launchpad, nele há um jogo da cobrinha muito divertido e demais informações sobre mim.</S.ProjectDesc>
          <S.ExternalLink icon="fe:link-external" />
        </S.ProjectCard>
        <S.ProjectCard href={personal.projects.portfolio.url} title={personal.projects.portfolio.raw}>
          <S.ProjectTitle>Portfólio Pessoal</S.ProjectTitle>
          <S.ProjectDesc>Este site! Desenvolvido com tecnologias modernas para apresentar minhas habilidades e projetos.</S.ProjectDesc>
          <S.ExternalLink icon="fe:link-external" />
        </S.ProjectCard>
      </S.Grid>
    </>
  );
};
