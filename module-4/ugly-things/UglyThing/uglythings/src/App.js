
import React, {useEffect, useContext} from 'react';
import axios from 'axios'
import Form from './Form'
import UglyThingsList from './UglyThingsList';
import { UglyContext } from './context/UglyThingsContext';


const App = () => {
  const {getUglyThings} = useContext(UglyContext)

  useEffect(() => {
    getUglyThings()
    
    return () => {
      console.log('success')
    }
  }, [])
    
  

    return (
      <div className="App" style={{minHeight: '100vh', backgroundColor: "pink"}}>
            <Form/>
            <UglyThingsList/>
        </div>
    );
    }  

export default App