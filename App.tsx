import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets } from "./src/Components";
import { theme } from "./src/Components/theme";
import { HomeNavigator } from "./src/Home";
import { AppRoutes } from "./src/Components/navigation";
import { assets as MenuAssets, MenuNavigator } from "./src/Menu";

const assets = [...authenticationAssets, ...MenuAssets];
const fonts = {
  "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  "Montserrat-SemiBold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  "Oswald-Regular": require("./assets/fonts/Oswald/static/Oswald-Regular.ttf"),
  "Oswald-Light": require("./assets/fonts/Oswald/static/Oswald-Light.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
            <AppStack.Screen name="Menu" component={MenuNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
