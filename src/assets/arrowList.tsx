import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ArrowListProps {
  rigth: boolean;
}

export const ArrowList = ({rigth}: ArrowListProps) => {
  return rigth ? (
    <Svg width="11" height="20" viewBox="0 0 11 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.94507 19.8181L0.129926 10.2404L10.2049 0.886735L9.94507 19.8181Z"
        fill="#333333"
      />
    </Svg>
  ) : (
    <Svg width="12" height="20" viewBox="0 0 12 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.00060077 19.7061L11.2998 10.3663L0.260453 0.774734L0.00060077 19.7061Z"
        fill="#333333"
      />
    </Svg>
  );
};
