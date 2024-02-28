import { useCycle } from 'framer-motion';
import { useRef } from 'react';
import { MenuToggle } from './MenuToggle';
import NavMenu from './NavMenu';
import { useDimensions } from './use-dimensions';
import { StyledNavigationContainer } from '../../styles/Navigation/NavigationLayout/StyledNavigationContainer';
import { StyledNavigationBg } from '../../styles/Navigation/NavigationLayout/StyledNavigationBg';
import { menubarVariants } from '../../utils/animations';

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <header>
      <StyledNavigationContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        id='mainnav'
        aria-labelledby='mainnav'
      >
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
        <StyledNavigationBg aria-hidden='true' variants={menubarVariants} />
        <NavMenu toggle={() => toggleOpen()} />
      </StyledNavigationContainer>
    </header>
  );
};

export default Navigation;
