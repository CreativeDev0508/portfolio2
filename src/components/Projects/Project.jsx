import { StyledProjectItem } from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import {
  StyledProjectImageContainer,
  StyledProjectImage,
} from '../../styles/Projects/ProjectImage/StyledProjectImage';
import {
  StyledProjectContent,
  StyledProjectContentBorder,
} from '../../styles/Projects/ProjectContent/StyledProjectContent';
import { StyledProjectDescriptionContainer } from '../../styles/Projects/ProjectContent/StyledProjectDescriptionContainer';
import GithubSVG from '/src/assets/icons/github.svg';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';
import {
  projectSlideLeftVariants,
  projectSlideRightVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useGlobalContext } from '../../Context/Context';

const Project = ({ project, description, alternate }) => {
  const { t } = useTranslation();
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledProjectItem
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      whileInView='visible'
      // 'amount' = when about half the component is visible animate
      viewport={{ once: true, amount: 0.4 }}
      variants={
        !alternate ? projectSlideLeftVariants : projectSlideRightVariants
      }
      alternate={alternate}
    >
      <StyledProjectImage pageTheme={theme} alternate={alternate}>
        <StyledProjectImageContainer>
          <picture>
            <source
              srcSet={project.imageUrl}
              type='image/webp'
              media='(min-width: 768px)'
            />
            <source
              srcSet={project.mobileUrl}
              type='image/webp'
              media='(max-width: 768px)'
            />
            <img src={project.imageUrl} alt={project.description} />
          </picture>
        </StyledProjectImageContainer>
      </StyledProjectImage>
      <StyledProjectContent alternate={alternate}>
        <StyledProjectContentBorder alternate={alternate}>
          <span>{t('featured-tag')}</span>
          <h3>{project.title}</h3>
          <StyledProjectDescriptionContainer>
            {/* <p>{project.description}</p> */}
            <p>{description}</p>
          </StyledProjectDescriptionContainer>
          <ul>
            {project.technologies.map(tech => {
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
          <div>
            <ul>
              {/* <li>
                <a
                  href={project.repository}
                  aria-label='Github'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <GithubSVG />
                </a>
              </li> */}
              <li>
                <a
                  href={project.livelink}
                  aria-label='Live website'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <ExternalLinkSVG />
                </a>
              </li>
            </ul>
          </div>
        </StyledProjectContentBorder>
      </StyledProjectContent>
    </StyledProjectItem>
  );
};

export default Project;
