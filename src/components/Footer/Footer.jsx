import NavMenu from '../Navigation/NavMenu';
import { StyledFooter } from '../../styles/Footer/FooterLayout/StyledFooter';
import { StyledFooterBackground } from '../../styles/Footer/FooterLayout/StyledFooterBackground';
import { StyledFooterContent } from '../../styles/Footer/FooterContent/StyledFooterContent';
import { StyledFooterNavContainer } from '../../styles/Footer/FooterContent/StyledFooterNavContainer';
import {
  StyledContactInfoContainer,
  StyledContactInfo,
} from '../../styles/Footer/FooterContent/StyledContactInfoContainer';
import { StyledKoi1Container } from '../../styles/Footer/FooterSVGs/StyledKoi1Container';
import { StyledKoi2Container } from '../../styles/Footer/FooterSVGs/StyledKoi2Container';
import { StyledPlantContainer } from '../../styles/Footer/FooterSVGs/StyledPlantContainer';
import { StyledSeaweedContainer } from '../../styles/Footer/FooterSVGs/StyledSeaweedContainer';
import { StyledSeaweed2Container } from '../../styles/Footer/FooterSVGs/StyledSeawead2Container';
import { StyledBoulderContainer } from '../../styles/Footer/FooterSVGs/StyledBoulderContainer';
import FooterSVG from '/src/assets/images/illustrations/footer-background-silhouette-mountOG.svg';
import Koi1SVG from '/src/assets/images/illustrations/koi1V2.svg';
import Koi2SVG from '/src/assets/images/illustrations/koi2V2.svg';
import BoulderSVG from '/src/assets/images/illustrations/boulderV2.svg';
import SeaweedSVG from '/src/assets/images/illustrations/seaweed.svg';
import Seaweed2SVG from '/src/assets/images/illustrations/seaweed2.svg';
import PlantSVG from '/src/assets/images/illustrations/underwater-plantV2.svg';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Footer = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <StyledFooter>
      <StyledFooterBackground>
        <div>
          <FooterSVG />
        </div>
      </StyledFooterBackground>
      <StyledFooterContent>
        <StyledFooterNavContainer>
          <NavMenu />
          <StyledKoi1Container>
            <Koi1SVG />
          </StyledKoi1Container>
        </StyledFooterNavContainer>
        <StyledContactInfoContainer>
          <StyledKoi2Container>
            <Koi2SVG />
          </StyledKoi2Container>
          <StyledBoulderContainer lang={lang}>
            <BoulderSVG />
          </StyledBoulderContainer>
          <StyledContactInfo lang={lang}>
            <li> {t('footer-contact')}: mingw2816@gmail.com</li>
            <li>{t('footer-message')}</li>
          </StyledContactInfo>
        </StyledContactInfoContainer>
        <StyledPlantContainer>
          <PlantSVG />
        </StyledPlantContainer>
        <StyledSeaweedContainer>
          <SeaweedSVG />
        </StyledSeaweedContainer>
        <StyledSeaweed2Container>
          <Seaweed2SVG />
        </StyledSeaweed2Container>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
