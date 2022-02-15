export enum photoKeysEnum {
  ONE = '0',
  TWO = '1',
}

export const PhotoDirectory: Record<photoKeysEnum, string> = {
  [photoKeysEnum.ONE]: 'phothoOne',
  [photoKeysEnum.TWO]: 'phothoTwo',
};
