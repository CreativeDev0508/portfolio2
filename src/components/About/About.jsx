import RedTempleSVG from '/src/assets/images/illustrations/red-temple-winter.svg';
import { StyledRedTempleContainer } from '../../styles/About/AboutBackground/StyledRedTempleContainer';
import { StyledAboutSection } from '../../styles/About/AboutLayout/StyledAboutLayout';
import { StyledAboutTextContainer } from '../../styles/About/AboutText/StyledAboutTextContainer';
import {
  StyledPictureContainer,
  StyledPictureCollage,
  StyledLandscapeContainer,
  StyledPortraitContainer,
} from '../../styles/About/AboutPictures/StyledAboutPictures';
import {
  picturesTextVariants,
  redTempleVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useGlobalContext } from '../../Context/Context';

const About = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <StyledAboutSection pageTheme={theme}>
        <StyledSectionHeading lang={lang}>
          <h2 id='about' style={{fontFamily: "sans-serif"}}> {t('about-heading')}</h2>
        </StyledSectionHeading>

        <StyledPictureContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <StyledPictureCollage>
            <StyledLandscapeContainer>
              <picture>
                <source type='image/webp' srcSet='/rasters/shutterstock_1926639752.jpg' />
                <img
                  src='/rasters/shutterstock_1926639752.jpg'
                  alt='Landscape picture of qqbubu looking out at a vast mountain scenery'
                />
              </picture>
            </StyledLandscapeContainer>
            <StyledPortraitContainer>
              <picture>
                <source type='image/webp' srcSet='/rasters/myavator.jpg' />
                <img
                  src='/rasters/myavator.jpg'
                  alt='Portrait of qqbubu amidst greenery'
                />
              </picture>
            </StyledPortraitContainer>
          </StyledPictureCollage>
        </StyledPictureContainer>

        <StyledAboutTextContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <p>{t('about-text-top')}</p>
          <p>{t('about-text-bottom')}</p>
        </StyledAboutTextContainer>
        <StyledRedTempleContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={redTempleVariants}
        >
          <RedTempleSVG />
        </StyledRedTempleContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;
