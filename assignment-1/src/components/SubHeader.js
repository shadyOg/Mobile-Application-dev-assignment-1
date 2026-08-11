import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubHeader({title}) {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 2
  },
  title:{
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  }
})