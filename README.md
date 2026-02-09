# JVM Portfolio

Este é o meu portfólio pessoal, desenvolvido com React, TypeScript e Vite.

## Começando

Para rodar o projeto localmente, siga os seguintes passos:

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    ```
2.  Instale as dependências:
    ```bash
    pnpm install
    ```
3.  Rode o projeto:
    ```bash
    pnpm run dev
    ```


## Scripts

- `pnpm run dev`: Inicia o servidor de desenvolvimento.
- `pnpm run dev:host`: Inicia o servidor de desenvolvimento e o expõe na sua rede.
- `pnpm run build`: Gera a versão de produção do projeto.
- `pnpm run preview`: Visualiza a versão de produção localmente.
- `pnpm run test`: Roda os testes.
- `pnpm run lint`: Roda o linter.

## Estrutura do Projeto

```
.
├── public
│   ├── bg.png
│   ├── jvm_logo.svg
│   └── logo.svg
├── src
│   ├── main.tsx
│   ├── infrastructure
│   │   ├── constants
│   │   │   └── index.ts
│   │   ├── theme
│   │   │   ├── index.ts
│   │   │   └── styled.d.ts
│   │   └── utils
│   │       └── index.ts
│   ├── layouts
│   │   ├── Header.tsx
│   │   └── styles.ts
│   ├── pages
│   │   ├── about-me
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── components
│   │   │   └── hero-title
│   │   │       └── index.tsx
│   │   ├── contact-me
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── home
│   │   │   ├── index.tsx
│   │   │   └── snake-game
│   │   │       ├── index.tsx
│   │   │       ├── styles.ts
│   │   │       ├── engine
│   │   │       │   ├── checkCollision.ts
│   │   │       │   ├── constants.ts
│   │   │       │   ├── generateFood.ts
│   │   │       │   ├── moveSnake.ts
│   │   │       │   └── types.ts
│   │   │       └── hooks
│   │   │           ├── useGameLoop.ts
│   │   │           ├── useGridSize.ts
│   │   │           ├── useKeyboard.ts
│   │   │           └── useSnakeGame.ts
│   │   └── projects
│   │       ├── index.tsx
│   │       └── styles.ts
│   └── router
│       └── index.tsx
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
