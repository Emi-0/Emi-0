import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { onScrollEvent, useValue } from "react-native-redash";

import { MenuNavigationProps } from "../../Components/navigation";
import { Box } from "../../Components";

import HeaderImage, { backgroundImage } from "./HeaderImage";
import Content, { defaultTabs } from "./Content";
import Header from "./Header";

export const assets = [backgroundImage];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UberEats = ({ navigation }: MenuNavigationProps<"Menu">) => {
  const scrollView = useRef<Animated.ScrollView>(null);
  const [tabs, setTabs] = useState(defaultTabs);
  const y = useValue(0);
  const onScroll = onScrollEvent({ y });
  return (
    <Box flex={1}>
      <HeaderImage {...{ y }} />
      <Animated.ScrollView
        ref={scrollView}
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={1}
        bounces={true}
        {...{ onScroll }}
      >
        <Content
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
          {...{ y }}
        />
      </Animated.ScrollView>
      <Header {...{ tabs, y, scrollView }} />
    </Box>
  );
};

export default UberEats;
