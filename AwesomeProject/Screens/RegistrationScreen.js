import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";


export default  RegistrationScreen=()=> {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

 
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.main}>
         <ImageBackground source={require('../image/back.png')}
         style={styles.image}></ImageBackground>
        <View style={styles.container}>
          <Image style={{width: 120, height: 120, backgroundColor: '#F6F6F6', borderRadius: 16, position: 'absolute', top: -50}}>
          </Image>
        <Text style={styles.title}>Реєстрація</Text> 
        <KeyboardAvoidingView 
         behavior={Platform.OS == "ios" ? "padding" : "height"}
         >
        <TextInput 
        style={styles.input} 
        placeholder="Логін"
        value={text}
        onChangeText={setText}
        />
        <TextInput 
        value={email}
        onChangeText={setEmail}
        style={styles.input} 
        placeholder="Адреса електронної пошти"
        />
        <View>
        <TextInput 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input} 
        placeholder="Пароль"
        />
        <Text style={styles.textInput}>Показати</Text>
        </View>
        </KeyboardAvoidingView>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Home", {screen:"PostScreen",params: {userEmail:`${email}`} })}>
          <Text style={styles.textButton}>Зареєструватися</Text>
        </Pressable>
        <View>
        <Text style={styles.text}>Вже є акаунт?</Text>
        <Pressable         
        onPress={() => navigation.navigate("Login")}
      ><Text style={styles.textSing}>Увійти</Text>
      </Pressable>
      </View>
         </View>
        </View>
        
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
      width:375,
      height:489,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      borderRadius: 25,
      marginTop: 203,
    },
     main:{
        width:375,
        height: 812,

    },
    image: {
        position: 'absolute',
        width: 375,
        height: 812,
    },
    title: {
   fontSize: 30,
   lineHeight: 35.16,
   fontWeight: 'bold',
   marginBottom: 32,
   paddingTop: 92,
    },
    input: {
     width: 343,
     height: 50,
     marginBottom: 16,
     borderRadius: 10,
     backgroundColor: '#F6F6F6',
     paddingLeft: 16,
     color: "#BDBDBD",
        
    },
    text: {
        fontSize:16,
        marginTop: 16,
    },
    button: {
      borderRadius: 100,
      marginTop: 27,
      marginBottom: 16,
      width: 343,
      height: 50,
      backgroundColor: "#FF6C00",
    },
    textButton: {
      color:"#FFFFFF",
      textAlign:"center",
      fontSize: 16,
      lineHeight: 19,
      alignItems: 'center',
      padding: 16,
      },
      textInput: {
    color:"#1B4371",
    position: "absolute", 
    right: 32,
    top: 16,
    
    },
    textSing: {
    position:"absolute",
    top: -20,
    left: 110,
    }
  });