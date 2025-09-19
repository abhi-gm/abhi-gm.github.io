import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at 10% 20%, rgba(37, 46, 68, 0.6), transparent 55%),
      radial-gradient(circle at 90% 10%, rgba(234, 88, 12, 0.35), transparent 65%),
      radial-gradient(circle at 15% 85%, rgba(250, 204, 21, 0.18), transparent 55%),
      ${({ theme }) => theme.body};
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    font-family: 'Space Grotesk', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.45s ease, color 0.45s ease;
    --color-text: ${({ theme }) => theme.text};
    --color-subtle: ${({ theme }) => theme.secondaryText};
    --color-accent: ${({ theme }) => theme.highlight};
    --color-surface: ${({ theme }) => theme.surface || 'rgba(24, 24, 28, 0.85)'};
    --color-glow: ${({ theme }) => theme.glow || 'rgba(250, 204, 21, 0.35)'};
  }

  #root {
    width: 100%;
  }

  ::selection {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.dark};
  }
`;
