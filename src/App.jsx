import { useState } from 'react'
import './App.css'
import Main from './Components/Main'
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './redux/store'
function App() {


  return (
    <div>
      <Provider store={Store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    </div>
  )
}

export default App
