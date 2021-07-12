import React, { useContext, useEffect } from "react"
import BountyCard from "./BountyCard"
import { BountyList } from "./StyledComponents"
import { Context } from "../context/context"

const Bounties = props => {
	const { bountyList, getBounties } = useContext(Context)

	useEffect(() => {
		getBounties()
	}, [])
	return (
		<BountyList>
			{bountyList.map((bounty, index) => {
				return (
					<BountyCard
						info={bounty}
						key={bounty._id}
						tag={bounty._id}
						index={index}
					>
						{index}
					</BountyCard>
				)
			})}
		</BountyList>
	)
}

export default Bounties
