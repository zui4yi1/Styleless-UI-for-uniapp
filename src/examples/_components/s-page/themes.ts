export type IThemeType = 'default' | 'white' | 'primary' | 'warnning';

export type ITheme = {
  [t in IThemeType]: {
    bg: IColor;
    navBarBg: IColor;
    iconColor: IColor;
    iconSize?: number;
    navBarColor: IColor;
  };
};

const themes: ITheme = {
  default: {
    bg: 'white',
    navBarBg: 'white',
    iconColor: 'content',
    iconSize: 40,
    navBarColor: 'content',
  },
  primary: {
    bg: 'primary-hover',
    navBarBg: 'primary',
    iconColor: 'white',
    iconSize: 40,
    navBarColor: 'white',
  },
  warnning: {
    bg: 'warning-hover',
    navBarBg: 'warning',
    iconColor: 'white',
    iconSize: 40,
    navBarColor: 'white',
  },
} as ITheme;

export default themes;
