// src/theme.ts

// --- Radius ---
export const radius = {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '24px',
    full: '1000px',
  };
  
  // --- Spacing ---
  export const spacing = {
    0: '0px',
    25: '2px',
    50: '4px',
    100: '8px',
    150: '12px',
    200: '16px',
    300: '24px',
    400: '32px',
    500: '40px',
    600: '48px',
    700: '56px',
    800: '64px',
    900: '72px',
    1000: '80px',
  };
  
  // --- Breakpoints ---
  export const breakpoints = {
    xs: '360px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1440px',
  };
  
  // --- Colors (simplified example; expand as needed) ---
  export const colors = {
    brand: {
      b2b: 'rgb(253 118 82)',
      access: 'rgb(156 69 196)',
      auditor: 'rgb(78 169 244)',
      // add other brands here...
    },
    neutral: {
      white: 'rgb(255 255 255)',
      lightest: 'rgb(245 248 250)',
      base: 'rgb(167 179 190)',
      darkest: 'rgb(23 26 28)',
      // expand as needed
    },
    primary: {
      base: 'rgb(0 93 227)',
      dark: 'rgb(0 53 163)',
      light: 'rgb(61 135 242)',
      lightX2: 'rgb(140 192 228)',
      lightest: 'rgb(235 242 253)',
    },
    status: {
      red: 'rgb(242 39 26)',
      redDark: 'rgb(116 4 17)',
      green: 'rgb(74 209 50)',
      yellow: 'rgb(247 195 7)',
      blue: 'rgb(52 158 255)',
    },
    text: {
      default: 'rgb(48 54 59)',
      inverse: 'rgb(255 255 255)',
      subtle: 'rgb(80 90 98)',
    },
  };
  
  // --- Typography ---
  export const typography = {
    fontFamily: '"Cerebri Sans", sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      textXs: '12px',
      textSm: '14px',
      textMd: '16px',
      textLg: '18px',
      textXl: '20px',
      displayXs: '24px',
      displaySm: '30px',
      displayMd: '36px',
      displayLg: '48px',
    },
    lineHeights: {
      textXs: '18px',
      textSm: '20px',
      textMd: '24px',
      textLg: '28px',
      textXl: '30px',
      displayXs: '32px',
      displaySm: '38px',
      displayMd: '44px',
      displayLg: '60px',
    },
  };
  
  // --- Bundle it all ---
  export const theme = {
    radius,
    spacing,
    breakpoints,
    colors,
    typography,
  };