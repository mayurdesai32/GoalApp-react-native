import {
 ADD_GOAL,
 EDIT_GOAL,
 DELETE_SINGLE,
 DELETE_ALL,
} from '../contants';


export const Add_to_list = (item) => {
 console.log(item);
 return ({ type: ADD_GOAL, payload: item });
};

export const edit_goal = (item) => {
 console.log('edit_goal')
 return ({ type: EDIT_GOAL, payload: item });
};


export const delete_goal = (item) => {

 console.log('DELETE_SINGLE', item)
 return ({ type: DELETE_SINGLE, payload: item });
};



export const delete_all = () => {
 console.log('delete_all')
 return ({ type: DELETE_ALL });
};
