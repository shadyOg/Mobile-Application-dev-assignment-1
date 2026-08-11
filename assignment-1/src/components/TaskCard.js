import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskCard({ Task }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.task}>{Task}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8D1BA',
    borderRadius: 16,
    width: '100%',
    height: 120,
    marginBottom: 14,
  },
  task: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
});