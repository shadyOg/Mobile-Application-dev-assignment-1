import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryCard({activity, taskCount, imageSource}){
  return(
    <TouchableOpacity style={styles.card}>
      <Text style={styles.activity}>{activity}</Text>
      <Text style={styles.subtitle}>{taskCount}</Text>

      <Image
        source={imageSource}
        style={styles.image}
        resizeMode="contain"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f5efe9',
    borderRadius: 20,
    padding: 16,
    height: 200,
    justifyContent: 'flex-start',
  },
  activity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  image: {
    width: '100%',
    height: 120,
    marginTop: 8,
    alignSelf: 'center',
  },
})