import React from 'react';
import {    Badge,
            H1,
            H5,
            P,
            Comments,
            HeaderBand,
            BodyBand,
            BottomBand } from './StyledComponents'

const BadgeList = (props) => {

    return (
        <Badge key={props.key} data={props} style={{border: `${props.badgenumber % 2 ? "1px solid #a7150c" : "1px solid #009EFF"}`}}>

            <HeaderBand  style={{backgroundColor: `${props.badgenumber % 2 ? "#a7150c" : "#009EFF"}`}} >
                <H1>Hello</H1>
                <H5>my name is</H5>
            </HeaderBand>
            <BodyBand >
                <P>Name: {`${props.firstname} ${props.lastname}`}</P>
                <P>{}</P>
                <P>Birthplace: {props.birthplace}</P>
                <P>Favorite Food: {props.favfood}</P>
                <P>Email: {props.email}</P>
                <Comments>Comments: {props.comments}</Comments>
            </BodyBand>
            <BottomBand style={{backgroundColor: `${props.badgenumber % 2 ? "#a7150c" : "#009EFF"}`}}/>
        </Badge>
    )
}

export {
    BadgeList,
}