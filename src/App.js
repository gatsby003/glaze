import React, {useEffect, useState} from 'react'
import { initBg } from './reducers/backgroundReducer'
import { useDispatch, useSelector } from 'react-redux'
import { initQuotes } from './reducers/quoteReducer'
import Main from './components/Main'
import LoadingOverlayWrapper from 'react-loading-overlay-ts'
import { loaderOff } from './reducers/loader'


const App = () => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.load)

  useEffect(() => {
    dispatch(initBg())
    dispatch(initQuotes())
    dispatch(loaderOff())
  },[dispatch])
  
  return (
    <LoadingOverlayWrapper
      active={active}
      styles={{
        overlay: (base) => ({
          ...base,
          background: 'rgba(0, 0, 0, 1)'
        })
      }}
      spinner
      text='just a moment!'
    >
      <Main/>
    </LoadingOverlayWrapper>
  );
}

export default App;
