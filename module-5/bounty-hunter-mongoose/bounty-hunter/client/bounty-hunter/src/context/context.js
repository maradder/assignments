import React, { useState, createContext } from "react"
import axios from "axios"

const Context = createContext()

const ContextProvider = (props) => {
	const [bountyList, setBountyList] = useState([])

	const getBounties = () => {
		axios
			.get("/bounties")
			.then((res) => setBountyList(res.data))
			.catch((err) => console.log(err))
		return () => {
			console.log("Initial call")
		}
	}

	const postData = (endpoint, obj) => {
		axios
			.post(`/${endpoint}`, obj)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	return (
		<Context.Provider
			value={{ bountyList, setBountyList, getBounties, postData }}
		>
			{props.children}
		</Context.Provider>
	)
}

export { Context, ContextProvider }
