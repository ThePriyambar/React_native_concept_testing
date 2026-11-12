
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
  'Profile'
>;

const ProfileScreen = ({ navigation }: Props) => {

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Profile Screen
      </Text>

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
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

});

export default ProfileScreen;
