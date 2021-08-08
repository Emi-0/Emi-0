import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text, Theme } from "./theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  color,
  size,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.7;
  return (
    <Box
      height={size}
      width={size}
      alignItems="center"
      justifyContent="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text {...{ color }}>
        <Icon size={iconSize} style={{ textAlign: "center" }} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
