'use strict'

let gImgs = [
    {
        id: 1,
        url: 'meme-imgs/1.jpg',
    }]

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'type here',
        size: 40,
        color: 'yellow',
        x: 50,
        y: 50,
    }]
}


function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}