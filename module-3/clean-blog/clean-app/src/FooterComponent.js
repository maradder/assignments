import React from 'react'
import FacebookLogo from './facebookLogo.png'
import GithubLogo from './github-logo.svg'
import  { Footer, FooterIcons, FooterRow, FooterText } from './styledComponents'

const FooterComponent = () => {
    return (
<Footer>
        <FooterRow>
            <FooterIcons id="twitter" src="https://chaminade.edu/wp-content/uploads/2019/08/Twitter-Icon-black-1-500x500.png" />
            <FooterIcons id="facebook" src={FacebookLogo}/>
            <FooterIcons id="github" src={GithubLogo}/>
        </FooterRow>
        <FooterRow><FooterText>Copyright © Your Website 2021</FooterText></FooterRow>
        </Footer>
    )
}

export default FooterComponent