import { Icon } from "@iconify/react";
import styled from "styled-components";
import { theme } from "../../infrastructure/theme";

export const ContentWrapper = styled.div`
  align-self: center;
  max-width: ${theme.spacing.lg};
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: ${theme.spacing.full};
  background: oklch(1 0 0 / 5%);
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid oklch(1 0 0 / 10%);
  backdrop-filter: blur(10px);
  box-sizing: border-box;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.red};
    box-shadow: ${theme.boxShadows.red};
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: oklch(1 0 0 / 80%);
  line-height: 1.6;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.div`
  gap: .6rem;
  display: grid;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid oklch(1 0 0 / 10%);
  grid-template-columns: fit-content(${theme.spacing.full});

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  font-size: .9rem;
  grid-column: 1 / -1;
  letter-spacing: 0.05em;
  color: oklch(1 0 0 / 60%);
  text-transform: uppercase;
`;

export const Value = styled.a`
  grid-row: 2;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color .2s;

  &:hover {
    color: ${theme.colors.red};
  }
`;

export const Copy = styled(Icon).attrs({
  width: 20,
})`
  grid-row: 2;
  cursor: pointer;
  justify-self: start;
  transition: color .2s;
  color: ${theme.colors.red};

  &:hover {
    color: white;
  }
`;