import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SearchBox(){
  return(
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name='search' size={20} color="black" style={styles.icon}/>
        <TextInput 
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 353,
    height: 49,
    paddingLeft: 20,
    marginTop: 30,
    paddingHorizontal: 20,

  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 52,
    marginRight: 12
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  filterButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#ff5a3c',
    justifyContent: 'center',
    alignItems: 'center',
  },
})