import React from 'react';
import {Text, View} from 'react-native';
import {Image, Rect, Defs, Pattern, Use} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';
import {ITabIcon} from './TabReproductionIcon';

export const MainRecordIcon = ({isSelected, bottom = 0}: ITabIcon) => {
  return (
    <Svg
      width="54"
      height="52"
      viewBox="0 0 54 52"
      fill="none"
      style={{bottom: isSelected ? bottom - 5.67 : bottom - 2}}>
      <Rect width="54" height="51.75" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use
            xlinkHref="#image0"
            transform="translate(0 -0.0217391) scale(0.00195312)"
          />
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
