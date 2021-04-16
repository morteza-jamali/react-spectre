// Core features
const rtl: boolean = false;

// Core colors
const primaryColor: string = '#5755d9';
/*$primary-color-dark: darken($primary-color, 3%) !default;
$primary-color-light: lighten($primary-color, 3%) !default;
$secondary-color: lighten($primary-color, 37.5%) !default;
$secondary-color-dark: darken($secondary-color, 3%) !default;
$secondary-color-light: lighten($secondary-color, 3%) !default;*/

// Gray colors
const darkColor: string = '#303742';
const lightColor: string = '#fff';
/*$gray-color: lighten($dark-color, 55%) !default;
$gray-color-dark: darken($gray-color, 30%) !default;
$gray-color-light: lighten($gray-color, 20%) !default;

$border-color: lighten($dark-color, 65%) !default;
$border-color-dark: darken($border-color, 10%) !default;
$border-color-light: lighten($border-color, 8%) !default;
$bg-color: lighten($dark-color, 75%) !default;
$bg-color-dark: darken($bg-color, 3%) !default;
$bg-color-light: $light-color !default;*/

// Control colors
const successColor: string = '#32b643';
const warningColor: string = '#ffb700';
const errorColor: string = '#e85600';

// Other colors
const codeColor: string = '#d73e48';
const highlightColor: string = '#ffe9b3';
/*$body-bg: $bg-color-light !default;
$body-font-color: lighten($dark-color, 5%) !default;
$link-color: $primary-color !default;
$link-color-dark: darken($link-color, 10%) !default;
$link-color-light: lighten($link-color, 10%) !default;*/

// Fonts
// Credit: https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
const baseFontFamily: string =
  '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto';
const monoFontFamily: string =
  '"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace';
const fallbackFontFamily: string = '"Helvetica Neue", sans-serif';
/*$cjk-zh-hans-font-family: $base-font-family, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", $fallback-font-family !default;
$cjk-zh-hant-font-family: $base-font-family, "PingFang TC", "Hiragino Sans CNS", "Microsoft JhengHei", $fallback-font-family !default;
$cjk-jp-font-family: $base-font-family, "Hiragino Sans", "Hiragino Kaku Gothic Pro", "Yu Gothic", YuGothic, Meiryo, $fallback-font-family !default;
$cjk-ko-font-family: $base-font-family, "Malgun Gothic", $fallback-font-family !default;
$body-font-family: $base-font-family, $fallback-font-family !default;*/

// Unit sizes
export const unit = (size: number): string =>
  `${
    [0.05, 0.1, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.4, 3.2][size]
  }rem`;

// Font sizes
const htmlFontSize: string = '20px';
const htmlLineHeight: string = '1.5';
const lineHeight: string = '1.2rem';

export const fontSize = (size: 'sm' | 'md' | 'lg' = 'md') =>
  `${
    {
      sm: 0.7,
      md: 0.8,
      lg: 0.9,
    }[size]
  }rem`;

// Sizes
const layoutSpacing: string = unit(4);
const layoutSpacingSm: string = unit(3);
const layoutSpacingLg: string = unit(6);
const borderRadius: string = unit(0);
const borderWidth: string = unit(1);
const borderWidthLg: string = unit(0);
const controlSize: string = unit(11);
const controlSizeSm: string = unit(9);
const controlSizeLg: string = unit(12);
const controlPaddingX: string = unit(4);
/*$control-padding-x-sm: $unit-2 * .75;
$control-padding-x-lg: $unit-2 * 1.5 !default;
$control-padding-y: ($control-size - $line-height) / 2 - $border-width !default;
$control-padding-y-sm: ($control-size-sm - $line-height) / 2 - $border-width !default;
$control-padding-y-lg: ($control-size-lg - $line-height) / 2 - $border-width !default;*/
const controlIconSize: string = '.8rem';

const controlWidth = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') =>
  `${
    {
      xs: 180,
      sm: 320,
      md: 640,
      lg: 960,
      xl: 1280,
    }[size]
  }px`;

// Responsive breakpoints
export const size = (name: string): string =>
  `${
    {
      xs: 480,
      sm: 600,
      md: 840,
      lg: 960,
      xl: 1280,
      '2x': 1440,
    }[name]
  }px`;

//$responsive-breakpoint: $size-xs !default;

// Z-index
export const zIndex: number[] = [1, 100, 200, 300, 400];
