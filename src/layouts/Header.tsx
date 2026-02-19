import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../infrastructure/utils";
import * as S from "./styles";


export const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const SubHeaderContent = () => {
    return (
      <>
        <S.SubHeaderLink $active={location.pathname === '/'} to='/'>Home</S.SubHeaderLink>
        <S.SubHeaderLink $active={location.pathname === '/projects'} to='/projects'>Projetos</S.SubHeaderLink>
        <S.SubHeaderLink $active={location.pathname === '/contact'} to='/contact'>Contato</S.SubHeaderLink>
        <S.SubHeaderLink $active={location.pathname === '/about-me'} to='/about-me'>Sobre mim</S.SubHeaderLink>
      </>
    );
  };

  return (
    <>
      <S.Header>
        <S.Logo src="/logo.svg" />
        <S.JvmLogo src="/jvm_logo.svg" />
        {isMobile && <S.SubHeaderButton onClick={toggleMenu}><S.Menu $open={menuOpen} /></S.SubHeaderButton>}
      </S.Header>
      {!isMobile ? <S.SubHeader><SubHeaderContent /></S.SubHeader> : <S.MenuOpen />}
    </>
  );
};


