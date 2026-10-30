/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,Text ,TextInput} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
     <Text style = {{fontSize: 30, color: 'red'}}>Login Form </Text>
     <TextInput placeholder="Name"/>
     <TextInput placeholder="Phone Number" />
     <TextInput placeholder="Email" />
     <Button title="Press Me" onPress = {() => alert('Button Pressed!')}/>
     
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
