import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBox from '../components/SearchBox';
import SubHeader from '../components/SubHeader';
import Categories from '../components/categories';


export default function MainScreen() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header/>
        <SearchBox/>
        <Categories/>
      </ScrollView>
    </SafeAreaProvider>
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
