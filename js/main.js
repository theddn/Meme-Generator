'use strict'

// data structure managed by meme-service

// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ url: 'meme-imgs(square)/1.jpg' }]

let gCanvas
let gCtx



function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')    
}

function onSelectImg() {
    const elImg = new Image()
    elImg.src = 'meme-imgs (square)/1.jpg'


    elImg.onload = () =>
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function onDrawText(text = "hello", x = gCanvas.width / 2, y = gCanvas.height / 6) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'

    gCtx.fillStyle = 'green'

    gCtx.font = '48px Arial'
    gCtx.textAlign = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}


function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

}