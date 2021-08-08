import { TabsConfig, FlashyTabBarItemConfig } from "@gorhom/animated-tabbar";

import { Home, Search, Showcase, Profile } from "./Components/TestSvg";

const tabs: TabsConfig<FlashyTabBarItemConfig> = {
  Home: {
    labelStyle: {
      color: "#3a86ff",
    },
    icon: {
      component: Home,
      color: "#3a86ff",
    },
  },
  Showcase: {
    labelStyle: {
      color: "#8338ec",
    },
    icon: {
      component: Showcase,
      color: "#8338ec",
    },
  },
  Search: {
    labelStyle: {
      color: "#ffbe0b",
    },
    icon: {
      component: Search,
      color: "#ffbe0b",
    },
  },
  Profile: {
    labelStyle: {
      color: "#fb5607",
    },
    icon: {
      component: Profile,
      color: "#fb5607",
    },
  },
};
export default tabs;
