import React from 'react';
import { View } from 'react-native';
import SubHeader from './SubHeader';
import TaskCard from './TaskCard';

export default function Ongoing() {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
      <SubHeader title={"Ongoing Task"}/>
      <TaskCard Task={"Mobile App Development"}/>
      <TaskCard Task={"Web Development"}/>
      <TaskCard Task={"Mobile App Development"}/>
      <TaskCard Task={"Push Ups"}/>
      <TaskCard Task={"Cooking"}/>
      <TaskCard Task={"Machine Learning"}/>
      <TaskCard Task={"Mobile App Development"}/>
      <TaskCard Task={"Mobile App Development"}/>
    </View>
  );
}