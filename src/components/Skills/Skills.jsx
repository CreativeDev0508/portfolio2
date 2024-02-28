import { skillData } from '../../data/skillData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledSkillsSection,
  StyledSkillsContainer,
} from '../../styles/Skills/SkillsLayout/StyledSkillsSection';
import { StyledSkillsList } from '../../styles/Skills/Skill/StyledSkillsList';
import { parentTechnologyVariants } from '../../utils/animations';
import Skill from './Skill';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useGlobalContext } from '../../Context/Context';

const Skills = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSkillsSection pageTheme={theme}>
      <StyledSectionHeading lang={lang}>
        <h2 id='technology'> {t('technology-heading')}</h2>
      </StyledSectionHeading>
      <StyledSkillsContainer>
        <StyledSkillsList
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={parentTechnologyVariants}
        >
          {skillData.map(skill => {
            return <Skill key={skill.id} skill={skill} />;
          })}
        </StyledSkillsList>
      </StyledSkillsContainer>
    </StyledSkillsSection>
  );
};

export default Skills;
