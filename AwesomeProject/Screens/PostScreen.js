import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostScreen = () => {
  const navigation = useNavigation();
  const {params: {userEmail}} = useRoute();
  return (

    <View style={styles.container}>
      
      <Text>{userEmail}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostScreen;