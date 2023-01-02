import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Main from './Pages/Main';

const App = () => {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element= {<Main />}>
          <Route index element= {<Homepage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;