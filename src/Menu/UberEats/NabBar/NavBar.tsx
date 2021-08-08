import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabBar from "@gorhom/animated-tabbar";

import Menu from "../UberEats";
import Fetch from "../Fetch";
import Fetching from "../ContentV2";

import tabs from "./tabs";
import { MainTabsParams } from "./types";

const Tab = createBottomTabNavigator<MainTabsParams>();

const FlashyScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        safeAreaInsets: {
          bottom: 0,
        },
      }}
      tabBar={(props) => (
        <AnimatedTabBar preset="flashy" tabs={tabs} {...props} />
      )}
    >
      <Tab.Screen
        name="Home"
        initialParams={{
          backgroundColor: tabs.Home.labelStyle.color,
        }}
        component={Menu}
      />
      <Tab.Screen
        name="Showcase"
        initialParams={{
          backgroundColor: tabs.Showcase.labelStyle.color,
        }}
        component={Fetch}
      />
      <Tab.Screen
        name="Search"
        initialParams={{
          backgroundColor: tabs.Search.labelStyle.color,
        }}
        component={Fetching}
      />
      <Tab.Screen
        name="Profile"
        initialParams={{
          backgroundColor: tabs.Profile.labelStyle.color,
        }}
        component={Menu}
      />
    </Tab.Navigator>
  );
};

export default FlashyScreen;
