import React from 'react';
import { DayNightToggle } from './StyledComponents';
import { ThemeContextConsumer } from './themeContext';


const SliderToggle = (props) => {
    return (
        <ThemeContextConsumer>
            {context => (
            <DayNightToggle className={ 'fas fa-sun' } onClick={context.toggleTheme} ></DayNightToggle>
            )}
        </ThemeContextConsumer>
        )
}

export default SliderToggle