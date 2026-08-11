import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Categories from '../components/Categories';
import Ongoing from '../components/Ongoing';

export default function MainScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <SearchBox />
        <Categories />
        <Ongoing />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: '#fbf6f0',
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#222',
  },
});
