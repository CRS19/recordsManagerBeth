import React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

export const FolderDescarte = () => {
  return (
    <Svg width="139" height="139" viewBox="0 0 139 139" fill="none">
      <Rect width="139" height="139" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use xlinkHref="#image0_212_3652" transform="scale(0.00195312)" />
        </Pattern>
        <Image
          id="image0_212_3652"
          width="512"
          height="512"
          xlinkHref={
            'data:image/png;base64,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' as any
          }
        />
      </Defs>
    </Svg>
  );
};