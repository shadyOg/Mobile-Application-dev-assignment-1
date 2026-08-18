import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutCard({ workout, onPress }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: workout.image }} style={styles.image} />

      <TouchableOpacity
        style={styles.favouriteBtn}
        onPress={() => setIsFavourite((prev) => !prev)}
      >
        <Ionicons
          name={isFavourite ? 'heart' : 'heart-outline'}
          size={20}
          color={isFavourite ? '#FF6B4A' : '#8E8E93'}
        />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.category}>{workout.category}</Text>
        <Text style={styles.title}>{workout.title}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#8E8E93" />
            <Text style={styles.metaText}>{workout.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={14} color="#8E8E93" />
            <Text style={styles.metaText}>{workout.calories}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 140,
  },
  favouriteBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    padding: 14,
  },
  category: {
    fontSize: 12,
    color: '#FF6B4A',
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 13,
    color: '#8E8E93',
  },
});