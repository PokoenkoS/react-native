import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const PostScreen = () => {
  // const navigation = useNavigation();
  const {params: {userEmail,location, photo, photoLocation, title}} = useRoute();
  return (

    <View style={styles.container}>
       {/* <Image source={{uri:{photo}}}/> */}
      <Text>{userEmail}</Text>
     
      <Text>{title} </Text>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#FFFFFF",
  },
});

export default PostScreen;