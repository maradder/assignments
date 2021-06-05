import React, {useState, useContext} from 'react';
import { UglyContext } from './context/UglyThingsContext';
import axios from 'axios'


// const EditContext = createContext()

const UglyThing = props => {
    const {getUglyThings,
        postUglyThing,
        putUglyThing,
        changedUglyThing,
        testFunc,
        setChangedUglyThing,
        setDeleteUglyThing} = useContext(UglyContext)
    const [edit, setEdit] = useState(false)


    const [editFormState, setEditFormState] = useState({
        _id: props.item._id,
        title: props.item.title,
        description: props.item.description,
        imgUrl: props.item.imgUrl
    })

    const handleChange = e => {
		const {name, value} = e.target
		setEditFormState(prevState => (
			{	...prevState,
				[name]: value
			}
		))
		}

    const handleClickEdit = e => {
        setEdit(!edit)
    }

    const delUglyThing = e => {
        e.preventDefault()
        let editedId = e.target.getAttribute('data-id')
        let uglyCard = e.target.parentNode
		axios.delete(`https://api.vschool.io/marcusradder/thing/${editedId}`)
        uglyCard.parentNode.remove()
        getUglyThings()

	}

    const handleSaveEdit = e => {
        e.preventDefault()
        let editedId = e.target.getAttribute('data-id')
        let editedTitle = e.target.getAttribute('data-title')
        let editedDescription = e.target.getAttribute('data-description')
        let editedImgUrl = e.target.getAttribute('data-imgurl')
        console.log(editedId)
        axios.put(`https://api.vschool.io/marcusradder/thing/${editedId}/`, {title: editFormState.title, description: editFormState.description, imgUrl: editFormState.imgUrl})
        setChangedUglyThing({
                                _id: editedId,
                                title: editFormState.title,
                                description: editFormState.description,
                                imgUrl: editFormState.imgUrl
                            })
        handleClickEdit()
        getUglyThings()

        testFunc()
    }



    const norm = 
                    <div style={{maxHeight: "450px", minHeight: "450px", maxWidth: "300px", minWidth: "300px", margin: "100px auto", backgroundColor: "yellow", borderRadius:"8px",border: "1px solid #000000", display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                        <h1>{editFormState.title}</h1>
                        <p>{editFormState.description}</p>
                        <p>{editFormState._id}</p>
                        <div style={{maxHeight:"400px"}}>
                            <img style={{maxHeight:"250px", margin: "0 auto", borderRadius:"8px"}} src={`${editFormState.imgUrl}`} alt="Ugly"/>
                        </div>
                        <button style={{justifySelf: "flex-end"}} onClick={handleClickEdit}>Edit</button>
                        <button data-id={props.item._id} type="button" onClick={delUglyThing}>Delete</button> 
                    </div>                        

    const editing = 
                    <form data-id={props.item._id} data-title={props.item.title} data-description={props.item.description} data-imgurl={props.item.imgUrl} onSubmit={handleSaveEdit} style={{maxHeight: "450px", minHeight: "450px", maxWidth: "300px", minWidth: "300px", margin: "100px auto", borderRadius:"8px",border: "1px solid #000000", display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                                    <input type="text" placeholder={props.item.title}  name="title" onChange={handleChange} defaultValue={props.item.title}/>
                                    <input type="text" placeholder={props.item.description} name="description" onChange={handleChange} defaultValue={props.item.description}/>
                                    <input type="text" placeholder={props.item.imgUrl} name="imgUrl" onChange={handleChange} defaultValue={props.item.imgUrl}/>
                                    <img style={{maxHeight:"250px", margin: "0 auto", borderRadius:"8px"}} src={`${editFormState.imgUrl}`} alt="Ugly"/>
                                    <button  type="submit" style={{justifySelf: "flex-end"}} >Save Changes</button>
                    </form>                                             
    return (
        <div style={{maxHeight: "450px", minHeight: "450px", maxWidth: "300px", minWidth: "300px", margin: "auto"}}>
            {edit === false ? norm : editing}
        </div>
    )

}



export default UglyThing