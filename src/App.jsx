import React from 'react';
import './App.css'
import AppRoutes from "./appRoutes";
import  myDetailsSlice from "./featuers/myDetailsSlice";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import Template from './componentsClient/Template'

const myStore = configureStore({
  reducer: {
    myDetailsSlice
  }
})

function App() {

  return (
    <Provider store={myStore}>
      <AppRoutes />
      {/* <Template/> */}
    </Provider>
  )
}

export default App
