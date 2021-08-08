import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticationRoutes } from "../Components/navigation";

import Onboarding, { assets as OnboardingAssets } from "./Onboarding";
import Welcome, { assets as WelcomeAssets } from "./welcome";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import PasswordChanged from "./PasswordChanged";

export const assets = [...OnboardingAssets, ...WelcomeAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};
