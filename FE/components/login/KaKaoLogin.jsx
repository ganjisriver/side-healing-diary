import {
  Pressable,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const deviceWidth = Dimensions.get("window").width - 50;

const KaKaoLogin = () => {
  const loginWithKakao = () => {
    console.log("kakao login");
  };

  return (
    <Pressable style={styles.kakao} onPress={loginWithKakao}>
      <Image
        style={styles.image}
        source={require("../../assets/images/kakao_logo.png")}
      />
      <View style={styles.kakaoLogin}>
        <Text style={styles.loginText}>카카오 로그인</Text>
      </View>
    </Pressable>
  );
};

export default KaKaoLogin;

const styles = StyleSheet.create({
  kakao: {
    flexDirection: "row",
    width: deviceWidth,
    height: 60,
    backgroundColor: "#FEE500",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#000",
    marginBottom: 18,
  },
  image: {
    width: 35,
    height: 30,
  },

  kakaoLogin: {
    width: deviceWidth - 60,
    justifyContent: "center",
    alignContent: "center",
  },
  loginText: {
    fontFamily: "Roboto",
    fontSize: 18,
    textAlign: "center",
  },
});
