import { StyleSheet, View, Text, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux';

import { delete_goal, delete_all } from '../redux/action/goalAction';


const GoalComp = ({ items, delete_goal, key }) => {
  return (
    <View key={key} style={styles.GoalStyle}>
      <Text style={styles.GoalTextStyle}>{items}</Text>
      <Button title='delete' onPress={() => {
        delete_goal(items)
      }} />
    </View>
  )
}
const styles = StyleSheet.create({
  GoalStyle: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#650ecf',
    padding: 13,
    marginTop: 20,
  },
  GoalTextStyle: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: '#ffff',

  },
});





const mapDispatchToProps = (dispatch) => ({
  delete_goal: (text) => dispatch(delete_goal(text)),
});

export default connect(null, mapDispatchToProps)(GoalComp);

