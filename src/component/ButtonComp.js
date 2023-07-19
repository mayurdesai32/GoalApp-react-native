import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

const ButtonComp = ({ fnShow, title }) => {
  return (
    // <View style={styles.container}>
    <View style={styles.ButtonStyle} >
      <Button title={title} color={'#0013de'} onPress={() => fnShow()} />
    </View>
  )
}

const styles = StyleSheet.create({
  ButtonStyle: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 30
  },
});






export default ButtonComp