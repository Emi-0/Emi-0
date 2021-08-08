import React from "react";

import { AuthNavigationProps } from "../Components/navigation";
import {
  Container,
  Box,
  Button,
  Text,
  RoundedIconButton,
  RoundedIcon,
} from "../Components";

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            backgroundColor="white"
            color="secondary"
            name="x"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />

        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password has been updated succesfully
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close the window and attempt to login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Try again"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
