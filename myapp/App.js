import React from 'react';
import {View, Button, TextInput } from 'react-native';

class app extends React.Component {
  constructor()
  {
    super();
    this.state = {
      name: '',
      edad: '',
      user: '',
      pass: ''
    }
  }
  submit()
  {
    console.warn(this.state)
  }
  render() {
    return (
      <View style={{margin:20, marginTop:100}}>
        <TextInput
        placeholder="enter name"
        onChangeText={(text) => this.setState({name: text})}
        style={{borderwidth: 2, bordercolor: 'skyblue', margin: 20}}
        />
        <TextInput
        placeholder="edad"
        onChangeText={(text) => this.setState({name: text})}
        style={{borderwidth: 2, bordercolor: 'skyblue', margin: 20}}
        /><TextInput
        placeholder="user"
        onChangeText={(text) => this.setState({name: text})}
        style={{borderwidth: 2, bordercolor: 'skyblue', margin: 20}}
        /><TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text) => this.setState({name: text})}
        style={{borderwidth: 2, bordercolor: 'skyblue', margin: 20}}
        />
        <Button title="Register" onpress={()=>{this.submit()}}/>
      </View>
    )
  }
}

export default app