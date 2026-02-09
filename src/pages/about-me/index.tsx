import { Header } from "../../layouts/Header";
import { HeroTitle } from "../components/hero-title";
import * as S from "./styles";

export const AboutMe = () => {
  return (
    <>
      <Header />
      <HeroTitle variant="primary">Sobre Mim</HeroTitle>
      <S.Section>
        <S.SubTitle>Quem sou eu</S.SubTitle>
        <S.Paragraph>
          Olá! Sou Fábio, um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
          Com experiência no ecossistema Delphi e desenvolvimento Web moderno, busco sempre entregar
          código de alta qualidade e experiências de usuário excepcionais.
          Olá!! Meu nome é Fábio, tenho 20 anos e moro em Manoel Ribas, Paraná - Brasil. Sou uma
          pessoa muito curiosa que gosta de aprender como tudo funciona. Por isso, sou apaixonado
          por tecnologia, que é uma área muito ampla e interessante. Sou desenvolvedor full-stack,
          criando interfaces intuitivas e dinâmicas com interatividade e acessibilidade. Minha principal
          experiência é na web, mas também já desenvolvi aplicativos para desktop e mobile. Sou formado
          em Análise e Desenvolvimento de Sistemas e agora busco aprender mais sobre diversas tecnologias,
          como Python, Docker, AWS, React Native e outras.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SubTitle>O que faço</S.SubTitle>
        <S.Paragraph>
          Atualmente trabalho com desenvolvimento Full Stack, utilizando tecnologias como
          Java, Spring Boot, React, TypeScript e Node.js. Tenho grande interesse em
          arquitetura de software, boas práticas e performance.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SubTitle>Missão</S.SubTitle>
        <S.Paragraph>
          Meu objetivo é contribuir para projetos que impactem positivamente a vida das pessoas,
          sempre aprendendo e compartilhando conhecimento com a comunidade.
        </S.Paragraph>
      </S.Section>
    </>
  );
};