import Colors, { ColorsType } from './colors';
import ThemeType, { ThemeSettingsType, ThemeTypeEnum, ValueMappingType } from './interfaces';
import backgrounds, { BackgroundsType } from './backgrounds';
import borders, { BordersType } from './borders';
import buttons, { ButtonsType } from './buttons';
import fonts, { FontsType } from './fonts';
import grid, { GridType } from './grid';
import icons, { IconsType } from './icons';
import inputs, { InputsType } from './inputs';
import margin, { MarginType } from './margin';
import padding, { PaddingType } from './padding';
import { DEFAULT_MODE, ModeEnum, ModeType } from './modes';
import { extractValueInMode } from './helpers';

interface CombinerType {
  colors: ColorsType;
  combine: (
    modeValues: (colors: ColorsType) => ValueMappingType | { [key: string]: ModeType },
    overrideThemeKey?: string,
  ) => ValueMappingType;
}

class Combiner implements CombinerType {
  public colors: ColorsType;
  private mode: ModeEnum;
  private theme: ThemeType;

  constructor(public themeSettings?: ThemeSettingsType) {
    const { mode, theme, type } = themeSettings || ({} as ThemeSettingsType);

    this.mode = mode || DEFAULT_MODE;

    if (ThemeTypeEnum.SYSTEM === type && typeof window !== 'undefined') {
      this.mode = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ModeEnum.DARK
        : ModeEnum.LIGHT;
    }

    this.theme = null;
    if (ThemeTypeEnum.CUSTOM === type) {
      this.theme = theme;
    }

    this.colors = {
      ...extractValueInMode(this.mode, Colors),
      ...(this.theme?.colors || {}),
    } as ColorsType;

    this.combine = this.combine.bind(this);
  }

  public combine(
    modeValues: (
      colors: ColorsType,
    ) =>
      | ValueMappingType
      | BackgroundsType
      | BordersType
      | ButtonsType
      | ColorsType
      | FontsType
      | GridType
      | IconsType
      | InputsType
      | MarginType
      | PaddingType
      | { [key: string]: ModeType },
    overrideThemeKey?: string,
  ): ValueMappingType {
    const values = extractValueInMode(this.mode, modeValues(this.colors));

    return {
      ...(values || {}),
      ...(this.theme?.[overrideThemeKey] || {}),
    };
  }
}

export default function buildTheme(themeSettings?: ThemeSettingsType): ThemeType {
  const combiner = new Combiner(themeSettings);

  const elements = Object.entries({
    backgrounds,
    borders,
    buttons,
    fonts,
    grid,
    icons,
    inputs,
    margin,
    padding,
  }).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: combiner.combine(value, key),
    }),
    {} as ThemeType,
  );

  return {
    ...elements,
    colors: combiner.colors,
  };
}
