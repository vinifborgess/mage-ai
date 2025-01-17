import { ModeEnum, ModeType } from './modes';
import { blue as blueGradient } from './gradients';

interface InteractiveElementStateColorsType {
  default: string;
  hover: string;
}

export interface BackgroundsType {
  body: string;
  button: {
    base: InteractiveElementStateColorsType;
    primary: InteractiveElementStateColorsType;
    secondary: InteractiveElementStateColorsType;
  };
  input: {
    base: {
      active: ModeType;
      default: ModeType;
      focus: ModeType;
      hover: ModeType;
    };
  };
}

export interface TypographyColorsType {
  text: {
    base: string;
    blue: string;
    inverted: string;
  };
}

export interface BordersType {
  base: {
    default: ModeType;
    hover: ModeType;
  };
  button: {
    base: InteractiveElementStateColorsType;
    basic: InteractiveElementStateColorsType;
    primary: InteractiveElementStateColorsType;
    secondary: InteractiveElementStateColorsType;
  };
  input: {
    base: {
      active: ModeType;
      default: ModeType;
      focus: ModeType;
      hover: ModeType;
    };
  };
}

interface ColorsDerivedType {
  backgrounds: BackgroundsType;
  borders: BordersType;
  icons: {
    base: string;
    inverted: string;
  };
  placeholder: {
    input: {
      base: string;
    };
  };
  statuses: {
    success: ModeType;
    successHi: ModeType;
  };
  typography: TypographyColorsType;
}

export interface ColorsType extends ColorsDerivedType {
  black: string;
  blackFixed: string;
  blue: string;
  blueLo: string;
  blueMd: string;
  blueMuted: string;
  blueHi: string;
  blueText: string;
  glow: string;
  glow2: string;
  gray: string;
  grayLo: string;
  grayMd: string;
  grayHi: string;
  green: string;
  greenLo: string;
  greenMd: string;
  greenHi: string;
  pink: string;
  pinkLo: string;
  pinkMd: string;
  pinkHi: string;
  purple: string;
  purpleLo: string;
  purpleMd: string;
  purpleHi: string;
  red: string;
  redLo: string;
  redMd: string;
  redHi: string;
  yellow: string;
  yellowLo: string;
  yellowMd: string;
  yellowHi: string;
  white: string;
  whiteFixed: string;
  whiteLo: string;
  whiteMd: string;
  whiteHi: string;
}

