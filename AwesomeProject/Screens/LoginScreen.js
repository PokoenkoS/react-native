import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    ImageBackground,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    Alert
  } from "react-native";

  export default  LoginScreen=()=> {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const onLogin = () => {
    Alert.alert("Credentials", `${email}`);
  };
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
         <ImageBackground source={require('../image/back.png')}
         style={styles.image}></ImageBackground>
        <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text> 
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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
        style={styles.input} 
        secureTextEntry
        placeholder="Пароль"
        />
        <Text style={styles.textInput}>Показати</Text>
        </View>
        </KeyboardAvoidingView>
        <Pressable style={styles.button} onPress={onLogin}>
     <Text style={styles.textButton}>Увійти</Text>
     </Pressable>
        <Text style={styles.text}>Немає акаунту? Зареєструватись</Text>
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
      marginTop:323,
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
   paddingTop:32,
    },
    input: {
     width: 343,
     height: 50,
     marginBottom: 16,
     borderRadius: 10,
     backgroundColor: '#F6F6F6',
     paddingLeft: 16,
     color: "#BDBDBD",
      position:"relative"
    },
    text: {
        fontSize:16,
        marginTop: 16,
        color:"#1B4371",
    },
    button: {
        borderRadius: 100,
        maginTop: 27,
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
    position: 'absolute', 
    right: 32,
    top: 16,
    
    }
  });