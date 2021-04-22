import React from 'react';
import Formu from './componetes/formu'
import {View, Text, Button} from 'react-native'
import HomeScreen from './componetes/Home/HomeScreen';

funtion HomeScreen= ({ navigation }){
  return (
  <View>
    <Text>Home</Text>
    <Button
    title="Home"onPress= {() => navigation.navigate('./componetes/Home/HomeScreen')}
    />
  </View>
  )
}
export default app