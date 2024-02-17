import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      bodyLight: string;
      white: string;
      primary: string;
      primary16: string;
      black25: string;
      black80: string;
      primaryBorder: string;
      secondary: string;
      tertiary: string;
      error: string;
      border: string;
      text: string;
      transparent: string;
      lightGrey: string;
      darkGrey: string;
      shadow: string;
      danger16: string;
      success16: string;
      info16: string;
      success: string;
      danger: string;
      info: string;
      secondary2S50: string;
    };
    fonts: {
      poppins: string;
    };
  }
}
