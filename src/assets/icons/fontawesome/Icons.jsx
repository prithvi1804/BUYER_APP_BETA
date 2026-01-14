/// <reference types="vite-plugin-svgr/client" />

// Import SVGs as React components
// The '?react' suffix is used by vite-plugin-svgr to transform the SVG into a component
import HouseIcon from './house.svg?react';
import UserIcon from './user.svg?react';

// Export them as named components
export {
  HouseIcon,
  UserIcon,
};

// You can add more icons here by following the same pattern:
// import AnotherIcon from './another.svg?react';
// export { AnotherIcon };
