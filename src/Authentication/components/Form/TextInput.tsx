/* eslint-disable no-nested-ternary */
import React, { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme, RoundedIcon } from "../../../Components";
interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];
    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
        padding="s"
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
            color="white"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
