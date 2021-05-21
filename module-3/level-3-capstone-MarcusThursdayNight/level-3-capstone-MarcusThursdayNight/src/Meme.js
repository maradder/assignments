import React from 'react'
import {  BottomText,
    ButtonContainer,
    ButtonLarge,
    ContentContainer,
    GlobalStyle,
    ImgContainer,
    ImgWrapper,
    MemeNumber,
    MemeCardWrapper,
    MiddleColumn,
    SavedMemeCard,
    TopText } from './StyledComponents';


export default function Meme(props){

    console.log(props.data.url)

return(
    <div>            
    {props.data.map(parts =>{
                return (
                <MemeCardWrapper key={parts.id}>
                    <MemeNumber>{`Meme #${parts.id}`}</MemeNumber>
                    <SavedMemeCard>
                            <ContentContainer>
                            <MiddleColumn>
                                <ImgContainer>
                                <ImgWrapper memeimage={parts.url}>
                                    <TopText
                                        top={parts.topText.top} 
                                        left={parts.topText.left} 
                                        color={parts.color} 
                                        >
                                        { parts.box0 }
                                    </TopText>
                                    <BottomText 
                                        top={parts.bottomText.top}
                                        left={parts.bottomText.left}
                                        color={parts.color}
                                        >
                                        {parts.box1}
                                    </BottomText>
                                </ImgWrapper>
                                </ImgContainer>
                                </MiddleColumn>
                                </ContentContainer>
                        </SavedMemeCard>
                            <ButtonContainer>
                              <ButtonLarge onClick={() => props.handleDelete(parts.id)}>Delete</ButtonLarge>
                              <ButtonLarge onClick={() => props.handleEdit(parts.id)}>Edit</ButtonLarge>
                            </ButtonContainer>
                    </MemeCardWrapper>
                )})}
        </div>)

}
