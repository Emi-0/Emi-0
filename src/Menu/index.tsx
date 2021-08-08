import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuRoutes } from "../Components/navigation";

import Menu, { assets as UberEatsAssets } from "./UberEats/UberEats";
import Fetch from "./UberEats/Fetch";
import NavBar from "./UberEats/NabBar/NavBar";

export const assets = [UberEatsAssets];

const MenuStack = createStackNavigator<MenuRoutes>();
export const MenuNavigator = () => {
  return (
    <MenuStack.Navigator headerMode="none">
      <MenuStack.Screen name="NavBar" component={NavBar} />
      <MenuStack.Screen name="Menu" component={Menu} />
      <MenuStack.Screen name="Fetch" component={Fetch} />
    </MenuStack.Navigator>
  );
};
