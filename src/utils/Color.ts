import Color from 'color';

export interface IColor {
  default: string;
  dark?: string;
  light?: string;
}

export interface IColorPalette {
  [key: string]: string | IColor;
}

export const getColorObject = (
  color: string,
  { darkenNum, lightenNum }: { darkenNum: number; lightenNum: number }
): IColor => {
  let { lighten, darken } = Color(color);

  return {
    default: color,
    dark: lighten(lightenNum).hex(),
    light: darken(darkenNum).hex(),
  };
};

export { Color };
