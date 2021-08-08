import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface MenuNavigationProps<RouteName extends keyof MenuRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<MenuRoutes, RouteName>,
    StackNavigationProp<AuthenticationRoutes, "Login">
  >;
  route: RouteProp<MenuRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
  Menu: undefined;
};

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
  Menu: undefined;
};
export type HomeRoutes = {
  SideBar: undefined;
};
export type MenuRoutes = {
  Menu: undefined;
  NavBar: undefined;
  Fetch: undefined;
  Fetching: undefined;
};
