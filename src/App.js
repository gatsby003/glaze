import React from 'react'

import Main from './components/Main'
import TimeAndGreeting from './components/TimeAndGreeting/TimeAndGreeting'
import Quote from './components/Quote'

const App = () => {
  return (
    // todo : refactor into top - middle - lower bar components
    <Main>
      <div style={{width : "100%" , display : "flex", flexDirection : "row", justifyContent: "space-between", }}>
        {/* <h3 width="100%">Weather</h3>
        <h3>Countdowns</h3> */}
      </div>
      <TimeAndGreeting/>
      <Quote/>
    </Main>
  );
}

export default App;
