import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';



const PostScreen = () => {
  const navigation = useNavigation();
  const {params: {userEmail,location, photo, photoLocation, title, id}} = useRoute();
  return (

    <View style={styles.container}>
       {/* <Image source={{uri:photo}}/> */}
      <Text>{userEmail}</Text>
     
      <Text>{title} </Text>
      <Pressable onPress={() => navigation.navigate("Comments", {
                    id: id,
                    photo: photo,
                  })} style={styles.takePhotoOut}>
          <AntDesign name="message1" size={24} color={"black"} />
          </Pressable>
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
  takePhotoOut: {
      height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 400,
  },
});

export default PostScreen;