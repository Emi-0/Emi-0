import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import { Theme, makeStyles } from "../../Components/theme";
import { AuthNavigationProps } from "../../Components/navigation";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    top: SLIDE_HEIGHT - SLIDE_HEIGHT,
    width: undefined,
    height: undefined,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));
const slides = [
  {
    title: "Ravenous",
    subtitle: "Find Your Meal",
    description:
      "Struggling to find a good meal? Don't Stress, You won't find a better meal anywhere else!",
    color: "#3a86ff",
    picture: {
      src: require("../assets/1.png"),
      width: 2550,
      height: 2641,
    },
  },
  {
    title: "Swift",
    subtitle: "As Soon as Possible",
    description:
      "Tired of waiting on subpar snacks? Browse thousands of meals from hundreds of local restaurants right now",
    color: "#8338ec",
    picture: {
      src: require("../assets/2.png"),
      width: 2202,
      height: 2319,
    },
  },
  {
    title: "Delicious",
    subtitle: "Good for You and Your Wallet",
    description:
      "Your diet sucks, and you know it. It's time to start tasting green and saving some too!",
    color: "#ff006e",
    picture: {
      src: require("../assets/3.png"),
      width: 9019,
      height: 6317,
    },
  },
  {
    title: "Today",
    subtitle: "Yummy is Just a Click Away",
    description:
      "A healthier, happier you is just around the corner. Get started today!",
    color: "#fb5607",
    picture: {
      src: require("../assets/4.png"),
      width: 5001,
      height: 5001,
    },
  },
];
export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image source={picture.src} style={styles.picture} />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current;
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
