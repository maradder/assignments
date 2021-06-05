const getNewImage = e => {
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

export default getNewImage