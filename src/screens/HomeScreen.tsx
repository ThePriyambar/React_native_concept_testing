
import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

const HomeScreens = ({ navigation }: Props) => {

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Welcome to Home Screen
      </Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

    </View>

  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },

});

export default HomeScreens;