const Colors = {
  black: {
    [ModeEnum.DARK]: '#000000',
    [ModeEnum.LIGHT]: '#000000',
    [ModeEnum.MODE3]: '#000000',
  },
  blackFixed: {
    [ModeEnum.DARK]: '#000000',
    [ModeEnum.LIGHT]: '#000000',
    [ModeEnum.MODE3]: '#000000',
  },
  blackLo: {
    [ModeEnum.DARK]: '#00000033',
    [ModeEnum.LIGHT]: '#00000033',
    [ModeEnum.MODE3]: '#00000033',
  },
  blackMd: {
    [ModeEnum.DARK]: '#000000B3',
    [ModeEnum.LIGHT]: '#000000B3',
    [ModeEnum.MODE3]: '#000000B3',
  },
  blackHi: {
    [ModeEnum.DARK]: '#000000D9',
    [ModeEnum.LIGHT]: '#000000D9',
    [ModeEnum.MODE3]: '#000000D9',
  },
  blue: {
    [ModeEnum.DARK]: '#0500FF',
    [ModeEnum.LIGHT]: '#0500FF',
    [ModeEnum.MODE3]: '#4776FF',
  },
  blueHi: {
    [ModeEnum.DARK]: '#0500FFD9',
    [ModeEnum.LIGHT]: '#0500FFD9',
    [ModeEnum.MODE3]: '#4776FFD9',
  },
  blueLo: {
    [ModeEnum.DARK]: '#0500FF33',
    [ModeEnum.LIGHT]: '#0500FF33',
    [ModeEnum.MODE3]: '#4776FF33',
  },
  blueMd: {
    [ModeEnum.DARK]: '#0500FFB3',
    [ModeEnum.LIGHT]: '#0500FFB3',
    [ModeEnum.MODE3]: '#4776FFB3',
  },
  blueMuted: {
    [ModeEnum.DARK]: '#5AA6FF',
    [ModeEnum.LIGHT]: '#5AA6FF',
    [ModeEnum.MODE3]: '#5AA6FF',
  },
  blueText: {
    [ModeEnum.DARK]: '#1F6BFF',
    [ModeEnum.LIGHT]: '#1F6BFF',
    [ModeEnum.MODE3]: '#9EC8FF',
  },
  glow: {
    [ModeEnum.DARK]: '#0500FF66',
    [ModeEnum.LIGHT]: '#0500FF4D',
    [ModeEnum.MODE3]: '#000000',
  },
  glow2: {
    [ModeEnum.DARK]: '#0500FF',
    [ModeEnum.LIGHT]: '#FFFFFF',
    [ModeEnum.MODE3]: '#18181C',
  },
  gray: {
    [ModeEnum.DARK]: '#34404C',
    [ModeEnum.LIGHT]: '#BBAFDA',
    [ModeEnum.MODE3]: '#2E3036',
  },
  grayLo: {
    [ModeEnum.DARK]: '#34404C33',
    [ModeEnum.LIGHT]: '#BBAFDA1A',
    [ModeEnum.MODE3]: '#2E303633',
  },
  grayMd: {
    [ModeEnum.DARK]: '#34404CB3',
    [ModeEnum.LIGHT]: '#BBAFDAB3',
    [ModeEnum.MODE3]: '#2E3036B3',
  },
  grayHi: {
    [ModeEnum.DARK]: '#34404CD9',
    [ModeEnum.LIGHT]: '#BBAFDAD9',
    [ModeEnum.MODE3]: '#2E3036D9',
  },
  green: {
    [ModeEnum.DARK]: '#00C868',
    [ModeEnum.LIGHT]: '#00C868',
    [ModeEnum.MODE3]: '#00C868',
  },
  greenLo: {
    [ModeEnum.DARK]: '#00C86833',
    [ModeEnum.LIGHT]: '#00C86833',
    [ModeEnum.MODE3]: '#00C86833',
  },
  greenMd: {
    [ModeEnum.DARK]: '#00C868B3',
    [ModeEnum.LIGHT]: '#00C868B3',
    [ModeEnum.MODE3]: '#00C868B3',
  },
  greenHi: {
    [ModeEnum.DARK]: '#00C868D9',
    [ModeEnum.LIGHT]: '#00C868D9',
    [ModeEnum.MODE3]: '#00C868D9',
  },
  pink: {
    [ModeEnum.DARK]: '#DD55FF',
    [ModeEnum.LIGHT]: '#DD55FF',
    [ModeEnum.MODE3]: '#DD55FF',
  },
  pinkLo: {
    [ModeEnum.DARK]: '#DD55FF33',
    [ModeEnum.LIGHT]: '#DD55FF33',
    [ModeEnum.MODE3]: '#DD55FF33',
  },
  pinkMd: {
    [ModeEnum.DARK]: '#DD55FFB3',
    [ModeEnum.LIGHT]: '#DD55FFB3',
    [ModeEnum.MODE3]: '#DD55FFB3',
  },
  pinkHi: {
    [ModeEnum.DARK]: '#DD55FFD9',
    [ModeEnum.LIGHT]: '#DD55FFD9',
    [ModeEnum.MODE3]: '#DD55FFD9',
  },
  purple: {
    [ModeEnum.DARK]: '#956FFF',
    [ModeEnum.LIGHT]: '#956FFF',
    [ModeEnum.MODE3]: '#885EFF',
  },
  purpleLo: {
    [ModeEnum.DARK]: '#956FFF33',
    [ModeEnum.LIGHT]: '#956FFF33',
    [ModeEnum.MODE3]: '#885EFF33',
  },
  purpleMd: {
    [ModeEnum.DARK]: '#956FFFB3',
    [ModeEnum.LIGHT]: '#956FFFB3',
    [ModeEnum.MODE3]: '#885EFFB3',
  },
  purpleHi: {
    [ModeEnum.DARK]: '#956FFFD9',
    [ModeEnum.LIGHT]: '#956FFFD9',
    [ModeEnum.MODE3]: '#885EFFD9',
  },
  red: {
    [ModeEnum.DARK]: '#FF3B3B',
    [ModeEnum.LIGHT]: '#FF3B3B',
    [ModeEnum.MODE3]: '#FF3B3B',
  },
  redHi: {
    [ModeEnum.DARK]: '#FF3B3BD9',
    [ModeEnum.LIGHT]: '#FF3B3BD9',
    [ModeEnum.MODE3]: '#FF3B3BD9',
  },
  redLo: {
    [ModeEnum.DARK]: '#FF3B3B33',
    [ModeEnum.LIGHT]: '#FF3B3B33',
    [ModeEnum.MODE3]: '#FF3B3B33',
  },
  redMd: {
    [ModeEnum.DARK]: '#FF3B3BB3',
    [ModeEnum.LIGHT]: '#FF3B3BB3',
    [ModeEnum.MODE3]: '#FF3B3BB3',
  },
  yellow: {
    [ModeEnum.DARK]: '#FFCC19',
    [ModeEnum.LIGHT]: '#FFCC19',
    [ModeEnum.MODE3]: '#FFCC19',
  },
  yellowHi: {
    [ModeEnum.DARK]: '#FFCC19D9',
    [ModeEnum.LIGHT]: '#E6B000D9',
    [ModeEnum.MODE3]: '#E6B000D9',
  },
  yellowLo: {
    [ModeEnum.DARK]: '#FFCC1933',
    [ModeEnum.LIGHT]: '#E6B00033',
    [ModeEnum.MODE3]: '#E6B00033',
  },
  yellowMd: {
    [ModeEnum.DARK]: '#FFCC19',
    [ModeEnum.LIGHT]: '#E6B000',
    [ModeEnum.MODE3]: '#E6B000',
  },
  white: {
    [ModeEnum.DARK]: '#FFFFFF',
    [ModeEnum.LIGHT]: '#FFFFFF',
    [ModeEnum.MODE3]: '#18181C',
  },
  whiteFixed: {
    [ModeEnum.DARK]: '#FFFFFF',
    [ModeEnum.LIGHT]: '#FFFFFF',
    [ModeEnum.MODE3]: '#FFFFFF',
  },
  whiteLo: {
    [ModeEnum.DARK]: '#FFFFFF80',
    [ModeEnum.LIGHT]: '#1B006699',
    [ModeEnum.MODE3]: '#FFFFFF80',
  },
  whiteMd: {
    [ModeEnum.DARK]: '#FFFFFFB3',
    [ModeEnum.LIGHT]: '#1B0066D9',
    [ModeEnum.MODE3]: '#FFFFFFB3',
  },
  whiteHi: {
    [ModeEnum.DARK]: '#FFFFFF1A',
    [ModeEnum.LIGHT]: '#1B00661A',
    [ModeEnum.MODE3]: '#FFFFFF1A',
  },
};

