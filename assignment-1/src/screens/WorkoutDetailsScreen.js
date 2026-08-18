import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutDetailsScreen({ route, navigation }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: workout.image }} style={styles.image} />
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#1A1A2E" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.category}>{workout.category}</Text>
        <Text style={styles.title}>{workout.title}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={18} color="#8E8E93" />
            <Text style={styles.metaText}>{workout.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={18} color="#8E8E93" />
            <Text style={styles.metaText}>{workout.calories}</Text>
          </View>
        </View>

        <Text style={styles.description}>
          A focused {workout.category.toLowerCase()} session designed to build strength
          and endurance. Follow along at your own pace and stay consistent.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isCompleted && styles.buttonCompleted]}
        onPress={() => setIsCompleted((prev) => !prev)}
      >
        <Text style={[styles.buttonText, isCompleted && styles.buttonTextCompleted]}>
          {isCompleted ? 'Completed' : 'Start Workout'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageWrap: {
    height: 280,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  category: {
    fontSize: 13,
    color: '#FF6B4A',
    fontWeight: '600',
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#5A5A6E',
  },
  button: {
    backgroundColor: '#FF6B4A',
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonCompleted: {
    backgroundColor: '#E8F5E9',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonTextCompleted: {
    color: '#2E7D32',
  },
});