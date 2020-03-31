import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated
} from "react-native";
import { render } from "react-dom";

export default function Welcome() {
  const [animate, setAnimate] = useState({
    LogoAnimate: new Animated.Value(0),
    LogoText: new Animated.Value(0)
  });
  useEffect(() => {
    const { LogoAnimate, LogoText } = animate;
    Animated.parallel([
      Animated.spring(LogoAnimate, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000
      }).start(),
      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1200
      })
    ]).start();
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG.png")}
        style={styles.imageContainer}
      >
        <View style={styles.logoContainer}>
          <Animated.View style={{ opacity: animate.LogoText }}>
            <Text style={styles.text}>Welcome to</Text>
          </Animated.View>
          <Animated.View
            style={{
              opacity: animate.LogoAnimate,
              top: animate.LogoAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [80, 0]
              })
            }}
          >
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            ></Image>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  logoContainer: {
    position: "absolute",
    bottom: "10%",
    left: 40
  },
  text: {
    color: "#fff",
    // fontFamily: "GoogleSans-Bold",
    fontSize: 26
  },
  logo: {
    marginVertical: 20
  }
});
