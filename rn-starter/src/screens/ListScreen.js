import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friends #1', age: '10' },
    { name: 'Friends #2', age: '11' },
    { name: 'Friends #3', age: '12' },
    { name: 'Friends #4', age: '13' },
    { name: 'Friends #5', age: '14' },
    { name: 'Friends #6', age: '15' },
    { name: 'Friends #7', age: '16' },
    { name: 'Friends #8', age: '17' },
    { name: 'Friends #9', age: '18' },
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
