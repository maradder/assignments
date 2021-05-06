import React from 'react'
import places from './spots.js'
import dollarLogo from './dollarSign.svg'
import { Button } from './styledComponents.js'
import { Card } from './styledComponents.js'
import { CardBodyCopy } from './styledComponents.js'
import { CardHeading } from './styledComponents.js'
import { CardSubheading } from './styledComponents.js'
import { ContentContainerChild } from './styledComponents.js'
import { ContentContainerColumn } from './styledComponents.js'
import { ContentContainerRow } from './styledComponents.js'
import { DollarSign } from './styledComponents.js'
import { ImgFlags } from './styledComponents.js'


const Columnize = {
    display: "flex", 
    flexDirection: "column",
    alignItems: "center"

}

const PricePoint = (props) => {
    const priceForTrip = props.priceForTrip;
    if (priceForTrip < 500) {
        return [
            <DollarSign src={dollarLogo} />
        ]
    }
    else if (priceForTrip >= 500 && priceForTrip < 1000) {
        return [
                <DollarSign src={dollarLogo} />,
                <DollarSign src={dollarLogo} />
        ]
    }
    else {
        return [
            <DollarSign src={dollarLogo} />,
            <DollarSign src={dollarLogo} />,
            <DollarSign src={dollarLogo} />
        ];
    }
    
}

const VacaySpots = () => {
    return (
        <ContentContainerRow className="container">
            {places.map(destination =>
            <div>
                <ImgFlags className="cards" src={ destination.imgUrl } alt={ destination.imgAlt }></ImgFlags>
                <Card>
                <ContentContainerColumn>
                <ContentContainerRow>
                    <PricePoint priceForTrip={destination.price} />
                </ContentContainerRow>
                <ContentContainerChild>
                    <CardBodyCopy className="timeToGo">{ `It's best to go in the ${destination.timeToGo}` }</CardBodyCopy>
                </ContentContainerChild>
                <ContentContainerChild style={ Columnize }>
                    <CardSubheading>Trip costs around:</CardSubheading>
                    <CardHeading className="price">{ `$${destination.price}` }</CardHeading>
                </ContentContainerChild>
                <ContentContainerChild >
                    <CardHeading className="placeName" >{ destination.place }</CardHeading>
                </ContentContainerChild>
                </ContentContainerColumn>
                    {/* <ContentContainerColumn>
                        <ContentContainerChild >
                            <CardHeading className="placeName" >{ destination.place }</CardHeading>
                        </ContentContainerChild>
                        <ContentContainerChild>
                            <CardSubheading>Trip costs around:</CardSubheading>
                            <CardHeading className="price">{ `$${destination.price}` }</CardHeading>
                        </ContentContainerChild>
                        <ContentContainerChild>
                        <CardBodyCopy className="timeToGo">{ `It's best to go in the ${destination.timeToGo}` }</CardBodyCopy>
                        </ContentContainerChild>
                        <ContentContainerRow>
                            <PricePoint priceForTrip={destination.price} />
                        </ContentContainerRow>
                    </ContentContainerColumn> */}
                </Card>
                    <div className="blurredCard"></div>
            </div>
            )}
        </ContentContainerRow>
    )
}

export default VacaySpots