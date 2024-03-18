'use strict'

let gImgs = [
    {
        id: 1,
        url: 'meme-imgs/1.jpg',
    }]

let gMeme = {
    selectedImgId: 0,
    lines: [{
        txt: 'trump',
        size: 20,
        color: 'red',
    }]
}



// create factory image 

function getMeme() {
    return gMeme
}




