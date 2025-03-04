import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import privacySlice from "./Privacy";


const store = configureStore({reducer:{
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}})

export default store;



// import { createStore } from "redux";

// let initialCount={
//   counter:0,
//   privacy: false
// };

// const counterReducer= (state = initialCount, action) =>{

//   if(action.type === 'INCREMENT'){
//     return {...state, counter:state.counter + 1}
//   }else if(action.type === 'DECREMENT'){
//     return {...state, counter:state.counter - 1}
//   }else if(action.type === 'ADD'){
//     return {...state, counter:state.counter + Number(action.payload)}
//   }else if(action.type === 'SUBTRACT'){
//     return {...state, counter:state.counter - Number(action.payload)}
//   }else if(action.type === 'PRIVACY_TOGGLE'){
//     return {...state, privacy: !state.privacy}
//   }
//   return state;
// }

// export const store = createStore(counterReducer);



