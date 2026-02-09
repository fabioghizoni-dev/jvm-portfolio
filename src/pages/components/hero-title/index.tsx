import { useRef, type ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";

export const Title = styled.h1`
  color: white;
  margin-top: 1rem;
  align-self: center;
  text-align: center;
`;

export const TitlePrimary = styled.h1`
  --x: 0%;
  --y: 0%;
  --opacity: 0;

  margin-top: 2rem;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  
  display: inline-block;

  background: linear-gradient(to right, oklch(0.4775 0.2082 22.24), ${theme.colors.red}),
    radial-gradient(circle at var(--x) var(--y), oklch(1 0 0 / var(--opacity)), ${theme.colors.red});

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Anchor = styled.a`
  color:${theme.colors.red};
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: .6;
  }
`;

type HeroTitleProps = ComponentPropsWithoutRef<typeof Title> & {
  jvmUrl?: string;
  variant?: "default" | "primary";
  anchorChildren?: React.ReactNode;
};

export const HeroTitle = ({
  variant = "default",
  anchorChildren = "JVM Lauchpad",
  jvmUrl = "https://jvmlauchpad.com",
  children = "Portfólio em parceria com",
  ...rest
}: HeroTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = titleRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
    el.style.setProperty("--opacity", ".5");
  };

  const handleMouseLeave = () => {
    const el = titleRef.current;
    if (!el) return;

    el.style.setProperty("--opacity", "0");
  };
  if (variant === "primary") return (
    <TitlePrimary {...rest} ref={titleRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>{children}</TitlePrimary>
  );
  return (
    <Title {...rest}>
      {children} <Anchor target="_blank" rel="noopener noreferrer" href={jvmUrl}>{anchorChildren}</Anchor>
    </Title>
  );
};