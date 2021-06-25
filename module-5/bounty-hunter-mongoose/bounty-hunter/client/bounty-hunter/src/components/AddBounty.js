import React, { useState, useContext } from "react"
import { SaveButton, Form, Input } from "./StyledComponents"
import { Context } from "../context/context"

const AddBounty = () => {
	const initBounty = {
		name: "",
		isLiving: true,
		bountyAmt: "",
		type: "",
	}
	const { getBounties, postData } = useContext(Context)
	const [newBounty, setNewBounty] = useState(initBounty)

	const [focusedName, setFocusedName] = useState(false)
	const [focusedIsLiving, setFocusedIsLiving] = useState(false)
	const [focusedAmt, setFocusedAmt] = useState(false)
	const [focusedType, setFocusedType] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		postData("bounties", newBounty)
		setNewBounty(initBounty)
		getBounties()
	}

	const handleToggleIsLiving = () =>
		setNewBounty((prevState) => ({
			...prevState,
			isLiving: prevState.isLiving === true ? false : true,
		}))

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewBounty((prevState) => ({
			...prevState,
			[name]: value,
		}))
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
			: name.getAttribute === "bountyIsLiving"
			? setFocusedIsLiving(true)
			: name === "bountyAmt"
			? setFocusedAmt(true)
			: name === "bountyType"
			? setFocusedType(true)
			: console.log("error")
		return console.log(name)
	}

	return (
		<Form
			onSubmit={handleSubmit}
			name="addBountyForm"
			onBlur={handleBlur}
			onMouseLeave={handleBlur}
			onFocus={handleFocus}
			onMouseEnter={handleFocus}
			focusState={focusedName}
		>
			<h2 style={{ color: "#f2f2f2" }}>Add New Bounty</h2>
			<Input
				placeholder="Enter Bounty's Name"
				type="text"
				name="name"
				value={newBounty.name}
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedName}
				tabIndex="1"
			/>
			<input
				type="checkbox"
				name="isLiving"
				value={newBounty.isLiving}
				checked={newBounty.isLiving ? true : false}
				onChange={handleToggleIsLiving}
				style={{ display: "none" }}
			/>
			<Input
				type="text"
				value={newBounty.isLiving ? "Alive" : "Dead"}
				onClick={handleToggleIsLiving}
				name="isLiving"
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedIsLiving}
				enabled="false"
			/>
			<Input
				placeholder="What is the Reward?"
				type="text"
				name="bountyAmt"
				value={newBounty.bountyAmt}
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
				name="type"
				value={newBounty.type}
				onChange={handleChange}
				onBlur={handleBlur}
				onMouseLeave={handleBlur}
				onFocus={handleFocus}
				onMouseEnter={handleFocus}
				focusState={focusedType}
				tabIndex="4"
			/>
			<SaveButton type="submit">Add New Bounty</SaveButton>
		</Form>
	)
}

export default AddBounty
