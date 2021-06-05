import React, {useContext, useState} from 'react';
import axios from 'axios'
import { UglyContext } from './context/UglyThingsContext';

const Form = () => {
    const {setNewUglyThing, getUglyThings} = useContext(UglyContext)
	const [formState, setFormState] = useState({
        _id: "",
        title: "",
        description: "",
        imgUrl: ""
    })

    const handleChange = e => {
		const {name, value} = e.target
		setFormState(prevState => (
			{	...prevState,
				[name]: value
			}
		))
		}

    const handleSubmit = e => {
		  e.preventDefault()
          const newItem = {
                                        title: formState.title,
                                        description: formState.description,
                                        imgUrl: formState.imgUrl
                          }
		  setNewUglyThing({
                            title: `${formState.title}`,
                            description: `${formState.description}`,
                            imgUrl: `${formState.imgUrl}`
                        })

            
          axios.post('https://api.vschool.io/marcusradder/thing/', newItem)
                        
          getUglyThings()
    }
    return(
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={formState.title} onChange={handleChange} placeholder="Title" ></input>
                    <input type="text" name="description" value={formState.description} onChange={handleChange} placeholder="Description" ></input>
                    <input type="text" name="imgUrl" value={formState.imgUrl} onChange={handleChange} placeholder="Image URL" ></input>
                    <button type="submit">Submit</button>
                </form>
    )
}

export default Form