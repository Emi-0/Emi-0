import React from "react";
import { Dimensions, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text, useTheme } from "../Components/theme";
import { Button } from "../Components";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../Components/navigation";

const { width } = Dimensions.get("window");
const picture = {
  src: require("./assets/5.png"),
  width: 4067,
  height: 5160,
};
export const assets = [picture.src];

const Welcome = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="gold"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="gold"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup to start eating healhier for
            less!
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Join us, its free!"
            onPress={() => navigation.navigate("SignUp")}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="title">
              Forgot password?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
