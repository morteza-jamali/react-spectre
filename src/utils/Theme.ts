import { getColorObject, IColor, IColorPalette } from './Color';

export interface ITheme {
  colors?: IColorPalette;
  rtl?: boolean;
}

export class Theme {
  constructor(private theme: ITheme) {
    this.setColors();
  }

  setColors = () => {
    if (this.theme.colors) {
      Object.keys(this.theme.colors as Object).forEach(color => {
        let value: string | IColor = (this.theme.colors as IColorPalette)[
          color
        ];

        if (typeof value !== 'string') {
          value = value.default;
        }

        (this.theme.colors as IColorPalette)[color] = getColorObject(value, {
          darkenNum: 0.3,
          lightenNum: 0.3,
        });
      });
    }
  };
}
