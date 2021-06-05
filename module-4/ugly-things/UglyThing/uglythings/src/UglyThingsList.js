import React, {useContext} from 'react';
import { UglyContext } from './context/UglyThingsContext';
import UglyThing from './UglyThing';

const UglyThingsList = () => {
    const {listState} = useContext(UglyContext)
    return listState.map((item, index) => (<UglyThing key={index} item={item}/>))
}

export default UglyThingsList