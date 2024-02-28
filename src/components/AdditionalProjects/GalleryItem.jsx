import ExpandSVG from '/src/assets/icons/maximize-2.svg';
import GithubSVG from '/src/assets/icons/github.svg';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';
import { StyledGalleryCard } from '../../styles/AdditionalProjects/GalleryCard/StyledGalleryCard';
import { StyledCardHeader } from '../../styles/AdditionalProjects/GalleryCard/StyledCardHeader';
import { StyledThumbnail } from '../../styles/AdditionalProjects/GalleryCard/StyledThumbnail';
import { StyledOpenCardBackground } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenCardBackground';
import { StyledOpenCardDescription } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenCardDescription';
import { StyledOpenContainer } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenContainer';
import { StyledOpenTitleContainer } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenTitleContainer';
import { childProjectVariants } from '../../utils/animations';
import { useState } from 'react';
import { useRef } from 'react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const GalleryItem = ({ project, description }) => {
  const { t } = useTranslation();
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  // Prevents background scrolling while expanded card is visible
  const setNoScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  const setScroll = () => {
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      <StyledGalleryCard
        key={crypto.randomUUID()}
        variants={childProjectVariants}
        ///////////
        ref={card}
        isCardOpened={isCardOpened}
        layout
      >
        <StyledCardHeader isCardOpened={isCardOpened} layout='position'>
          <h4>{project.title}</h4>
          <button
            onClick={() => {
              setIsCardOpened(true);
              setNoScroll();
              if (!isCardOpened) {
                setCardDimensions({
                  width: card.current.clientWidth,
                  height: card.current.clientHeight,
                });
              }
            }}
          >
            {t('learn-more')}
            <ExpandSVG />
          </button>
        </StyledCardHeader>
        <StyledThumbnail layout='scale' isCardOpened={isCardOpened}>
          <picture>
            <source type='image/webp' srcSet={project.imageUrl} />
            <img src={project.imageUrl} alt={project.description} />
          </picture>
        </StyledThumbnail>
        {isCardOpened && (
          <StyledOpenContainer>
            <StyledOpenTitleContainer>
              <h3>{project.title}</h3>
              <ul>
                <li>
                  <a
                    href={project.repository}
                    aria-label='Github'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <GithubSVG />
                  </a>
                </li>
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
            </StyledOpenTitleContainer>
            <StyledOpenCardDescription
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* <p>{project.description}</p> */}
              <p>{description}</p>
              <ul>
                {project.technologies.map(tech => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
            </StyledOpenCardDescription>
          </StyledOpenContainer>
        )}
      </StyledGalleryCard>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <StyledOpenCardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setIsCardOpened(false);
              setScroll();
            }}
          />
        </Fragment>
      )}
    </>
  );
};

export default GalleryItem;
