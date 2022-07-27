import React from 'react';
import {View, Text} from 'react-native';


export const FocusHistory = ({ history }) => {

  if(!history || !history.length) return null;

  return (
    <View>
      <Text>Focus history will be built here</Text>
    </View>
  )
}