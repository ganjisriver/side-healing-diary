import { Pressable } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
import { GlobalColors } from "../../constants/color";

import Title from "../../ui/Title";

const RecommendGroup = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Title>요즘 뜨는 소모임</Title>
        <View style={styles.wrapper}>
          <Image
            source={require("../../assets/images/SAMPLE6.png")}
            style={styles.image}
          />
          <View style={styles.hashtags}>
            <View style={styles.hashtag}>
              <Text style={styles.tagText}>#해시태그</Text>
            </View>
            <View style={styles.hashtag}>
              <Text style={styles.tagText}>#해시태그</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>소모임 제목</Text>
            <Text style={styles.description}>소모임 설명 설명설명 </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RecommendGroup;

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
  },
  wrapper: {
    alignItems: "center",
  },
  image: {
    position: "relative",
    width: 330,
    height: 195,
    borderRadius: 12,
  },
  hashtags: {
    minWidth: 75,
    height: 25,
    flexDirection: "row",
    position: "absolute",
    top: 10,
    left: 25,
    justifyContent: "center",
  },
  hashtag: {
    backgroundColor: GlobalColors.colors.white500,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  tagText: {
    fontFamily: "KoddiUDOnGothic-ExtraBold",
    fontSize: 12,
    color: GlobalColors.colors.primary500,
    paddingHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
  },
  infoContainer: {
    position: "absolute",
    bottom: 10,
    left: 25,
  },
  title: {
    fontFamily: "KoddiUDOnGothic-ExtraBold",
    fontSize: 16,
    color: GlobalColors.colors.white500,
  },
  description: {
    fontFamily: "KoddiUDOnGothic-Regular",
    fontSize: 12,
    color: GlobalColors.colors.white500,
  },
});
