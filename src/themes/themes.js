// Base
const bpSize = {
  mobileS: '20.65em', //330px
  mobileM: '25em', //400px
  mobileL: '30em', //480px
  tabletS: '37.5em', //600px
  tabletL: '48em', //768px
  desktopXS: '56.25em', //900px
  desktopS: '67.5em', //1080px
  desktopM: '75em', //1200px
  desktopL: '87.5em', //1400px
};
export const base = {
  fonts: {
    primary: 'Montserrat, system-ui, sans-serif',
    secondary: 'GazeNozarashi, system-ui, cursive',
    // 'Secondary' font for Japanese text
    tertiary: 'Zen Kurenaido, sans-serif',
  },
  bp: {
    mobileS: `only screen and (max-width: ${bpSize.mobileS})`,
    mobileM: `only screen and (max-width: ${bpSize.mobileM})`,
    mobileL: `only screen and (max-width: ${bpSize.mobileL})`,
    tabletS: `only screen and (max-width: ${bpSize.tabletS})`,
    tabletL: `only screen and (max-width: ${bpSize.tabletL})`,
    desktopXS: `only screen and (max-width: ${bpSize.desktopXS})`,
    desktopS: `only screen and (max-width: ${bpSize.desktopS})`,
    desktopM: `only screen and (max-width: ${bpSize.desktopM})`,
    desktopL: `only screen and (max-width: ${bpSize.desktopL})`,
  },
};

// Light Theme
const lightPalette = {
  primary: {
    50: '#ffffff',
    100: '#ecf6faed',
    200: '#ecf6fa',
    300: '#407ac3',
    350: '#79a2d5',
    400: '#2b548a',
    500: '#244977',
    600: '#1e3e67',
  },
  secondary: {},
  tertiary: {
    600: '#ce373c',
  },
  neutrals: {
    100: '#eee',
    200: '#fbf3e2',
    300: '#f1f2daff',
  },
  gradients: {
    hero: ['#fedccdcc', '#f5cce9cc', '#fedccdcc'],
    heroSectionBackdrop: ['#fbf3e2', '#fbf3e2'],
    footer: ['#fedccdcc', '#f5cce9cc'],
  },
};

// Dark Theme
const darkPalette = {
  primary: {
    50: '#283e51',
    100: '#1e3e67',
    200: '#244977',
    300: '#bfccdc',
    350: '#79a2d5',
    400: '#407ac3',
    500: '#ecf6fa',
    600: '#ecf6faed',
  },
  secondary: {},
  tertiary: { 600: '#ce373c' },
  neutrals: { 100: '#121212', 200: '#cfd7e1', 300: '#222222ff' },
  gradients: {
    hero: ['#283e51', '#0a2342', '#cfd7e1'],
    heroSectionBackdrop: ['#dee4eb', '#cfd7e1'],
    footer: ['#2b548acc', '#deb9d4'],
  },
};

export const darkTheme = {
  primary: {
    h1: darkPalette.primary[600],
    p: darkPalette.primary[600],
    span: darkPalette.primary[600],
    li: darkPalette.primary[600],
    link: darkPalette.primary[600],
    navigationBars: darkPalette.primary[600],
    scrollbarThumb: darkPalette.primary[600],
    footerContentBg: darkPalette.primary[200],
    h2: darkPalette.primary[350],
    navLinkHover: darkPalette.primary[400],
    h3: darkPalette.primary[300],
    h4: darkPalette.primary[300],
    skillLiText: darkPalette.primary[300],
    scrollbarThumbHover: darkPalette.primary[300],
    scrollbarTrack: darkPalette.primary[300],
    linkHover: darkPalette.primary[350],
    skillLiBg: darkPalette.primary[200],
    projectDescBg: darkPalette.primary[200],
    body: darkPalette.primary[50],
    main: darkPalette.primary[50],
  },
  tertiary: {
    textSelection: darkPalette.tertiary[600],
    focusOutline: darkPalette.tertiary[600],
    sunShadow: darkPalette.tertiary[600],
    linkBorder: darkPalette.tertiary[600],
    sidebarBorder: darkPalette.tertiary[600],
    projectBorder: darkPalette.tertiary[600],
    navigationBorder: darkPalette.tertiary[600],
  },
  neutrals: {
    footerText: darkPalette.neutrals[200],
    aboutBackdrop: darkPalette.neutrals[200],
    imageBorder: darkPalette.neutrals[200],
    textSelectionColor: darkPalette.neutrals[100],
  },
  gradients: {
    heroBgBottom: darkPalette.gradients.hero[0],
    heroBgTop: darkPalette.gradients.hero[1],
    heroBgBtmRtCorner: darkPalette.gradients.hero[2],
    heroSectionBackdropLeft: darkPalette.gradients.heroSectionBackdrop[0],
    heroSectionBackdropRight: darkPalette.gradients.heroSectionBackdrop[1],
    footerBgBottom: darkPalette.gradients.footer[1],
    footerBgTop: darkPalette.gradients.footer[0],
  },
};

export const lightTheme = {
  primary: {
    h1: lightPalette.primary[600],
    p: lightPalette.primary[600],
    span: lightPalette.primary[600],
    li: lightPalette.primary[600],
    link: lightPalette.primary[600],
    navigationBars: lightPalette.primary[600],
    scrollbarThumb: lightPalette.primary[600],
    footerContentBg: lightPalette.primary[400],
    h2: lightPalette.primary[400],
    navLinkHover: lightPalette.primary[350],
    h3: lightPalette.primary[300],
    h4: lightPalette.primary[300],
    skillLiText: lightPalette.primary[300],
    scrollbarThumbHover: lightPalette.primary[300],
    scrollbarTrack: lightPalette.primary[300],
    linkHover: lightPalette.primary[300],
    skillLiBg: lightPalette.primary[200],
    projectDescBg: lightPalette.primary[200],
    body: lightPalette.primary[50],
    main: lightPalette.primary[50],
  },
  tertiary: {
    textSelection: lightPalette.tertiary[600],
    focusOutline: lightPalette.tertiary[600],
    sunShadow: lightPalette.tertiary[600],
    linkBorder: lightPalette.tertiary[600],
    sidebarBorder: lightPalette.tertiary[600],
    projectBorder: lightPalette.tertiary[600],
    navigationBorder: lightPalette.tertiary[600],
  },
  neutrals: {
    footerText: lightPalette.neutrals[300],

    aboutBackdrop: lightPalette.neutrals[200],
    imageBorder: lightPalette.neutrals[200],
    textSelectionColor: lightPalette.neutrals[100],
  },
  gradients: {
    heroBgBottom: lightPalette.gradients.hero[0],
    heroBgTop: lightPalette.gradients.hero[1],
    heroBgBtmRtCorner: lightPalette.gradients.hero[2],
    heroSectionBackdropLeft: lightPalette.gradients.heroSectionBackdrop[0],
    heroSectionBackdropRight: lightPalette.gradients.heroSectionBackdrop[1],
    footerBgBottom: lightPalette.gradients.footer[0],
    footerBgTop: lightPalette.gradients.footer[0],
  },
};
