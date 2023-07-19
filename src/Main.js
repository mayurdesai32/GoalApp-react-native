import { StyleSheet, View, Text, Modal } from 'react-native';
import React from 'react';
import ButtonComp from './component/ButtonComp';
import ListComp from './component/ListComp';
import Modalcomp from './component/Modalcomp';
import { connect } from 'react-redux';
import { ShowModal } from './redux/action/showModalAction';



const Main = ({ modal, list, ShowModal }) => {
 console.log(modal, 'hello world');

 return (
  <View style={styles.Main}>
   <Modal visible={modal}>
    <Modalcomp />
   </Modal>
   <ButtonComp fnShow={ShowModal} title='ADD NEW GOAL' />
   <Text>Main</Text>
   <ListComp items={list} />
  </View>
 );
};

const styles = StyleSheet.create({
 Main: {
  flex: 1,
  backgroundColor: '#05014a',
 },
});

const mapStateToProps = (state) => ({
 modal: state.showModal.modal,
 list: state.goal.list,
});

const mapDispatchToProps = (dispatch) => ({
 ShowModal: () => dispatch(ShowModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
