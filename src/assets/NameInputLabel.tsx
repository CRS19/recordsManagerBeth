import React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

export const NameInputLabel = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use xlinkHref="#image0" transform="scale(0.00195312)" />
        </Pattern>
        <Image
          id="image0"
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