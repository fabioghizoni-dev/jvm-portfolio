import { Icon } from "@iconify/react";
import styled from "styled-components";
import { theme } from "../../infrastructure/theme";

export const Grid = styled.div`
  gap: 2rem;
  width: ${theme.spacing.full};
  display: grid;
  align-self: center;
  max-width: ${theme.spacing.lg};
  grid-template-columns: repeat(auto-fit, minmax(${theme.spacing[300]}, 1fr));
`;

export const ExternalLink = styled(Icon)`
  color: white;
  width: ${theme.spacing.icon};
  height: ${theme.spacing.icon};
  align-self: self-end;
  min-block-size: ${theme.spacing.icon};
  min-inline-size: ${theme.spacing.icon};
`;

export const ProjectCard = styled.a.attrs({
  target: "_blank"
})`
  display: flex;
  padding: 1.5rem;
  position: relative;
  border-radius: 1rem;
  flex-direction: column;
  background: oklch(1 0 0 / 5%);
  justify-content: space-between;
  transition: all .2s ease-in-out;
  border: 1px solid oklch(1 0 0 / 10%);

  &:hover {
    transform: ${theme.translate.y.minus5};
    border-color: ${theme.colors.red};
    box-shadow: ${theme.boxShadows.red};

    ${ExternalLink} {
      scale: 110%;
      color: ${theme.colors.red};
      transform: ${theme.translate.y.minus5};
      transition: all .2s ease-in-out;
    }
  }
`;

export const ProjectTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProjectDesc = styled.p`
  height: ${theme.spacing.full};
  font-size: 1rem;
  line-height: 1.5;
  color: oklch(1 0 0 / 70%);
`;