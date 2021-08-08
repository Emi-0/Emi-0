import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const theme = {
  colors: {
    primary: "#02e4aa",
    secondary: "#756bf8",
    danger: "#ef233c",
    title: "#0C0D34",
    text: "rgba(43, 45, 66,.7)",
    button: "#0C0D34",
    white: "white",
    grey: "#E5E5E5",
    gold: "#FFBE0B",
    blue: "#3a86ff",
    primaryLight: "rgba(2, 228, 170, .1)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 90,
      fontFamily: "Montserrat-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontFamily: "Montserrat-Bold",
      fontSize: 30,
      lineHeight: 32,
      color: "title",
    },
    title2: {
      fontFamily: "Montserrat-Bold",
      fontSize: 28,
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Montserrat-SemiBold",
      color: "text",
    },
    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },
    button: {
      fontFamily: "Oswald-Regular",
      fontSize: 18,
      textAlign: "center",
      color: "title",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
