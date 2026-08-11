import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    height: 170,
    width: 170,
    justifyContent: 'flex-start',
    marginBottom: 25,
    overflow: 'hidden',   // 👈 clips anything spilling past the card edges
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
    height: 100,        // 👈 shrunk to actually fit remaining space
    marginBottom: 12,
    alignSelf: 'center',
  },
});