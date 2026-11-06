/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,Text ,TextInput,Button} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
     <Text style = {{fontSize: 40, color: 'green'}}>Login Form </Text>
     <TextInput placeholder="Name"/>
     <TextInput placeholder="Phones Number" />
     <TextInput placeholder="Email" />
     <TextInput placeholder="Address" />
     <Button title="Press " onPress = {() => alert('Button Pressed!')}/>
      <Button title="Press Me" onPress = {() => alert('Button Pressed!')}/>
           <Button title="Press Me" onPress = {() => alert('Button Pressed!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});

export default App;
