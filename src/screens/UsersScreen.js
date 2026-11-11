
import React, { useState, useEffect, useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';

import { getUsers } from '../api/userApi';

const UsersScreen = () => {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState('');

  // API Calling Function
  const fetchUsers = useCallback(async (isRefresh = false) => {

    try {

      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError('');

      const response = await getUsers();

      setUsers(response);

    } catch (error) {

      setError(error.message || 'Something went wrong');

    } finally {

      setLoading(false);
      setRefreshing(false);

    }

  }, []);

  // Call API when screen loads
  useEffect(() => {

    fetchUsers();

  }, [fetchUsers]);


  // Loading UI
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />

        <Text>Loading Users...</Text>
      </View>
    );
  }


  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Users List
      </Text>

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}

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

        ListEmptyComponent={
          <Text style={styles.empty}>
            No users found.
          </Text>
        }

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchUsers(true)}
          />
        }

      />

    </View>

  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  error: {
    color: 'red',
    marginBottom: 10,
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
  },

});

export default UsersScreen;
