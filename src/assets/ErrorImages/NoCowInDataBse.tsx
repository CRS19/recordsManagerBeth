import React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

export const NoCowInDataBse = () => {
  return (
    <Svg width="370" height="300" viewBox="0 0 370 300" fill="none">
      <Rect width="370" height="300" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use
            xlinkHref="#image0_2572_14804"
            transform="scale(0.0027027 0.00333333)"
          />
        </Pattern>
        <Image
          id="image0_2572_14804"
          width="370"
          height="300"
          xlinkHref={
            'data:image/png;base64,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' as any
          }
        />
      </Defs>
    </Svg>
  );
};