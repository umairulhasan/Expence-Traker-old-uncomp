import React from 'react';

const ReducerPractice = (state , action) => {
 switch (action){
    case 'INCREMENT':
    return state + 1
 }
}

export default ReducerPractice;
