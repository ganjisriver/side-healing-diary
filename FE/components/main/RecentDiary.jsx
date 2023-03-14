import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { GlobalColors } from "./../../constants/color";

import Title from "../../ui/Title";

const deviceWidth = Dimensions.get("window").width - 50;

const RecentDiary = () => {
  return (
    <>
      <Title>최근 일기</Title>
      <View style={styles.container}>
        <View style={styles.recentDiaries}>
          <View>
            <Image
              source={require("../../assets/images/SAMPLE4.png")}
              style={styles.image}
            />
            <View style={styles.hashtag}>
              <Text style={styles.tagText}>#해시태그</Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../../assets/images/SAMPLE4.png")}
              style={styles.image}
            />
            <View style={styles.hashtag}>
              <Text style={styles.tagText}>#해시태그</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RecentDiary;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
  },
  image: {
    position: "relative",
    width: 150,
    height: 160,
    borderRadius: 12,
  },
  hashtag: {
    minWidth: 75,
    height: 25,
    borderRadius: 16,
    backgroundColor: GlobalColors.colors.white500,
    position: "absolute",
    top: 10,
    left: 10,
  },
  tagText: {
    fontFamily: "KoddiUDOnGothic-ExtraBold",
    fontSize: 12,
    color: GlobalColors.colors.primary500,
    textAlign: "center",
    marginTop: 5,
  },
  recentDiaries: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
