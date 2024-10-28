import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const Onboard = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const scrollViewRef = useRef(null);

  const sections = [
    {
      title: "Welcome To ValueMax Team Management Application (VTMA)",
      description:
        "We're glad to have you onboard. Our app is designed to help you keep track of your schedule and manage your time more efficiently.",
      image: require("../assets/onboard.png"), // Update with your illustration asset
    },
    {
      title: "Organize & Manage Effortlessly",
      description:
        "Thank you for choosing our time management app to help you stay organized and productive.",
      image: require("../assets/onboard.png"), // Another illustration if available
    },
  ];

  const nextSlide = () => {
    if (currentIndex < sections.length - 1) {
      const nextIndex = currentIndex + 1;
      setIsButtonPressed(true);
      scrollViewRef.current.scrollTo({ x: width * nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate("Login");
    }
  };

  const handleScroll = (event) => {
    if (!isButtonPressed) {
      const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      setCurrentIndex(newIndex);
    }
  };

  const handleScrollEnd = () => {
    setIsButtonPressed(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {sections.map(({ title, description, image }, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.imageBox}>
              <Image source={image} style={styles.imageStyle} />
            </View>
            <View style={styles.blueSection}>
              <Text style={styles.upperBigText}>{title}</Text>
              <Text style={styles.upperLowerText}>{description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.dotsContainer}>
          {sections.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <Button
          mode="contained"
          onPress={nextSlide}
          contentStyle={styles.nextButtonContent}
          style={styles.nextButton}
          labelStyle={styles.nextButtonText}
        >
          {currentIndex === sections.length - 1 ? "Get Started" : "Next"}
        </Button>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    width: "100%",
    height: "65%", // Adjusted height to match illustration spacing
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%", // Slightly reduced to center-align within padding
    height: "70%",
    resizeMode: "contain",
  },
  blueSection: {
    height: "35%",
    width: "100%",
    backgroundColor: "#0414c0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  upperBigText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  upperLowerText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#0414c0",
    paddingVertical: 10,
  },
  skipText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#aaa",
  },
  activeDot: {
    borderRadius: 10,
    width: 15,
    height: 15,
    backgroundColor: "#fff",
  },
  inactiveDot: {
    backgroundColor: "#aaa",
  },
  nextButton: {
    backgroundColor: "#FFC107",
    borderRadius: 8,
    paddingVertical: 4,
  },
  nextButtonContent: {
    paddingHorizontal: 7,
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
