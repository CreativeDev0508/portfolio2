import i18n from '../../i18n';
import { menuItemVariants } from '../../utils/animations';
import { StyledMenuItem } from '../../styles/Navigation/NavigationMenu/StyledMenuItem';

export const MenuItem = ({ sectionTitle, sectionHref, toggle }) => {
  const lang = i18n.resolvedLanguage;
  return (
    <>
      <StyledMenuItem
        lang={lang}
        variants={menuItemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        tabIndex={-1}
      >
        <a href={sectionHref} onClick={toggle} lang={lang}>
          {sectionTitle}
        </a>
      </StyledMenuItem>
    </>
  );
};
