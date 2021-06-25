import React, { useContext } from "react"
import { Context } from "../../context/context"
import { StyledHeader } from "../StyledComponents"
import useToggleSlider from "../useToggleSlider"

const Header = (props) => {
	const { setThemeState } = useContext(Context)
	const { toggleSliderState, ToggleSlider } = useToggleSlider()

	setThemeState(toggleSliderState)
	return (
		<StyledHeader theme={props.theme}>
			<h5
				style={{
					color: "azure",
					margin: "auto",
					fontFamily: "'Montserrat', sans-serif",
					cursor: "pointer",
				}}
				onClick={() => alert("This will have email functionality")}
			>
				marcusradder@gmail.com
			</h5>
			<ToggleSlider />
		</StyledHeader>
	)
}

export default Header
