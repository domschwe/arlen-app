import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: 50,
    backgroundColor: "#d4ffc7",
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default styles;
