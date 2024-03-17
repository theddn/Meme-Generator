'use strict'

// data structure managed by meme-service

var gImgs = [{ id: 1, url: 'meme-imgs/1.jpg', keywords: ['funny', 'cat'] }]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines:  [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        color: 'red',
    }]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gCanvas
let gCtx

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
 
    renderMeme()
 
}

function renderMeme() {
   let elImg = new Image()
    elImg.src = 'meme-imgs/1.jpg'


    elImg.onload = () =>
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

        
}


function onSelectImg(){
    renderMeme()
}


function drawText(txt= "hello",x = gCanvas.width / 2, y = gCanvas.height / 6) {

    gCtx.fillStyle = 'green'
    gCtx.strokeStyle = 'black'
    gCtx.font = '50px Arial'

    gCtx.textAlign = 'center'
    gCtx.textBaseLine = 'middle'


    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)


}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

}

