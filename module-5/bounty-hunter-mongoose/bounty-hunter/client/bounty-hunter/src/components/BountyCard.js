import React, { useState, useContext } from "react"
import {
	Card,
	CardContent,
	CardOverlay,
	BountyType,
	DeleteButton,
	EditButton,
	SaveButton,
	Input,
} from "./StyledComponents"
import { Context } from "../context/context"
import axios from "axios"

const BountyCard = (props) => {
	const bounty = props.info
	const bountyIndex = props.index
	const initBounty = {
		name: bounty.name,
		isLiving: bounty.isLiving,
		bountyAmt: bounty.bountyAmt,
		type: bounty.type,
		_id: bounty._id,
	}
	const [isEditMode, setIsEditMode] = useState(false)
	const { bountyList, setBountyList, getBounties } = useContext(Context)
	const [editedBounty, setEditedBounty] = useState(initBounty)

	const handleToggle = () => setIsEditMode((isEditMode) => !isEditMode)

	const handleDelete = () => {
		const newList = bountyList.filter(
			(bounty, index) => bounty[index] === bounty[bountyIndex]
		)
		console.log(newList)
		setBountyList(newList)
		axios
			.delete(`/bounties/${bounty._id}`)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => console.log(err))
		return bountyList
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setEditedBounty((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleBlur = () => {
		console.log(editedBounty._id)
	}

	const handleFocus = () => {
		console.log(editedBounty._id)
	}

	const handleToggleIsLiving = () =>
		setEditedBounty((prevState) => ({
			...prevState,
			isLiving: prevState.isLiving === true ? false : true,
		}))

	const putBounty = () => {
		axios
			.put(`/bounties/${editedBounty._id}`, editedBounty)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
		return handleToggle()
	}

	return (
		<Card>
			<CardOverlay />
			{isEditMode ? (
				<CardContent>
					<form>
						<Input
							name="name"
							className="edit"
							defaultValue={bounty.name}
							onChange={handleChange}
						/>
						<input
							type="checkbox"
							name="isLiving"
							value={editedBounty.isLiving}
							checked={editedBounty.isLiving ? true : false}
							style={{ display: "none" }}
						/>
						<Input
							type="text"
							value={editedBounty.isLiving ? "Alive" : "Dead"}
							onClick={handleToggleIsLiving}
							name="isLiving"
							onChange={handleChange}
							enabled="false"
						/>
						<Input
							name="bountyAmt"
							className="edit"
							defaultValue={bounty.bountyAmt}
							onChange={handleChange}
						/>
						<Input
							name="type"
							className="edit"
							defaultValue={bounty.type}
							onChange={handleChange}
						/>
						<Input
							name=""
							className="edit"
							defaultValue={bounty._id}
							enabled="false"
						/>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<DeleteButton type="button" onClick={handleDelete}>
								Delete Bounty
							</DeleteButton>
							<div
								style={{
									width: "165px",
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<EditButton type="button" onClick={handleToggle}>
									Cancel
								</EditButton>
								<SaveButton type="button" onClick={putBounty}>
									Save
								</SaveButton>
							</div>
						</div>
					</form>
				</CardContent>
			) : (
				<CardContent>
					<h2>{editedBounty.name}</h2>
					<h3>Status: {editedBounty.isLiving ? "Alive" : "Dead"}</h3>
					<h3>Credits: {editedBounty.bountyAmt}</h3>
					<BountyType>Bounty Type: {editedBounty.type}</BountyType>
					<h5>Bounty ID: {editedBounty._id}</h5>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: "-16px",
						}}
					>
						<DeleteButton
							type="button"
							onClick={handleDelete}
							onMouseLeave={handleBlur}
							onMouseEnter={handleFocus}
						>
							Delete Bounty
						</DeleteButton>
						<EditButton type="button" onClick={handleToggle}>
							Edit Bounty
						</EditButton>
					</div>
				</CardContent>
			)}
		</Card>
	)
}

export default BountyCard
