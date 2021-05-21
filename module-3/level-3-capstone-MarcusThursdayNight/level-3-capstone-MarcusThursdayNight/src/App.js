import React, { Component } from 'react';
import Meme from "./Meme";
// import {MDCSlider} from '@material/slider'
import {  BottomText,
          ButtonContainer,
          ButtonLarge,
          ColorDot,
          ColorPalette,
          ContentContainer,
          DPad,
          DPadUp,
          DPadRight,
          DPadDown,
          DPadLeft,
          DPadWrapper,
          EditorHeadline,
          FuzzBall,
          FuzzBall2,
          GlobalStyle,
          ImgContainer,
          ImgWrapper,
          Input,
          Label,
          LeftColumn,
          MemeCard,
          MemeNumber,
          MemeCardWrapper,
          MiddleColumn,
          RightColumn,
          TextContainer,
          TopText } from './StyledComponents';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      randomNumber: this.randomNum(),
      memes: [],
      memeInUse: {
                  color: "#ffffff",
                  id:"",
                  box0: "",
                  box1: "",
                  url: "",
                  height: "",
                  width: "",
                  topText: {
                            top: 0,
                            left: 0,
                            rotation: 0,
                            },
                  bottomText: {
                              top: 0,
                              left: 0,
                              rotation: 0,
                              },
                },
                
      savedMemes: []
      
    };
  }

  randomNum = () => Math.floor(Math.random()* 99)
  currentTime = () => Number(new Date().getMilliseconds())
  randomIdNumber = () => this.randomNum() * this.currentTime()
            
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(
      (result) => {
        let memeArray = result.data.memes
        this.setState(prevState => {
          return {
          ...prevState,
          isLoaded: true,
          memes: result.data.memes,
          memeInUse: {    ...prevState.memeInUse,
                          id: this.randomIdNumber(),
                          box0: "",
                          box1: "",
                          url: memeArray[this.randomNum()].url,
                          height: memeArray[this.randomNum()].height,
                          width: memeArray[this.randomNum()].width,
                          topText: {
                                    top: 0,
                                    left: 140,
                                    rotation: 0,
                                    },
                          bottomText: {
                                    top: 130,
                                    left: 140,
                                    rotation: 0,
                                  }
                          },
          
          }
      });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
    }

  
  getNewImage = e => {
    e.preventDefault()
    let newMeme = this.state.memes[this.randomNum()]

    this.setState({   randomNumber: this.randomNum(),
                      memeInUse: {
                        id: this.randomIdNumber(),
                        box0: "",
                        box1: "",
                        url: newMeme.url,
                        height: newMeme.height,
                        width: newMeme.width,
                        topText: {
                                  top: 0,
                                  left: 140,
                                  rotation: 0,
                                  },
                        bottomText: {
                                    top: 130,
                                    left: 140,
                                    rotation: 0,
                                    }
                        
                      },
                  })

                } 

  saveMeme = e => {
    e.preventDefault()
    let newMeme = this.state.memes[this.randomNum()]

        this.setState((prevState) => {
          return {
                    ...prevState,
                    memeInUse: {
                                ...prevState.memeInUse,
                                id: this.randomIdNumber(),
                                box0: "Enter Text Here",
                                box1: "Enter Text Here",
                                height: newMeme.height,
                                width: newMeme.width,
                                color: prevState.memeInUse.color,
                                topText: {
                                          top: prevState.memeInUse.topText.top,
                                          left: prevState.memeInUse.topText.left,
                                          rotation: prevState.memeInUse.topText.rotation,
                                          },
                                bottomText: {
                                            top: prevState.memeInUse.bottomText.top,
                                            left: prevState.memeInUse.bottomText.left,
                                            rotation: prevState.memeInUse.bottomText.rotation,
                                            }
                    },
                    savedMemes: [ ...prevState.savedMemes, prevState.memeInUse]
          }
        })
  }

  handleClick = e => {
    e.preventDefault()
    const clickTarget = e.target
    const buttonType = clickTarget.getAttribute('data-buttonid')
    if (buttonType === "upTop") { 
        this.setState(prevState => {
          return {
            ...prevState,
            memeInUse: {
                        ...prevState.memeInUse,
                        topText: {
                                  ...prevState.memeInUse.topText,
                                    top: Number(prevState.memeInUse.topText.top) - 70
                                  }
                      }
                }
        }) 
    }
    else if (buttonType === "rightTop") { 
      this.setState(prevState => {
        return {
          ...prevState,
          memeInUse: {
            ...prevState.memeInUse,
            topText: {
              ...prevState.memeInUse.topText,
              left: Number(prevState.memeInUse.topText.left) + 70
            }
          }
        }
      }) 
    }
    else if (buttonType === "downTop") { 
        this.setState(prevState => {
          return {
            ...prevState,
            memeInUse: {
                        ...prevState.memeInUse,
                        topText: {
                                  ...prevState.memeInUse.topText,
                                    top: Number(prevState.memeInUse.topText.top) + 70
                                  }
                      }
                }
        }) 
    }
    else if (buttonType === "leftTop") { 
        this.setState(prevState => {
          return {
            ...prevState,
            memeInUse: {
                        ...prevState.memeInUse,
                        topText: {
                                  ...prevState.memeInUse.topText,
                                    left: Number(prevState.memeInUse.topText.left) - 70
                                  }
                      }
                }
        }) 
    }

    if (buttonType === "upBottom") { 
      this.setState(prevState => {
        return {
          ...prevState,
          memeInUse: {
                      ...prevState.memeInUse,
                      bottomText: {
                                ...prevState.memeInUse.bottomText,
                                  top: Number(prevState.memeInUse.bottomText.top) - 70
                                }
                    }
              }
      }) 
  } 
  else if (buttonType === "rightBottom") { 
    this.setState(prevState => {
      return {
        ...prevState,
        memeInUse: {
          ...prevState.memeInUse,
          bottomText: {
            ...prevState.memeInUse.bottomText,
            left: Number(prevState.memeInUse.bottomText.left) + 70
          }
        }
      }
    }) 
  }
  else if (buttonType === "downBottom") { 
      this.setState(prevState => {
        return {
          ...prevState,
          memeInUse: {
                      ...prevState.memeInUse,
                      bottomText: {
                                ...prevState.memeInUse.bottomText,
                                  top: Number(prevState.memeInUse.bottomText.top) + 70
                                }
                    }
              }
      }) 
  }
  else if (buttonType === "leftBottom") { 
      this.setState(prevState => {
        return {
          ...prevState,
          memeInUse: {
                      ...prevState.memeInUse,
                      bottomText: {
                                ...prevState.memeInUse.bottomText,
                                  left: Number(prevState.memeInUse.bottomText.left) - 70
                                }
                    }
              }
      }) 
  }
  }

    handleColorPick = e => {
      e.preventDefault()
      const clickTarget = e.target
      console.log(clickTarget.getAttribute('data-key'))
      this.setState(prevState => {
                                  return {...prevState,
                                          memeInUse: {...prevState.memeInUse,
                                                      color: e.target.getAttribute('data-key')
                                                    }
                    }}
                    )
    }

    colorChoiceArry = [ '#E34B3B', '#D82F64', '#9333AE', '#6540B5', '#4754B3', '#4D97F1', '#000000', 
                        '#4DAAF2', '#52BBD3', '#3E9588', '#62AD54', '#94C150', '#CEDA45', '#AAAAAA',
                        '#FAEA4A', '#F5C128', '#F19920', '#EE5D2C', '#745649', '#667D8A', '#FFFFFF' ]

  handleChange = e => {
    const {name, value} = e.target
      this.setState(prevState => {
        return {  
                  ...prevState,
                  memeInUse: {
                              ...prevState.memeInUse,
                              [name]: value
                            }
              }
      })
  }
  
  handleDelete = id => {
    const memes = this.state.savedMemes.slice()
    const updatedMemes = memes.filter(meme => {
      return meme.id !== id ? meme : null
    })
    
    this.setState(prevState => {
      return {
              ...prevState,
              savedMemes: updatedMemes,
      }
  })
  }
    
  handleEdit = id => {
    const memes = this.state.savedMemes.slice()
    const editMeme = memes.filter(meme => {
      return meme.id === id
    })

    const [meme] = editMeme

    window.scrollTo(0,0)

    this.setState(prevState => {
      return {
        ...prevState,
        memeInUse: {
          id: meme.id,
          box0: meme.box0,
          box1: meme.box1,
          url: meme.url,
          height: meme.height,
          width: meme.width,
          topText: {
                    top: meme.topText.top,
                    left: meme.topText.left,
                    rotation: meme.topText.rotation,
                    },
          bottomText: {
                      top: meme.bottomText.top,
                      left: meme.bottomText.left,
                      rotation: meme.bottomText.rotation,
                      },
        },
      }
    })

    const deleteMeme = this.state.savedMemes.slice()
    const updatedMemes = deleteMeme.filter(meme => {
      return meme.id !== id ? meme : null
    })
    
    this.setState(prevState => {
      return {
              ...prevState,
              savedMemes: updatedMemes,
      }
    })
  }
  
  

  render() {
    
    const { error, isLoaded} = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      
    return (
          <div className="memeList">
            <GlobalStyle/>
            <FuzzBall />
            <FuzzBall2/>
            <MemeCardWrapper>
                <MemeNumber>{`Meme #${this.state.randomNumber}`}</MemeNumber>
                <ContentContainer>
                <LeftColumn>
                  <DPadWrapper>
                Position Top Text
                  <DPad >
                        <DPadUp data-buttonid="upTop" onClick={this.handleClick}/>
                        <DPadRight data-buttonid="rightTop" onClick={this.handleClick}/>
                        <DPadDown data-buttonid="downTop" onClick={this.handleClick}/>
                        <DPadLeft data-buttonid="leftTop" onClick={this.handleClick}/>
                  </DPad>
                  </DPadWrapper>
                  <DPadWrapper>
                  Position Bottom Text
                  <DPad>
                        <DPadUp data-buttonid="upBottom" onClick={this.handleClick}/>
                        <DPadRight data-buttonid="rightBottom" onClick={this.handleClick}/>
                        <DPadDown data-buttonid="downBottom" onClick={this.handleClick}/>
                        <DPadLeft data-buttonid="leftBottom" onClick={this.handleClick}/>
                  </DPad> 
                  </DPadWrapper>
                </LeftColumn>
                <MiddleColumn>
                <MemeCard>
                  <ImgContainer>
                    <ImgWrapper memeimage={this.state.memeInUse.url}>
                    <TopText
                      top={this.state.memeInUse.topText.top} 
                      left={this.state.memeInUse.topText.left} 
                      color={this.state.memeInUse.color} 
                      >
                      { this.state.memeInUse.box0 }
                    </TopText>
                    <BottomText 
                      top={this.state.memeInUse.bottomText.top}
                      left={this.state.memeInUse.bottomText.left}
                      color={this.state.memeInUse.color}
                      >
                      { this.state.memeInUse.box1 }
                    </BottomText>
                  </ImgWrapper>
                  </ImgContainer>
                  <TextContainer>
                    <EditorHeadline>Add Text</EditorHeadline>
                    <Label htmlFor="box0">Top Text
                      <Input  placeholder="Top Text" 
                              type="text" 
                              name="box0" 
                              value={ this.state.memeInUse.box0 } 
                              onChange={ this.handleChange } 
                              checked/>
                      </Label>
                    <Label htmlFor="box1">Bottom Text
                      <Input  placeholder="Bottom Text" 
                              type="text" 
                              name="box1" 
                              value={ this.state.memeInUse.box1} 
                              onChange={ this.handleChange }/>
                      </Label>
                      {/* <MDCSlider/> */}
                    <ColorPalette>
                        {this.colorChoiceArry.map(dot => <ColorDot className={dot} dotcolor={dot} data-key={dot} key={ dot } activecolor={this.state.memeInUse.color} onClick={this.handleColorPick }/>)}
                    </ColorPalette>
                    </TextContainer>
                </MemeCard>
                <ButtonContainer>
                  <ButtonLarge onClick={(e) => this.getNewImage(e)}>Get New Image</ButtonLarge>
                  
                  <ButtonLarge onClick={(e) => this.saveMeme(e)}>Save This Image</ButtonLarge>
              </ButtonContainer>
                </MiddleColumn>
                <RightColumn>
                </RightColumn>
                </ContentContainer>
            </MemeCardWrapper>
            <Meme data={this.state.savedMemes} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
          </div>
      )
    }
  }
}

export default App;
