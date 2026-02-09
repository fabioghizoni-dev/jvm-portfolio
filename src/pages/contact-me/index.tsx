import { personal as p } from "../../infrastructure/constants";
import { handleCopy } from "../../infrastructure/utils";
import { Header } from "../../layouts/Header";
import { HeroTitle } from "../components/hero-title";
import * as S from "./styles";

export const ContactMe = () => {
  return (
    <>
      <Header />
      <S.ContentWrapper>
        <HeroTitle variant="primary">Entre em Contato</HeroTitle>
        <S.Text>
          Estou sempre aberto a novas oportunidades e parcerias.
          Sinta-se à vontade para me mandar uma mensagem!
        </S.Text>

        <S.ContactList>
          <S.ContactItem>
            <S.Label>Email</S.Label>
            <S.Value href={`mailto:${p.email}`}>{p.email}</S.Value>
            <S.Copy icon="lucide:clipboard-copy" onClick={() => handleCopy(p.email)} />
          </S.ContactItem>
          <S.ContactItem>
            <S.Label>LinkedIn</S.Label>
            <S.Value href={p.linkedin.url} target="_blank">{p.linkedin.raw}</S.Value>
            <S.Copy icon="lucide:clipboard-copy" onClick={() => handleCopy(p.linkedin.url)} />
          </S.ContactItem>
          <S.ContactItem>
            <S.Label>GitHub</S.Label>
            <S.Value target="_blank" href={p.gitHub.url}>{p.gitHub.raw}</S.Value>
            <S.Copy icon="lucide:clipboard-copy" onClick={() => handleCopy(p.gitHub.url)} />
          </S.ContactItem>
        </S.ContactList>
      </S.ContentWrapper>
    </>
  );
};