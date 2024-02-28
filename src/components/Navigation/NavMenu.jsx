import { StyledMenuList } from '../../styles/Navigation/NavigationMenu/StyledMenuList';
import { MenuItem } from './MenuItem';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { menuVariants } from '../../utils/animations';

const NavMenu = ({ toggle }) => {
  const { t } = useTranslation();
  // use useMemo to memoize the nav sections array and avoid generating new keys on each render - this is necessary for the framer motion variants to work because they require unique, consistent keys
  const navSections = useMemo(
    () =>
      t('navigation', { returnObjects: true }).map(section => ({
        id: crypto.randomUUID(),
        sectionHref: section.href,
        sectionTitle: section.menuTitle,
      })),
    [t] // add t as a dependency
  );
  return (
    <StyledMenuList
      variants={menuVariants}
      // role="menubar"
      // aria-label="menubar navigation"
    >
      {/* Mapping over language JSON files here  */}
      {navSections.map(section => {
        return (
          <MenuItem
            key={section.id} // add the key prop here
            sectionHref={section.sectionHref}
            sectionTitle={section.sectionTitle}
            toggle={toggle}
          />
        );
      })}
    </StyledMenuList>
  );
};

export default NavMenu;
