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
    marginBottom: 8,
    marginLeft: 8
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
})