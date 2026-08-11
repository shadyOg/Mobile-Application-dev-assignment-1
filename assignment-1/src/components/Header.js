import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
      </View>
      <View style={styles.avatar}>
        <Image
          source={require('../../assets/avatar.png')}
          style={{ width: 40, height: 40 }}
        />
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 52,
    marginLeft: 20
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
   
  },
  subtitle:{
    fontSize: 10,
    color: 'black'
  },
  avatar: {
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 50,
    height: 50,
    width: 52,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: "center",


  }
})