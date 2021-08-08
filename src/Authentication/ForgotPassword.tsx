import React from "react";
import { Linking } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AuthNavigationProps } from "../Components/navigation";
import { Container, Box, Button, Text } from "../Components";

import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );
  const footer = (
    <Footer
      title="Didn't work?"
      action="Try an alternate method"
      onPress={() => Linking.openURL("mailto:help@DealFare.com")}
    />
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot Password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset password"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
