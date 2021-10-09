import React, {useEffect} from 'react'
import { initBg } from './reducers/backgroundReducer'
import { useDispatch } from 'react-redux'
import { initQuotes } from './reducers/quoteReducer'

import Main from './components/Main'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBg())
    dispatch(initQuotes())
  },[dispatch])
  
  return (
    <Main/>
  );
}

export default App;
