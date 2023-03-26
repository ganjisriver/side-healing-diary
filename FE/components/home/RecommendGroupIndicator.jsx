import { View, Animated, StyleSheet, Dimensions } from "react-native";
import { GlobalColors } from "../../constants/color";

const { width } = Dimensions.get("window");

const RecommentGroupIndicator = ({ data, scrollX }) => {
  return (
    <View style={styles.indicatorContainer}>
      {data.map((item) => {
        const opacity = scrollX.interpolate({
          inputRange: [
            (item.id - 1) * width,
            item.id * width,
            (item.id + 1) * width,
          ],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={item.id}
            style={[styles.indicator, { opacity }]}
          />
        );
      })}
    </View>
  );
};

export default RecommentGroupIndicator;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: GlobalColors.colors.black500,
    marginHorizontal: 4,
  },
});
