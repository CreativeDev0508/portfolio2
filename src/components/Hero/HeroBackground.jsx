import TreeBranchSVG from '/src/assets/images/illustrations/blossom-branch-v2OG.svg';
import DarkTreeBranchSVG from '/src/assets/images/illustrations/blossom-branch-v2-dark.svg';
import SunSVG from '/src/assets/images/illustrations/rising-sun.svg';
import MoonSVG from '/src/assets/images/illustrations/rising-moonV2.svg';
import FujiSVG from '/src/assets/images/illustrations/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
import DarkFujiSVG from '/src/assets/images/illustrations/fuji-hokusai-dark-themeV2.svg';
import CloudSVG from '/src/assets/images/illustrations/kumo-grayV2.svg';

import LightLanternSVG from '/src/assets/images/illustrations/chouchinV3-light.svg';
import DarkLanternSVG from '/src/assets/images/illustrations/chouchinV3-dark.svg';
import DarkModeSVG from '/src/assets/icons/moon.svg';
import LightModeSVG from '/src/assets/icons/sun.svg';
import { StyledHeroBgClouds } from '../../styles/Hero/HeroBackground/StyledHeroBgClouds';
import { StyledFujiContainer } from '../../styles/Hero/HeroBackground/StyledFujiContainer';
import { StyledSunContainer } from '../../styles/Hero/HeroBackground/StyledSunContainer';
import { StyledTreeBranchContainer } from '../../styles/Hero/HeroBackground/StyledTreeBranchContainer';
import { StyledCloudContainer } from '../../styles/Hero/HeroBackground/StyledCloudContainer';
import { StyledLanternContainer } from '../../styles/Hero/HeroBackground/StyledLanternContainer';
import {
  fujiVariants,
  sunVariants,
  branchVariants,
  leftCloudVariants,
  rightCloudVariants,
  lanternVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';

const HeroBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  const { toggleTheme, theme } = useGlobalContext();
  return (
    <>
      <StyledHeroBgClouds />
      <StyledTreeBranchContainer
        id='home'
        initial='hidden'
        animate='visible'
        variants={branchVariants}
      >
        {theme === 'light' ? <TreeBranchSVG /> : <DarkTreeBranchSVG />}
        <StyledLanternContainer
          onClick={toggleTheme}
          animate='visible'
          variants={lanternVariants}
        >
          {theme === 'light' ? <LightLanternSVG /> : <DarkLanternSVG />}

          {theme === 'light' ? (
            <div>
              <DarkModeSVG />
            </div>
          ) : (
            <div>
              <LightModeSVG />
            </div>
          )}
        </StyledLanternContainer>
      </StyledTreeBranchContainer>
      <StyledFujiContainer
        initial='hidden'
        animate='visible'
        variants={fujiVariants}
      >
        {theme === 'light' ? <FujiSVG /> : <DarkFujiSVG />}
      </StyledFujiContainer>
      <StyledSunContainer
        initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
        animate='visible'
        variants={sunVariants}
        pageTheme={theme}
      >
        {theme === 'light' ? <SunSVG /> : <MoonSVG />}
        <StyledCloudContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate='visible'
          // animate='animate'
          variants={rightCloudVariants}
          pageTheme={theme}
        >
          <CloudSVG />
        </StyledCloudContainer>
        <StyledCloudContainer
          left
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate='visible'
          variants={leftCloudVariants}
          pageTheme={theme}
        >
          <CloudSVG />
        </StyledCloudContainer>
      </StyledSunContainer>
    </>
  );
};

export default HeroBackground;
