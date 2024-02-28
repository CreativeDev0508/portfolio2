import {
  StyledMenuButton,
  StyledPath,
} from '../../styles/Navigation/NavigationButton/StyledMenuButton';

const Path = props => <StyledPath {...props} />;

export const MenuToggle = ({ toggle, isOpen }) => {
  const topBarProps = isOpen
    ? { d: 'M 3 16.5 L 17 2.5' }
    : { d: 'M 2 2.5 L 20 2.5' };

  const bottomBarProps = isOpen
    ? { d: 'M 3 2.5 L 17 16.346' }
    : { d: 'M 2 16.346 L 20 16.346' };

  const middleBarProps = isOpen ? null : { d: 'M 2 9.423 L 20 9.423' };
  return (
    <StyledMenuButton
      aria-label='Menu'
      aria-controls='mainnav'
      onClick={toggle}
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path {...topBarProps} />
        <Path {...middleBarProps} />
        <Path {...bottomBarProps} />
      </svg>
    </StyledMenuButton>
  );
};
