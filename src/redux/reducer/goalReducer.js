import {
  ADD_GOAL,
  EDIT_GOAL,
  DELETE_SINGLE,
  DELETE_ALL,
} from '../contants';

const initialState = {
  list: [],

};


const goalReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_GOAL:
      return {
        ...state,
        list: [...state.list, action.payload],

      };
    case EDIT_GOAL:
      console.log('EDIT_GOAL')
      return {
        ...state, list: state.list.filter((ele) => {
          if (ele !== action.payload) { return ele }
          else { return action.payload }
        })

      };
    case DELETE_SINGLE:
      console.log('DELETE_SINGLE')
      return {
        ...state, list: state.list.filter((ele) => {
          if (ele !== action.payload) { return ele }

        })

        // list: [...state.list, action.payload],

      };
    case DELETE_ALL:
      console.log('DELETE_ALL')
      return {
        ...state,
        // list: [],

      };
    default:
      return state;
  }
};
export default goalReducer;