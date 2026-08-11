import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CategoryCard from './CategoryCard';
import SubHeader from './SubHeader';

export default function Categories() {
  return (
    <View style={styles.wrapper}>
      <SubHeader title={"Categories"}/>
      <View>
        <CategoryCard 
          activity={"Excercise"}
          taskCount={12}
          imageSource={require('../../assets/watching.png')}
        />
        <CategoryCard 
          activity={"Study"}
          taskCount={12}
          imageSource={require("../../assets/reading.png")}
        />
      </View>

    </View>
  );
}

const styles= StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
})