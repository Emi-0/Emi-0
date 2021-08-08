import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../Components/navigation";

import SideBar from "./SideBar";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="SideBar" component={SideBar} />
  </Drawer.Navigator>
);
