import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledTextBox = styled(motion.div)`
  display: block;
  position: relative;
  z-index: 1500;

  @media ${props => props.theme.bp.desktopXS} {
    grid-row: 1 / 2;
    max-width: 40rem;
    align-self: center !important;
  }

  @media ${props => props.theme.bp.mobileM} {
    text-align: center;
  }

  & h1 {
    font-size: 3.8rem;
    font-weight: 600;
    display: block;
    line-height: 1.4;
    color: ${props => props.theme.primary.h1};
    font-family: ${props => props.theme.fonts.primary};

    /* Change the font to a different Japanese font when the language is not English - lang prop is passed from parent StyledTextBox (mandatory) and its value comes from i18next in Hero.jsx */
    & span:not(:last-child) {
      font-family: ${props =>
        props.lang === 'en'
          ? props.theme.fonts.secondary
          : props.theme.fonts.tertiary};
      letter-spacing: ${props => (props.lang === 'ja' ? '-0.6rem' : '0')};

      font-size: 4rem;
      font-weight: 600;
      @media ${props => props.theme.bp.desktopL} {
        font-size: 4.4rem;
      }
      @media ${props => props.theme.bp.desktopM} {
        font-size: 4rem;
      }
      @media ${props => props.theme.bp.desktopXS} {
        font-size: 3rem;
      }
      @media ${props => props.theme.bp.mobileL} {
        font-size: 4.2rem;
      }
      @media ${props => props.theme.bp.mobileM} {
        font-size: ${props => (props.lang === 'en' ? '4.2rem' : '3.4rem')};
        line-height: ${props => (props.lang === 'en' ? '3.2rem' : '2.4rem')};
      }
    }

    @media ${props => props.theme.bp.desktopL} {
      font-size: 3.4rem;

      line-height: 1.2;
    }
    @media ${props => props.theme.bp.desktopM} {
      font-size: 3rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      font-size: 2.2rem;
    }
    @media ${props => props.theme.bp.mobileL} {
      font-size: 3.2rem;
    }
    @media ${props => props.theme.bp.mobileM} {
      font-size: ${props => (props.lang === 'en' ? '3.2rem' : '2.4rem')};
      line-height: ${props => (props.lang === 'en' ? '1.2' : '1.6')};
    }
  }

  h2 {
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 0.5rem;
    line-height: 1.2;
    font-size: 3.8rem;
    font-size: 3.2rem;
    @media ${props => props.theme.bp.desktopL} {
      font-size: 2.6rem;
      margin-top: 0.3rem;
    }
    @media ${props => props.theme.bp.desktopM} {
      font-size: 2.4rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      font-size: 1.8rem;
    }
    @media ${props => props.theme.bp.mobileL} {
      font-size: 2.2rem;
      line-height: 1.2;
    }
    @media ${props => props.theme.bp.mobileM} {
      font-size: ${props => (props.lang === 'en' ? '2.2rem' : '2.2rem')};
      letter-spacing: ${props => (props.lang === 'en' ? 'null' : '0.26rem')};
      line-height: ${props => (props.lang === 'en' ? '1.2' : '1.5')};
    }
  }

  & p {
    margin-top: 2rem;
    @media ${props => props.theme.bp.desktopL} {
      font-size: 1.4rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      font-size: 1.3rem;
    }
    @media ${props => props.theme.bp.mobileL} {
      display: none;
    }
  }

  & div:last-child {
    display: flex;
    gap: 2rem;
    align-items: center;
    height: fit-content;
    margin-top: 3.6rem;
    @media ${props => props.theme.bp.desktopL} {
      margin-top: 3rem;
    }

    @media ${props => props.theme.bp.tabletS} {
      margin-top: 1.5rem;
    }

    @media ${props => props.theme.bp.mobileL} {
      margin-top: 2rem;
    }

    @media ${props => props.theme.bp.mobileM} {
      justify-content: space-between;
    }
  }

  & a {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    position: relative;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1.45rem 2.45rem;
    letter-spacing: 0.1rem;
    border: 0.16rem solid ${props => props.theme.tertiary.linkBorder};
    line-height: 1;
    font-size: 1.6rem;
    text-transform: capitalize;

    ${props =>
      props.pageTheme === 'dark' &&
      css`
        border: 0.16rem solid #fff;
      `};

    @media ${props => props.theme.bp.desktopL} {
      font-size: 1.5rem;
    }

    @media ${props => props.theme.bp.desktopXS} {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
    @media ${props => props.theme.bp.tabletS} {
      padding: 0.8rem 1.8rem;
    }
  }
`;

export default StyledTextBox;
