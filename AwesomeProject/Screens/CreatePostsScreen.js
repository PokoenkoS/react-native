import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from 'expo-location';
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase/config";

const CreatePostScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] =useState(null);
  const [photoLocation, setPhotoLocation] = useState("");
  const [title, setTitle] = useState("");
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();

  const { userId, nickName } = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
  
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);
  
  
useEffect(() => {
  (async()=>{
    const {status} = await Camera.requestCameraPermissionsAsync();
    await MediaLibrary.requestPermissionsAsync();

    setHasPermission(status === "granted")
  })();
}, []);

if (hasPermission === null) {
  return <View />;
}
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
};



const uploadPhotoToServer = async () => {
  const response = await fetch(photo);
  const file = await response.blob();
  const uniquePostId = Date.now().toString();
  const storageImage = ref(storage, `postImage/${uniquePostId}`);
  await uploadBytes(storageImage, file);
  const addedPhoto = await getDownloadURL(storageImage);
  return addedPhoto;
};

const uploadPostToServer = async () => {
  const photo = await uploadPhotoToServer();
  const createPost = {
    photo,
    title,
    photoLocation,
    location,
    userId,
    nickName,
  };
  uploadPostToDatabase(createPost);
  navigation.navigate("PostScreen", {
    photo,
    title,
    photoLocation,
    location,
  });
 
};

const uploadPostToDatabase = async (post) => {
   const docRef = await addDoc(collection(db, "post"), post);
};



const handleLocation = async ()=> {
   uploadPostToServer();
  let locations = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: locations.coords.latitude,
      longitude: locations.coords.longitude,
    };
    setLocation(coords);
    navigation.navigate( "PostScreen",{photo: {photo} ,
    location:{location}, photoLocation:{photoLocation},
  } 
    );
}

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.5,
  });
  if (!result.canceled) {
    setPhoto(result.assets[0].uri);
  }
};

const createPhoto = async () => {
  const photo = await camera.takePictureAsync();
  setPhoto(photo.uri);
  await MediaLibrary.createAssetAsync(photo.uri);
};

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {photo === null ? (
         <Camera
         style={styles.camera}
         type={type}
         ref={setCamera}
         > 
         {photo &&(
            <View>
              <Image source={{uri:photo}} style={{flex:1}}/>
            </View>
          )}
          <Pressable onPress ={createPhoto} style={styles.takePhotoOut}>
          <AntDesign name="camerao" size={24} color={"#FFFFFF"} />
          </Pressable>
          
             
     <TouchableOpacity
    style={styles.flipContainer}
    onPress={() => {
      setType(
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }}
    >
       </TouchableOpacity> 
      </Camera>) : (
<View style={styles.container}>
  <Image 
  source={{ uri: photo }}
  style={{
    ...styles.camera,
    position: "absolute",
    width: "100%",
    height: "100%",
    
  }}
  />
  <Pressable 
  onPress={()=>setPhoto(null)} 
  style={styles.takePhotoOut}
  >
  <AntDesign name="camerao" size={24} color={"#FFFFFF"} />
  </Pressable>
</View>
      )}
      <TouchableOpacity 
      onPress={pickImage}
      style={styles.button}
          >
      <Text>
       {photo === null ? "Завантажте фото" : "Редагувати фото"}
       </Text>
      </TouchableOpacity>
  
     
     <TextInput
      placeholder="Назва"
      onChangeText={setTitle}
     />
     <View>
      <Pressable onPress={() => navigation.navigate("Map",{location:location})}>
     <AntDesign name="enviromento" size={24} color="black" />
     </Pressable>
     <TextInput
      placeholder="Місцевість"
      onChangeText={setPhotoLocation}
     >
     </TextInput>

     </View>
     <Pressable         
        onPress={handleLocation}
      ><Text style={styles.textSing}>Опублікувати</Text>
      </Pressable>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
  flex: 1,
  
},
  photoView: {
    flex: 1,
    width: 343,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    
  },

  flipContainer: {
    width:340,
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    
    borderColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 140,
    marginTop: 400,
  },
});

export default CreatePostScreen;