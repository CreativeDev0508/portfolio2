import { createGlobalStyle } from 'styled-components';
import GazeNozarashi from '../../fonts/GazeNozarashi/GazeNozarashi.ttf';
const GlobalStyles = createGlobalStyle`

/* Secondary Font */
@font-face {
  font-family: 'GazeNozarashi';
  src: local('GazeNozarashi'), url(${GazeNozarashi}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }


    html {
        box-sizing: border-box;
        font-size: 62.5%;
        scroll-behavior: smooth;
        /* color-scheme: dark light; */

        @media ${props => props.theme.bp.desktopL} {
        font-size: 58%
        }

        @media ${props => props.theme.bp.desktopM} {
        font-size: 56.25%;
        }

        @media ${props => props.theme.bp.desktopXS} {
        font-size: 50%;
        }
}

    ::selection {
    background-color: ${props => props.theme.tertiary.textSelection};
    color: ${props => props.theme.neutrals.textSelectionColor};
}

/* Default focus styles & keyboard focus */
    :focus {
        outline: 0.2rem dashed ${props => props.theme.tertiary.focusOutline};
        outline-offset: 0.3rem;
     }

     :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0rem;
  }

    :focus-visible {
    outline: .2rem dashed ${props => props.theme.tertiary.focusOutline};
    outline-offset: .3rem;
  }

  /* Scrollbar styles */
  /* TODO */
  html {
    /* Preserve scrollbar space after hiding it in ProjectGallery to prevent layout issue */
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.primary.scrollbarTrack} ${props =>
  props.theme.primary.scrollbarThumb};
  }
  ::-webkit-scrollbar {
    width: 1.2rem;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.primary.scrollbarTrack};
    background: transparent;
}
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.primary.scrollbarThumb};
    background: linear-gradient(
    to top,
    ${props => props.theme.primary.scrollbarThumb},
    ${props => props.theme.tertiary.scrollThumbHover}
  );
    border: .4rem solid transparent;
    border-radius: 0.8rem;
    /* background-clip: padding-box; */

    &:hover {
      background-color: ${({ theme }) => theme.scrollThumbHover};
    }
  }



    body {
      /* Use with 62.5% font size on html */
        font-size: 1.6rem;
        min-height: 100vh;
        line-height: 1.6;
        font-weight: 300; 
        background-color: ${props => props.theme.primary.body};
        
        }

    main {
        background-color: ${props => props.theme.primary.main};
        }

    img, picture, svg, video {
        display: block;
        max-width: 100%;
    }

    button {
        display: inline-block;
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.primary.link};
        outline-color: transparent;
        border: none;
        text-decoration: none;
        cursor: pointer;
        text-transform: capitalize;
        font-weight: 600;
        line-height: 1;
        font-size: 1.6rem;
        border-radius: 0.4rem;
        letter-spacing: 0.1rem;
        &:hover {
          color: ${props => props.theme.primary.linkHover};
          transition: color 0.25s;
    }
 
    }

    h2 {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 5rem;
      color: ${props => props.theme.primary.h2};

      @media ${props => props.theme.bp.mobileL} {
      font-size: 4rem;
    }
    }

    h3 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 2.4rem;
      font-weight: 300;
      color: ${props => props.theme.primary.h3};
    }

    h4 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.8rem;
      font-weight: 600;
      color: ${props => props.theme.primary.h4};
    }

    p {
      font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.primary.p};
    }

    li {
      list-style-type: none;
      color: ${props => props.theme.primary.li};
    }

    a:link, a:visited {
      display: inline-block;
      text-decoration: none;
      color: ${props => props.theme.primary.link};
      position: relative;
      text-decoration-skip-ink: auto;
    }

    a:hover, a:active {
      color: ${props => props.theme.primary.linkHover};
      transition: color 0.25s;
    }

    @media screen and (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
