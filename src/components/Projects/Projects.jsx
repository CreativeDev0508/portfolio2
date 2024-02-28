import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from './Project';
import { useGlobalContext } from '../../Context/Context';
import { StyledProjectButton } from '../../styles/UI/StyledProjectsButton';
import { buttonVariant } from '../../utils/animations';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONSTANTS } from '../../constants';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Projects = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();
  const { showMoreProjects, toggleMoreProjects } = useGlobalContext();
  return (
    <StyledProjectsSection>
      <StyledSectionHeading lang={lang}>
        <h2 id='projects'> {t('projects-heading')}</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {projectData
          .slice(
            CONSTANTS.FEATURED_PROJECT_START,
            CONSTANTS.FEATURED_PROJECT_CUTOFF
          )
          .map((project, index) => {
            return (
              <Project
                key={project.id}
                project={project}
                description={t(`projects.${index}.description`)}
                alternate={index % 2 !== 0}
              />
            );
          })}
      </StyledProjectsList>
      <AnimatePresence>
        {!showMoreProjects && (
          <StyledProjectButton
            variants={buttonVariant}
            initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
            animate='visible'
            exit={shouldReduceMotion ? 'noMotion' : 'exit'}
            onClick={() => toggleMoreProjects()}
          >
            {t('show-more-btn')}
          </StyledProjectButton>
        )}
      </AnimatePresence>
    </StyledProjectsSection>
  );
};

export default Projects;
