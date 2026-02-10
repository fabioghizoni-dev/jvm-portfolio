import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../infrastructure/theme";

export const HeaderContainer = styled.header`
  gap: 4rem;
  display: flex;
  padding: .875rem;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding-inline: calc((100% - ${theme.spacing.lg}) / 2);
  border-bottom: 0.063rem solid ${theme.colors.gray};
  
  @media (${theme.utils.maxWidth + theme.spacing.md}) {
    gap: 1rem;
    padding: .5rem;
  }
`;

export const Logo = styled.img.attrs({
  alt: 'Logo Portfólio Fábio'
})`
  height: 2.8rem;
  
  @media (${theme.utils.maxWidth + theme.spacing.md}) {
    height: 2rem;
  }
`;

export const JvmLogo = styled.img.attrs({
  alt: 'Logo JVM Lauchpad'
})`
  height: 3rem;

  @media (${theme.utils.maxWidth + theme.spacing.md}) {
    width: 15rem;
    height: 2.4rem;
  }
`;

export const SubHeader = styled.div`
  gap: 2rem;
  width: ${theme.spacing.full};
  display: flex;
  max-width: ${theme.spacing.lg};
  font-weight: 400;
  font-size: 1.1rem;
  align-self: center;
  justify-content: space-between;

  @media (${theme.utils.maxWidth + theme.spacing.md}) {
    gap: 1rem; 
    font-size: .9rem;
  }
`;

export const subHeaderBaseStyles = css<{ $active?: boolean }>`
  z-index: 0;
  color: white;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  min-width: fit-content;
  padding: 0.5rem 1.25rem;
  background-color: ${({ $active }) => $active ? theme.colors.red : "oklch(1 0 0 / 8%)"};
  border-radius: 0 0 0.625rem 0.625rem;
  transition: color 0.2s ease-in-out;

  &::before {
    inset: 0;
    content: "";
    z-index: -1;
    position: absolute;
    transform: scale(0);
    border-radius: inherit;
    transform-origin: left top;
    background-color: ${theme.colors.red};
    transition: transform 0.3s ease-in-out;
  }

  ${({ $active }) =>
    $active &&
    `
      &:hover {
        color: oklch(1 0 0 / 60%);
      }
  `}

  &:hover::before {
    transform: scale(1);
  }
`;


export const SubHeaderButton = styled.button <{ $active?: boolean }>`
  ${subHeaderBaseStyles}
`;

export const Menu = styled.button<{ $open?: boolean }>`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 8px;
    right: 8px;
    top: 50%;
    height: ${theme.spacing[2]};
    background-color: ${({ $open }) =>
    $open ? "transparent" : "white"};
    border-radius: ${theme.spacing[2]};
    transform: translateY(-50%);
    transition: background .2s ease;
    box-shadow: ${({ $open }) =>
    $open
      ? "none"
      : `0 -${theme.spacing[8]} 0 white, 0 ${theme.spacing[8]} 0 white`};
  }

  &::after {
    content: "";
    position: absolute;
    left: ${theme.spacing[8]};
    right: ${theme.spacing[8]};
    top: ${theme.spacing["1/2"]};
    height: ${theme.spacing[2]};
    background-color: white;
    border-radius: ${theme.spacing[2]};
    transform: ${({ $open }) =>
    $open
      ? `translateY(-${theme.spacing["1/2"]}) rotate(45deg)`
      : `translateY(-${theme.spacing["1/2"]}) translateY(-${theme.spacing[8]})`};
    transition: transform .25s ease;
  }
`;

export const SubHeaderLink = styled(Link) <{ $active?: boolean }>`
  ${subHeaderBaseStyles}
`;