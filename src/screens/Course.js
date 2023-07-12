import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import Menu from "../component/Menu";

const Course = ({ navigation }) => {
  const [value, setValue] = useState("");
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://researchrider.xyz/course/all/");
        const data = await response.json();
        setValue(data); // Do something with the data
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage} source={{ uri: item.cover_pic }} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.mainHeader}>{item.name}</Text>

            <View style={styles.buttonContainer}>
              <View style={styles.dateContainer}>
                <Image
                  style={styles.iconStyle}
                  source={require("../../assets/course/start2.png")}
                />
                <Text> {item.course_enroll_start_date}</Text>
              </View>

              <View style={styles.dateContainer}>
                <Image
                  style={styles.iconStyle}
                  source={require("../../assets/course/end2.png")}
                />
                <Text> {item.course_enroll_end_date}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }
            >
              <Text style={styles.buttonText}>{item.enrollment_fee} BDT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={value}
        renderItem={courseCard}
      />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 2,
    borderWidth: 0.2,
    borderColor: "gray",
  },
  mainContainer: {
    paddingHorizontal: 25,
  },
  courseContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 1,
    marginVertical: 10,
  },
  textContainer: {
    padding: 25,
  },

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
  },
  description: {
    textAlign: "center",
    paddingBottom: 15,
    lineHeight: 45,
    fontSize: 20,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    textTransform: "uppercase",
  },
  iconStyle: {
    width: 25,
    height: 25,
    aspectRatio: 1,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Course;
