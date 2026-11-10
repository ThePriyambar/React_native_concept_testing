/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,Text ,TextInput,Button,Alert} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
     <Text style = {{fontSize: 40, color: 'white'}}>Login Form </Text>
      <TextInput placeholder="Phone Number" />
     <TextInput placeholder="Password" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

export default App;
