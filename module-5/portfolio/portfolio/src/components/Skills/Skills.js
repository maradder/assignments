import React from "react"
import {
	GreenStar,
	GreyStar,
	ContentContainer,
	StyledLink,
} from "../StyledComponents"
import SectionContainer from "../SectionContainer"

const Skills = (props) => {
	const skillsList = [
		{ skill: "CSS", level: 4 },
		{ skill: "HTML", level: 4 },
		{ skill: "Node.js", level: 3 },
		{ skill: "Command Line Interface", level: 3 },
		{ skill: "Javascript", level: 3 },
		{ skill: "MVC Pattern", level: 3 },
		{ skill: "Object Oriented Programming", level: 3 },
	]

	const toolsList = [
		{ skill: "Windows", level: 4 },
		{ skill: "Figma", level: 4 },
		{ skill: "MS Office", level: 4 },
		{ skill: "Mac", level: 3 },
		{ skill: "Firefox", level: 3 },
		{ skill: "Notepad++", level: 3 },
		{ skill: "Webkit browsers", level: 2 },
		{ skill: "Atlassian / Jira", level: 2 },
		{ skill: "Git", level: 2 },
		{ skill: "Internet Explore", level: 2 },
		{ skill: "Affinity Photo", level: 2 },
	]

	const skillStars = (level) => {
		return level === 5 ? (
			<td>
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
			</td>
		) : level === 4 ? (
			<td>
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreyStar className="fas fa-star" />
			</td>
		) : level === 3 ? (
			<td>
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreyStar className="fas fa-star" />
				<GreyStar className="fas fa-star" />
			</td>
		) : level === 2 ? (
			<td>
				<GreenStar className="fas fa-star" />
				<GreenStar className="fas fa-star" />
				<GreyStar className="fas fa-star" />
				<GreyStar className="fas fa-star" />
				<GreyStar className="fas fa-star" />
			</td>
		) : (
			""
		)
	}

	return (
		<SectionContainer
			heading="Skills"
			id="skills"
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				maxHeight: "fit-content",
			}}
		>
			<ContentContainer
				style={{
					gridRow: "4/5",
					gridColumnStart: "3",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<table>
					<thead>
						<tr>
							<th className="tableHeader">
								<h3>Skills</h3>
							</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{skillsList.map((skill) => {
							return (
								<tr>
									<td
										style={{
											display: "flex",
											flexDirection: "row",
											width: "max-content",
											borderBottom: ".5px solid #cccccc30",
										}}
									>
										<p style={{ width: "35rem", color: "azure" }}>
											{skill.skill}
										</p>
										{skillStars(skill.level)}
									</td>
								</tr>
							)
						})}
					</tbody>
					<tfoot></tfoot>
				</table>
				<StyledLink to="/portfolio">
					<p>See my portfolio for examples</p>
				</StyledLink>
			</ContentContainer>
			<br />
			<br />
			<br />
			<ContentContainer
				style={{
					gridRow: "10/11",
					gridColumnStart: "3",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<table>
					<thead>
						<tr>
							<th className="tableHeader">
								<h3>Tools</h3>
							</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{toolsList.map((skill) => {
							return (
								<tr>
									<td
										style={{
											display: "flex",
											flexDirection: "row",
											width: "max-content",
											borderBottom: ".5px solid #cccccc30",
										}}
									>
										<p style={{ width: "35rem", color: "azure" }}>
											{skill.skill}
										</p>
										{skillStars(skill.level)}
									</td>
								</tr>
							)
						})}
					</tbody>
					<tfoot></tfoot>
				</table>
				<StyledLink to="/portfolio">
					<p>See my portfolio for examples</p>
				</StyledLink>
			</ContentContainer>
		</SectionContainer>
	)
}

export default Skills
