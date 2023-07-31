import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import RegistartionScreen from './Screens/RegistartionScreen';
// import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegistartionScreen/> */}
      {/* <LoginScreen/> */}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});