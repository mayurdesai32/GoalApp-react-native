import {
 SHOW_MODAL,
 DONT_SHOW_MODAL
} from '../contants';

const initialState = {
 modal: false,

};


const showModalReducer = (state = initialState, action) => {
 switch (action.type) {

  case SHOW_MODAL:
   return {
    ...state,
    modal: true,

   };
  case DONT_SHOW_MODAL:
   console.log('DONT_SHOW_MODAL')
   return {
    ...state,
    modal: false,

   };

  default:
   return state;
 }
};
export default showModalReducer;