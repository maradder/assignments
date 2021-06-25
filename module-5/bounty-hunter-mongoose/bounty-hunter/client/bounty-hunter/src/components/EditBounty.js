import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { Form, Input } from "./StyledComponents"
import { Context } from "../context/context"

const AddBounty = () => {
	const { bountyList, setBountyList, getBounties } = useContext(Context)
	const [newBounty, setNewBounty] = useState({
		name: "",
		isLiving: "",
		bountyAmt: "",
		type: "",
	})

	const [bountyName, setBountyName] = useState("")
	const [bountyIsLiving, setBountyIsLiving] = useState("")
	const [bountyAmt, setBountyAmt] = useState("")
	const [bountyType, setBountyType] = useState("")

	const [focusedName, setFocusedName] = useState(false)
	const [focusedIsLiving, setFocusedIsLiving] = useState(false)
	const [focusedAmt, setFocusedAmt] = useState(false)
	const [focusedType, setFocusedType] = useState(false)

	const postBounties = async () => {
		setNewBounty({
			name: bountyName,
			isLiving: bountyIsLiving,
			bountyAmt: bountyAmt,
			type: bountyType,
		})
		return await axios.post("/bounties", newBounty)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// setNewBounty({
		// 	name: bountyName,
		// 	isLiving: bountyIsLiving,
		// 	bountyAmt: bountyAmt,
		// 	type: bountyType,
		// })
		postBounties()
		getBounties()
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		name === "bountyName"
			? setBountyName(value)
			: name === "bountyIsLiving"
			? setBountyIsLiving(value)
			: name === "bountyAmt"
			? setBountyAmt(value)
			: name === "bountyType"
			? setBountyType(value)
			: console.log("error")
		return console.log(name)
	}

	const handleBlur = (e) => {
		const { name } = e.target
		name === "bountyName"
			? setFocusedName(false)
			: name === "bountyIsLiving"
			? setFocusedIsLiving(false)
			: name === "bountyAmt"
			? setFocusedAmt(false)
			: name === "bountyType"
			? setFocusedType(false)
			: console.log("error")
		return console.log(name)
	}

	const handleFocus = (e) => {
		const { name } = e.target
		name === "bountyName"
			? setFocusedName(true)
			: name === "bountyIsLiving"
			? setFocusedIsLiving(true)
			: name === "bountyAmt"
			? setFocusedAmt(true)
			: name === "bountyType"
			? setFocusedType(true)
			: console.log("error")
		return console.log(name)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder="Enter Bounty's Name"
				type="text"
				name="bountyName"
				value={bountyName}
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedName}
				tabIndex="1"
			/>
			<Input
				placeholder="Is this Bounty Living?"
				type="text"
				name="bountyIsLiving"
				value={bountyIsLiving}
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedIsLiving}
				tabIndex="2"
			/>
			<Input
				placeholder="What is the Reward?"
				type="text"
				name="bountyAmt"
				value={bountyAmt}
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedAmt}
				tabIndex="3"
			/>
			<Input
				placeholder="Is the Bounty Sith or Jedi?"
				type="text"
				name="bountyType"
				value={bountyType}
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedType}
				tabIndex="4"
			/>
			<button type="submit">Submit</button>
		</Form>
	)
}

export default AddBounty
