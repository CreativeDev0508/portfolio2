import styled from 'styled-components';
import { motion } from 'framer-motion';

// Outermost container
export const StyledPictureContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* justify-content: flex-end; */
  align-items: center;
  position: relative;
`;

// Wrapper for both pictures w/common svg styles
export const StyledPictureCollage = styled.div`
  position: relative;
  margin-left: 5rem;
  & img {
    height: fit-content;
    width: fit-content;
    box-shadow: 0.4rem 0.8rem 2.2rem -0.9rem rgba(0, 0, 0, 0.75);
    outline: 0.8rem solid ${props => props.theme.neutrals.imageBorder};
    @media ${props => props.theme.bp.desktopL} {
      outline: 0.6rem solid ${props => props.theme.neutrals.imageBorder};
    }
  }
  @media ${props => props.theme.bp.desktopXS} {
    margin-left: 0;
  }
`;

// Wrapper for landscape/larger picture svg
export const StyledLandscapeContainer = styled.div`
  width: 45rem;
  height: auto;
  & img {
    object-fit: cover;
    /* Consider for something a bit more unique */
    /* border-radius: 50%; */
  }
  @media ${props => props.theme.bp.desktopL} {
    width: 40rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    width: 50rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    width: 40rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    display: none;
  }
`;

// Wrapper for portrait/smaller picture svg
export const StyledPortraitContainer = styled.div`
  width: 17rem;
  height: auto;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  @media ${props => props.theme.bp.desktopL} {
    width: 13.5rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    height: 17rem;
    width: 17rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    height: 15rem;
    width: 15rem;
  }

  @media ${props => props.theme.bp.mobileL} {
    position: relative;
    transform: none;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & img {
    height: 100%;
    width: 100%;
    height: 17rem;
    width: 17rem;
    border-radius: 50%;
    object-fit: cover;
    @media ${props => props.theme.bp.desktopL} {
      height: 13.5rem;
      width: 13.5rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      height: 17rem;
      width: 17rem;
    }
    @media ${props => props.theme.bp.tabletS} {
      height: 15rem;
      width: 15rem;
    }
    @media ${props => props.theme.bp.mobileL} {
      border-radius: 0;
      width: 20rem;
      height: 20rem;
      position: relative;
    }
  }
`;
