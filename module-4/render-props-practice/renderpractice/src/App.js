import React from 'react'
import DataFetcher from './DataFetcher'

const App = () => {
  return (
    <div> 
      <DataFetcher url={`https://swapi.dev/api/people/5`}/>
    </div>
  )
}

export default App