import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    marginTop: "25%",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
