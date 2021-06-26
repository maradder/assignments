import React, { useState } from "react"
import { ContentContainer } from "../StyledComponents"
import SectionContainer from "../SectionContainer"

const Portfolio = (props) => {
	const [showBusinessTimeFigma, setShowBusinessTimeFigma] = useState(false)
	const [showMarioFigma, setShowMarioFigma] = useState(false)
	return (
		<SectionContainer
			heading="Portfolio"
			id="portfolio"
			className="sectionContainer"
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "64px",
					margin: "auto 5vw",
				}}
			>
				<ContentContainer
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "60vw",
						height: "70vh",
						padding: "8px",
					}}
				>
					{showBusinessTimeFigma ? (
						<iframe
							title="Business Time Figma"
							style={{
								border: "1px solid rgba(0, 0, 0, 0.1)",
								width: "800",
								height: "450",
							}}
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyBZjnC4RyWzep2BaX8UQGx%2FBusiness-Time%3Fnode-id%3D0%253A1"
							allowfullscreen
						></iframe>
					) : (
						<iframe
							title="Business Time"
							src={"https://marcusradder.com/chubbys-choco/index.html"}
							style={{
								zoom: "1",
								// MozTransform: "scale(0.75)",
								// MozTransformOrigin: "0 0",
								// OTransform: "scale(0.75)",
								// OTransformOrigin: "0 0",
								// WebkitTransform: "scale(0.75)",
								// WebkitTransformOrigin: "0 0",
								width: "100%",
								height: "100%",
								border: "1px solid azure",
								borderRadius: "6px",
							}}
						/>
					)}
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							height: "fit-content",
							alignItems: "center",
						}}
					>
						<p style={{ margin: "16px 16px", color: "azure" }}>
							{" "}
							Built with:
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-html5"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-css3-alt"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-figma"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-github"
							></i>
						</p>
						<button
							type="button"
							onClick={() => setShowBusinessTimeFigma(!showBusinessTimeFigma)}
							style={{ height: "32px" }}
						>
							{showMarioFigma ? "Back to Live Site" : "Show Figma Design"}
						</button>
					</div>
				</ContentContainer>

				<ContentContainer
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "60vw",
						height: "70vh",
						padding: "8px",
					}}
				>
					{showMarioFigma ? (
						<iframe
							title="Mario Figma"
							style={{
								border: "1px solid rgba(0, 0, 0, 0.1)",
								width: "100%",
								height: "100%",
							}}
							src={
								"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKJQIBjlAsieGiVQ2vzqVw1%2FMario-s-Pest-Control"
							}
							allowfullscreen
						></iframe>
					) : (
						<iframe
							title="Mario's Pest Control"
							src={"https://marcusradder.com/marios-pest-control/index.html"}
							style={{
								zoom: "1",
								// MozTransform: "scale(0.75)",
								// MozTransformOrigin: "0 0",
								// OTransform: "scale(0.75)",
								// OTransformOrigin: "0 0",
								// WebkitTransform: "scale(0.75)",
								// WebkitTransformOrigin: "0 0",
								width: "100%",
								height: "100%",
								border: "1px solid azure",
								borderRadius: "6px",
								backgroundColor: "#ffffff",
							}}
						/>
					)}
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							height: "fit-content",
							alignItems: "center",
						}}
					>
						<p style={{ margin: "16px 16px" }}>
							{" "}
							Built with:
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-html5"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-css3-alt"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-js-square"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-react"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-figma"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-github"
							></i>
						</p>
						<button
							type="button"
							onClick={() => setShowMarioFigma(!showMarioFigma)}
							style={{ height: "32px" }}
						>
							{showMarioFigma ? "Back to Live Site" : "Show Figma Design"}
						</button>
					</div>
				</ContentContainer>
				{/* <ContentContainer
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						width: "60vw",
						height: "70vh",
						padding: "8px",
					}}
				></ContentContainer> */}
				<ContentContainer
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "60vw",
						height: "70vh",
						padding: "8px",
					}}
				>
					<iframe
						title="Javascript DJ"
						src={"https://marcusradder.com/dj-js/index.html"}
						style={{
							zoom: "1",
							// MozTransform: "scale(0.75)",
							// MozTransformOrigin: "0 0",
							// OTransform: "scale(0.75)",
							// OTransformOrigin: "0 0",
							// WebkitTransform: "scale(0.75)",
							// WebkitTransformOrigin: "0 0",
							width: "100%",
							height: "100%",
							border: "1px solid azure",
							borderRadius: "6px",
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							height: "fit-content",
							alignItems: "center",
						}}
					>
						<p style={{ margin: "16px 16px" }}>
							{" "}
							Built with:
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-html5"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-css3-alt"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-js-square"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-react"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-figma"
							></i>
							<i
								style={{ margin: "8px 16px", fontSize: "32px", color: "azure" }}
								class="fab fa-github"
							></i>
						</p>
						<button
							type="button"
							onClick={() => setShowMarioFigma(!showMarioFigma)}
							style={{ height: "32px" }}
						>
							{showMarioFigma ? "Back to Live Site" : "Show Figma Design"}
						</button>
					</div>
				</ContentContainer>
			</div>
		</SectionContainer>
	)
}

export default Portfolio
