
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from "react-native";

export default  RegistrationScreen=()=> {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Реєстрація</Text> 
        <TextInput style={styles.input}>Логін</TextInput>
        <TextInput style={styles.input}>Адреса електронної пошти</TextInput>
        <TextInput style={styles.input}>Пароль</TextInput>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Зареєструватися</Text>
        </Pressable>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
   fontSize: 30,
   lineHeight: 35.16,
   fontWeight: 'bold',
   marginBottom: 32,
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
      }
  });