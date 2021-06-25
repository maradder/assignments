import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Context } from "../context/context"
import { lightTheme, darkTheme } from "../components/Themes"

const useToggleSlider = (props) => {
	const [toggleSliderState, setToggleSliderState] = useState(false)

	const ToggleSlider = (props) => {
		const Slider = styled.div`
			display: flex;
			flex-direction: row;
			justify-content: ${toggleSliderState ? "flex-end" : "flex-start"};
			height: 36px;
			width: 96px;
			background-color: ${(props) => props.theme.tertiary};
			border-radius: 36px;
			margin: 16px 32px;
			padding: 2px 2px;
			cursor: pointer;
			transition-duration: 300ms;

			@media screen and (max-width: 500px) {
				width: 36px;
				padding: auto;
				justify-content: center;
				align-content: center;
				margin: 0;
			}
		`
		const handleToggle = () => setToggleSliderState((prevState) => !prevState)

		return (
			<fragment
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					margin: "auto",
				}}
			>
				<input
					type="checkbox"
					style={{ display: "none" }}
					checked={toggleSliderState}
					onChange={() => console.log("changed")}
				/>
				<Slider
					toggleState={toggleSliderState}
					onClick={handleToggle}
					className="slideToggleBody"
					theme={props.theme}
				>
					<div
						className="slideToggleSwitch"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "32px",
							width: "32px",
							borderRadius: "50%",
							backgroundColor: toggleSliderState
								? darkTheme.buttonText
								: lightTheme.buttonText,
						}}
					>
						{toggleSliderState ? (
							<i
								style={{ fontSize: "24px", color: "azure" }}
								class="far fa-moon"
							></i>
						) : (
							<i
								style={{ fontSize: "24px", color: "azure" }}
								class="far fa-sun"
							></i>
						)}
					</div>
				</Slider>
			</fragment>
		)
	}
	return { toggleSliderState, ToggleSlider }
}

export default useToggleSlider
