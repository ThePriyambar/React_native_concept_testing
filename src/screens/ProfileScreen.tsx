
import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {getUsers} from '../services/userServices';
import {User} from '../types/userTypes'

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

const ProfileScreen = ({ navigation }: Props) => {
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    fetchUsers();
}, []);




    const fetchUsers = async () => {
    try{
        setLoading(true);
        setError(null);
        const result = await getUsers();
        setUsers(result);
    } catch (err) {
        setError('Failed to fetch users');
    } finally {
        setLoading(false);
    }
};


  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Profile Screen
      </Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>{item.email}</Text>

            <Text>{item.phone}</Text>

          </View>
        )}
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
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    card: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

});

export default ProfileScreen;