function convert(mapping: ModeType): ModeType {
  return Object.entries(mapping).reduce(
    (acc, [mode, color]) => ({
      ...acc,
      [mode]: Colors?.[color]?.[mode] || color,
    }),
    {} as ModeType,
  );
}

const ColorsDerived = {
  backgrounds: {
    body: convert({
      [ModeEnum.DARK]: 'black',
      [ModeEnum.LIGHT]: 'white',
      [ModeEnum.MODE3]: 'gray',
    }),
    button: {
      base: {
        default: {
          [ModeEnum.DARK]: '#28333D',
          [ModeEnum.LIGHT]: '#EBECF4',
          [ModeEnum.MODE3]: '#EBECF4',
        },
        hover: convert({
          [ModeEnum.DARK]: 'grayMd',
          [ModeEnum.LIGHT]: 'whiteHi',
          [ModeEnum.MODE3]: 'whiteHi',
        }),
      },
      basic: {
        default: {
          [ModeEnum.DARK]: 'transparent',
          [ModeEnum.LIGHT]: 'transparent',
          [ModeEnum.MODE3]: 'transparent',
        },
        hover: convert({
          [ModeEnum.DARK]: 'whiteHi',
          [ModeEnum.LIGHT]: 'whiteHi',
          [ModeEnum.MODE3]: 'whiteHi',
        }),
      },
      primary: {
        default: convert({
          [ModeEnum.DARK]: 'purple',
          [ModeEnum.LIGHT]: 'purple',
          [ModeEnum.MODE3]: 'purple',
        }),
        hover: convert({
          [ModeEnum.DARK]: 'purpleHi',
          [ModeEnum.LIGHT]: 'purpleHi',
          [ModeEnum.MODE3]: 'purpleHi',
        }),
      },
      secondary: {
        default: convert({
          [ModeEnum.DARK]: 'green',
          [ModeEnum.LIGHT]: 'green',
          [ModeEnum.MODE3]: 'green',
        }),
        hover: convert({
          [ModeEnum.DARK]: 'greenHi',
          [ModeEnum.LIGHT]: 'greenHi',
          [ModeEnum.MODE3]: 'greenHi',
        }),
      },
    },
    input: {
      base: {
        active: {
          [ModeEnum.DARK]: blueGradient,
          [ModeEnum.LIGHT]: blueGradient,
          [ModeEnum.MODE3]: blueGradient,
        },
        default: {
          [ModeEnum.DARK]: blueGradient,
          [ModeEnum.LIGHT]: blueGradient,
          [ModeEnum.MODE3]: blueGradient,
        },
        focus: {
          [ModeEnum.DARK]: blueGradient,
          [ModeEnum.LIGHT]: blueGradient,
          [ModeEnum.MODE3]: blueGradient,
        },
        hover: {
          [ModeEnum.DARK]: blueGradient,
          [ModeEnum.LIGHT]: blueGradient,
          [ModeEnum.MODE3]: blueGradient,
        },
      },
    },
  },
  borders: {
    base: {
      default: convert({
        [ModeEnum.DARK]: 'gray',
        [ModeEnum.LIGHT]: 'gray',
        [ModeEnum.MODE3]: 'gray',
      }),
      hover: convert({
        [ModeEnum.DARK]: 'grayHi',
        [ModeEnum.LIGHT]: 'grayHi',
        [ModeEnum.MODE3]: 'grayHi',
      }),
    },
    button: {
      base: {
        default: {
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        },
        hover: convert({
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        }),
      },
      basic: {
        default: {
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        },
        hover: convert({
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        }),
      },
      primary: {
        default: convert({
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        }),
        hover: convert({
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        }),
      },
      secondary: {
        default: convert({
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        }),
        hover: convert({
          [ModeEnum.DARK]: 'gray',
          [ModeEnum.LIGHT]: 'gray',
          [ModeEnum.MODE3]: 'gray',
        }),
      },
    },
    input: {
      base: {
        active: convert({
          [ModeEnum.DARK]: 'blueText',
          [ModeEnum.LIGHT]: 'blueText',
          [ModeEnum.MODE3]: 'blueText',
        }),
        default: convert({
          [ModeEnum.DARK]: 'blue',
          [ModeEnum.LIGHT]: 'blue',
          [ModeEnum.MODE3]: 'blue',
        }),
        focus: convert({
          [ModeEnum.DARK]: 'blueText',
          [ModeEnum.LIGHT]: 'blueText',
          [ModeEnum.MODE3]: 'blueText',
        }),
        hover: convert({
          [ModeEnum.DARK]: 'blueText',
          [ModeEnum.LIGHT]: 'blueText',
          [ModeEnum.MODE3]: 'blueText',
        }),
      },
    },
    muted: {
      default: {
        [ModeEnum.DARK]: 'grayLo',
        [ModeEnum.LIGHT]: 'grayLo',
        [ModeEnum.MODE3]: 'grayLo',
      },
      hover: convert({
        [ModeEnum.DARK]: 'grayLo',
        [ModeEnum.LIGHT]: 'grayLo',
        [ModeEnum.MODE3]: 'grayLo',
      }),
    },
  },
  icons: {
    base: convert({
      [ModeEnum.DARK]: 'white',
      [ModeEnum.LIGHT]: 'black',
      [ModeEnum.MODE3]: 'gray',
    }),
    inverted: convert({
      [ModeEnum.DARK]: 'black',
      [ModeEnum.LIGHT]: 'white',
      [ModeEnum.MODE3]: 'gray',
    }),
  },
  placeholder: {
    input: {
      base: convert({
        [ModeEnum.DARK]: 'whiteLo',
        [ModeEnum.LIGHT]: 'blackLo',
        [ModeEnum.MODE3]: 'blackLo',
      }),
    },
  },
  statuses: {
    success: {
      [ModeEnum.DARK]: '#8ADE00',
      [ModeEnum.LIGHT]: '#8ADE00',
      [ModeEnum.MODE3]: '#8ADE00',
    },
    successHi: {
      [ModeEnum.DARK]: 'rgba(138, 222, 0, 0.3)',
      [ModeEnum.LIGHT]: 'rgba(138, 222, 0, 0.3)',
      [ModeEnum.MODE3]: 'rgba(138, 222, 0, 0.3)',
    },
  },
  typography: {
    button: {
      base: convert({
        [ModeEnum.DARK]: 'white',
        [ModeEnum.LIGHT]: '#130048',
        [ModeEnum.MODE3]: '#130048',
      }),
    },
    text: {
      base: convert({
        [ModeEnum.DARK]: 'white',
        [ModeEnum.LIGHT]: 'black',
        [ModeEnum.MODE3]: 'black',
      }),
      blue: convert({
        [ModeEnum.DARK]: 'blueText',
        [ModeEnum.LIGHT]: 'blueText',
        [ModeEnum.MODE3]: 'blueText',
      }),
      inverted: convert({
        [ModeEnum.DARK]: 'black',
        [ModeEnum.LIGHT]: 'white',
        [ModeEnum.MODE3]: 'white',
      }),
    },
  },
};

const ColorsAll = { ...Colors, ...ColorsDerived };

export default ColorsAll;
