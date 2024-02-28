import { easeInOut } from 'framer-motion';

// Ease and reducedMotion variables used in animations
const cubicBezierEase = [0.645, 0.045, 0.355, 1];
const noMotion = {
  opacity: 0.01,
  y: 0,
  x: 0,
};

// Navigation animations //

// StyledNavigationBg open and close
export const menubarVariants = {
  open: {
    clipPath: 'circle(30rem at 33.4rem 4.50rem)',
    transition: {
      stiffness: 20,
      ease: easeInOut,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(3rem at 33.4rem 4.50rem)',
    transition: {
      delay: 0.5,
      duration: 1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      ease: easeInOut,
    },
  },
};

// Menu parent / slide-up stagger
export const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// Menu child / slide-up opacity
export const menuItemVariants = {
  open: {
    y: 0,
    visibility: 'visible',
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    visibility: 'hidden',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// Hero animations //

// Hero StyledTextBox
export const parentHeroTextVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

//   Hero StyledTextBox children
export const childHeroTextVariants = {
  hidden: { opacity: 0.01, y: '2rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezierEase,
    },
  },
};

// Mt. Fuji
export const fujiVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.7,
      ease: cubicBezierEase,
    },
  },
};

// Sun
export const sunVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01, y: '20rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.6,
      ease: cubicBezierEase,
    },
  },
};

// Clouds around sun
export const leftCloudVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01, x: '-10rem', scaleX: '-1' },
  visible: {
    opacity: 1,
    x: 0,
    scaleX: '-1',
    transition: {
      delay: 1.8,
      duration: 1.8,
      ease: cubicBezierEase,
    },
  },
};

export const rightCloudVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01, x: '10rem' },
  visible: {
    opacity: 1,
    x: 0,
    // x: [0, -40],
    transition: {
      delay: 1.8,
      duration: 1.8,
      ease: cubicBezierEase,

      // repeat: Infinity,
      // repeatType: 'reverse',
      // type: 'tween',
    },
  },
};

// Tree Branch
export const branchVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.7,
      duration: 0.7,
      ease: cubicBezierEase,
    },
  },
};

// Japanese lantern
export const lanternVariants = {
  visible: {
    // rotateZ: [4.5, -4.5],
    // rotateZ: [1, -1],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 3,
    },
  },
};

// Sidebar animations //

// Icon hover
export const socialIconVariants = {
  hidden: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      type: 'tween',
      ease: cubicBezierEase,
    },
  },
  visible: {
    opacity: 1,
    y: '-.3rem',
    transition: {
      duration: 0.25,
      type: 'tween',
      ease: cubicBezierEase,
    },
  },
};

// List slide-in
export const socialListVariants = {
  noMotion: noMotion,
  hidden: {
    opacity: 0.1,
    x: '-5rem',
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 3,
      duration: 1.5,
      ease: cubicBezierEase,
    },
  },
};

// About animations //
export const picturesTextVariants = {
  noMotion: noMotion,
  hidden: {
    opacity: 0.01,
    y: '8rem',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: cubicBezierEase,
    },
  },
};

// Red temple
export const redTempleVariants = {
  hidden: {
    opacity: 0.01,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: cubicBezierEase,
    },
  },
};

// Technology animations //

// Parent skills ul
export const parentTechnologyVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// Child skills li
export const childTechnologyVariants = {
  hidden: { opacity: 0.01, y: '2rem' },
  visible: {
    opacity: 0.83,
    y: 0,
    transition: {
      duration: 0.4,
      ease: cubicBezierEase,
    },
  },
};

// Project animations //

// Project slide right
export const projectSlideRightVariants = {
  noMotion: noMotion,
  hidden: {
    opacity: 0,
    x: '-7rem',
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// Project slide left
export const projectSlideLeftVariants = {
  noMotion: noMotion,
  hidden: {
    opacity: 0,
    x: '7rem',
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// More Projects animations //

// See more button
export const buttonVariant = {
  noMotion: noMotion,
  hidden: {
    opacity: 0,
    x: '-60rem',
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
  exit: {
    x: '60rem',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Parent Project Gallery Section
export const parentProjectVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      // delay: 0.5,
      delayChildren: 0.45,
      // delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
  exit: {
    transition: {
      // duration: 2,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

// Child Project Gallery Cards
export const childProjectVariants = {
  hidden: { opacity: 0.01, y: '2rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezierEase,
    },
  },
  exit: {
    opacity: 0,
    y: '2rem',
    transition: {
      duration: 0.3,
      ease: cubicBezierEase,
    },
  },
};
