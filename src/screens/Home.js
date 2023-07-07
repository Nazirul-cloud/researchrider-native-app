import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
  const description =
    "Research Rider provides various products, services, and supports which are highly based on research and ICT platforms.";
  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Image
          resizeMode="contain"
          style={styles.headerImg}
          source={require("../../assets/1.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>WELCOME TO</Text>
        <Text
          style={[
            styles.headerTitle,
            {
              fontSize: 34,
              color: "#0255df",
              marginTop: 20,
            },
          ]}
        >
          {props.websiteName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1.2,
    display: "flex",
    alignItems: "stretch",
    borderRadius: 10,
    marginTop: 80,
  },
  headerTitle: {
    fontSize: 30,
    color: "#0255df",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 20,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 200,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuStyle: {
    marginVertical: 20,
  },
});
