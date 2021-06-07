import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
function App() {
  return (
    <div className="App" style={{ transition: "all .5s linear" }}>
      <Header/>
      <Main >
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
