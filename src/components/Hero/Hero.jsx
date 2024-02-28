import HeroBackground from './HeroBackground';
import {
  StyledHeroContainer,
  StyledHeroSection,
  StyledHeroSectionBackdrop,
} from '../../styles/Hero/HeroLayout/StyledHeroLayout';
import StyledTextBox from '../../styles/Hero/HeroText/StyledTextBox';
import {
  childHeroTextVariants,
  parentHeroTextVariants,
} from '../../utils/animations';
import GlobeSVG from '/src/assets/icons/globe.svg';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { StyledLanguageButton } from '../../styles/Hero/HeroText/StyledLanguageButton';
import i18n from '../../i18n';
import { useGlobalContext } from '../../Context/Context';

const Hero = () => {
  const [language, setLanguage] = useState('ja');
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    i18next.changeLanguage('ja');

  }, [])

  const toggleLanguageHandler = () => {
    if (lang === 'ja') {
      i18next.changeLanguage('en');
      setLanguage('en');
    } else {
      i18next.changeLanguage('ja');
      setLanguage('ja');
    }
  };

  return (
    <>
      <StyledHeroSectionBackdrop>
        <StyledHeroSection>
          <HeroBackground />
          <StyledHeroContainer>
            {/* This motion.div is necessary for a smooth transition between language button clicks */}
            <motion.div
              key={lang} // add a key prop with the language value
            >
              <StyledTextBox
                pageTheme={theme}
                lang={lang}
                initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
                animate='visible'
                variants={parentHeroTextVariants}
              >
                <motion.div variants={childHeroTextVariants}>
                  <h1>
                    {t('greetings')} <span style={{fontFamily: 'serif'}} lang={lang}>{t('name')}</span>
                    <span>{t('name-end')}</span>
                  </h1>
                </motion.div>

                <motion.div variants={childHeroTextVariants}>
                  <h2 style={{fontFamily: "Noto Sans JP, sans-serif"}}> {t('sub-heading')}</h2>
                </motion.div>
                <motion.div variants={childHeroTextVariants}>
                  <p style={{fontFamily: "Noto Sans JP, sans-serif"}}>{t('more-info')}</p>
                </motion.div>
                <motion.div variants={childHeroTextVariants}>
                  {/* <motion.a
                    pageTheme={theme}
                    whileTap={
                      shouldReduceMotion ? { scale: 1 } : { scale: 0.97 }
                    }
                    href='/Nick-Mullenmeister-Resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('resume-btn')}
                  </motion.a> */}

                  {/* <StyledLanguageButton
                    whileTap={
                      shouldReduceMotion ? { scale: 1 } : { scale: 0.97 }
                    }
                    aria-label='Change language'
                    onClick={toggleLanguageHandler}
                  >
                    <GlobeSVG />
                    <span>{lang === 'en' ? '日本語' : 'English'}</span>
                  </StyledLanguageButton> */}
                </motion.div>
              </StyledTextBox>
            </motion.div>
          </StyledHeroContainer>
        </StyledHeroSection>
      </StyledHeroSectionBackdrop>
    </>
  );
};

export default Hero;
