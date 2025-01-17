// @ts-ignore
import Cookies from 'js-cookie';
import ServerCookie from 'next-cookies';

import ThemeType, { ThemeSettingsType } from './interfaces';
import buildTheme from './build';
import { SHARED_OPTS } from '@api/utils/token';

const KEY: 'theme_settings' = 'theme_settings';

export function getThemeSettings(ctx?: any): ThemeSettingsType {
  let themeSettings: ThemeSettingsType | string | undefined | null = null;

  if (ctx) {
    const cookie = ServerCookie(ctx);
    if (typeof cookie !== 'undefined') {
      themeSettings = cookie[KEY];
    }
  } else {
    themeSettings = Cookies.get(KEY, SHARED_OPTS);
  }

  if (typeof themeSettings === 'string') {
    themeSettings = JSON.parse(decodeURIComponent(themeSettings));
  }

  if (
    typeof themeSettings !== 'undefined' &&
    themeSettings !== null &&
    typeof themeSettings !== 'string'
  ) {
    return themeSettings;
  }

  return (themeSettings || {}) as ThemeSettingsType;
}

export function getTheme(opts?: { theme?: ThemeSettingsType; ctx?: any }): ThemeType {
  return buildTheme(opts?.theme || getThemeSettings(opts?.ctx));
}

export function setThemeSettings(
  themeSettings: ThemeSettingsType | ((prev: ThemeSettingsType) => ThemeSettingsType),
) {
  const theme = JSON.stringify(
    typeof themeSettings === 'function' ? themeSettings(getThemeSettings()) : themeSettings,
  );

  // @ts-ignore
  Cookies.set(KEY, theme, { ...SHARED_OPTS, expires: 9999 });
}
