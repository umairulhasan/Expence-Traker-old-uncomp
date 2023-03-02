import React from 'react';

const ReducerPractice = (state , action) => {
 switch (action){
    case 'INCREMENT':
    return state + 1
 }
}

export default ReducerPractice;


// Action {   dispatction function hit at action

//     Type : 'INCREMENT',
//     The new value to cjhange
// }