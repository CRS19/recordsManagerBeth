import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HamburgerIcon = () => {
  return (
    <Svg width="18" height="12" viewBox="0 0 18 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
        fill="white"
      />
    </Svg>
  );
};
