import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log('');
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to Components Demo" onPress={() => navigation.navigate('Components')} />
      <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
      <Button title="Go to Image Screen" onPress={() => navigation.navigate('Image')} />
      <Button title="Go to Counter Screen" onPress={() => navigation.navigate('Counter')} />
      <Button title="Go to Color Screen" onPress={() => navigation.navigate('Color')} />
      <Button title="Go to Square Screen" onPress={() => navigation.navigate('Square')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
