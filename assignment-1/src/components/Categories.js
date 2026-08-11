import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import SubHeader from './SubHeader';

export default function Categories() {
  return (
    <View style={styles.wrapper}>
      <SubHeader title={"Categories"}/>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
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
        <CategoryCard 
          activity={"Watching"}
          taskCount={12}
          imageSource={require("../../assets/lifting.png")}
        />        
        <CategoryCard 
          activity={"Dancing"}
          taskCount={12}
          imageSource={require("../../assets/dancing.png")}
        />
        <CategoryCard 
          activity={"browsing"}
          taskCount={12}
          imageSource={require("../../assets/browsing.png")}
        />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
})