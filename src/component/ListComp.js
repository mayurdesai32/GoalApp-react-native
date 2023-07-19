import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import GoalComp from './GoalComp';




const ListComp = ({ items }) => {
  console.log(items)
  return (
    <>
      <ScrollView style={styles.GoalStyle}>
        {items.map((ele, ind) => <GoalComp key={ind} items={ele} />)}

      </ScrollView></>
  )
}

const styles = StyleSheet.create({
  GoalStyle: {
    marginHorizontal: 45
  },
});

export default ListComp