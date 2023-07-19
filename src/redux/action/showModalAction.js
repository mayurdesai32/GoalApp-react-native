import {
 SHOW_MODAL,
 DONT_SHOW_MODAL
} from '../contants';


export const dontShowModal = () => {
 return ({ type: DONT_SHOW_MODAL });
};

export const ShowModal = () => {
 return ({ type: SHOW_MODAL, });
};


