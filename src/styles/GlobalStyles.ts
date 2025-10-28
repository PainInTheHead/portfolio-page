import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Сброс стилей */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Основной шрифт и фон */
  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
  }

  /* Ссылки без подчеркивания */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Основные заголовки */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  /* Кнопки */
  button {
    cursor: pointer;
    font-family: inherit;
  }

  .electric-border {
  --electric-light-color: oklch(from var(--electric-border-color) l c h);
  --eb-border-width: 2px;
  position: relative;
  border-radius: inherit;
  overflow: visible;
  isolation: isolate;
}

.eb-svg {
  position: fixed;
  left: -10000px;
  top: -10000px;
  width: 10px;
  height: 10px;
  opacity: 0.001;
  pointer-events: none;
}

.eb-content {
  position: relative;
  border-radius: inherit;
  z-index: 1;
}

.eb-layers {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
}

.eb-stroke,
.eb-glow-1,
.eb-glow-2,
.eb-overlay-1,
.eb-overlay-2,
.eb-background-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-sizing: border-box;
}

.eb-stroke {
  border: var(--eb-border-width) solid var(--electric-border-color);
}

.eb-glow-1 {
  border: var(--eb-border-width) solid oklch(from var(--electric-border-color) l c h / 0.6);
  opacity: 0.5;
  filter: blur(calc(0.5px + (var(--eb-border-width) * 0.25)));
}

.eb-glow-2 {
  border: var(--eb-border-width) solid var(--electric-light-color);
  opacity: 0.5;
  filter: blur(calc(2px + (var(--eb-border-width) * 0.5)));
}

.eb-background-glow {
  z-index: -1;
  transform: scale(1.08);
  filter: blur(32px);
  opacity: 0.3;
  background: linear-gradient(-30deg, var(--electric-light-color), transparent, var(--electric-border-color));
}

/* Для Chrome, Edge, Safari */
::-webkit-scrollbar {
  width: 6px;              /* тонкий скроллбар */
}

::-webkit-scrollbar-track {
  background: transparent; /* фон трека прозрачный */
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15); /* полупрозрачный бегунок */
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);  /* чуть ярче при наведении */
}

/* Для Firefox */
* {
  scrollbar-width: thin;                  /* тонкий скроллбар */
  scrollbar-color: rgba(255,255,255,0.15) transparent;
}

 ul {
   display: flex;
   
   flex-direction: column;
   
   gap: 24px;
   
   font-size: 18px;
   list-style: none;
   text-align: start;
   line-height: 32px;
  }

  .glass-effect {
  background: rgba(9, 9, 9, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); 
  border: 1px solid rgba(255, 255, 255, 0.15); 
  border-radius: 12px;
}

.max-width {
  margin: 0 auto;
  max-width: 1200px;
}

.app-content {

  height: 100%;
  overflow-y: auto;
  padding-bottom: 6rem;
  overflow-x: hidden;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */
}

.app-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;
