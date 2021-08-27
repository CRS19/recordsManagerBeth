import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IAddImageIcon {
  bottom: number;
  left: number;
}

export const AddImageIcon = ({bottom, left}: IAddImageIcon) => {
  return (
    <Svg
      width="36"
      height="43"
      viewBox="0 0 36 43"
      fill="none"
      style={{position: 'absolute', bottom, left}}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.26993 25.054L11.3414 27.5088L17.9855 19.4526L24.7286 27.4262L26.7696 24.946L17.955 14.5002L9.26993 25.054Z"
        fill="#F2F2F2"
      />
    </Svg>
  );
};
