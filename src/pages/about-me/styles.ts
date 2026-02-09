import styled from "styled-components";
import { theme } from "../../infrastructure/theme";

export const Section = styled.section`
  padding: 2rem;
  max-width: ${theme.spacing.lg};
  align-self: center;
  border-radius: 1rem;
  margin-bottom: 3rem;
  box-sizing: border-box;
  background: oklch(1 0 0 / 5%);
  border: 1px solid oklch(1 0 0 / 10%);

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.red};
    box-shadow: ${theme.boxShadows.red};
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
  color: oklch(1 0 0 / 80%);
  line-height: 1.8;
  text-align: justify;
`;