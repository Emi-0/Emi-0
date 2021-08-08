import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useTheme } from "./theme";

export const assets = [require("./assets/pattern.jpg")];
const { width } = Dimensions.get("window");
const aspectRatio = 4357 / 6648;
const height = width * aspectRatio;
interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" hidden={true} />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};
export default Container;
