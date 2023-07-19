import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Add_to_list } from '../redux/action/goalAction';
import { dontShowModal } from '../redux/action/showModalAction';

const Modalcomp = ({ dontShowModal, addToDo }) => {
 const [text, setText] = useState('');

 const submit = () => {

  addToDo(text);


  dontShowModal();
 };

 const clearText = () => {
  setText('');
 };

 return (
  <View style={styles.main}>
   <View style={styles.container}>
    <Text style={styles.text}>Add Your Goal</Text>
    <TextInput
     style={styles.inputText}
     value={text}
     onChangeText={(val) => setText(val)}
    />
    <View style={styles.buttonContainer}>
     <Button title="CLEAR TEXT" onPress={clearText} />
     <Button title="SAVED TEXT" onPress={submit} />
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 main: {
  flex: 1,
  backgroundColor: '#05014a',
 },
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 30,
 },
 text: {
  textTransform: 'capitalize',
  fontSize: 18,
  marginBottom: 20,
  color: '#ffff',
 },
 inputText: {
  minWidth: '88%',
  backgroundColor: '#b992e8',
  fontSize: 15,
  padding: 8,
  color: '#ffff',
 },
 buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,
 },
});

const mapDispatchToProps = (dispatch) => ({
 dontShowModal: () => dispatch(dontShowModal()),
 addToDo: (text) => dispatch(Add_to_list(text)),
 edit_goal: (text) => dispatch(edit_goal(text)),

});

export default connect(null, mapDispatchToProps)(Modalcomp);
