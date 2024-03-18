'use strict'

let gCanvas
let gCtx

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')

    renderMeme()
}


function renderMeme() {
    drawImg()
    onDrawText()
}


function drawImg() {
    let img = new Image()
    img.src = 'meme-imgs/1.jpg'

    img.onload = () =>
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}


function drawText(txt ,x, y) {

    gCtx.fillStyle = 'green'
    gCtx.strokeStyle = 'black'
    gCtx.font = '50px Arial'

    gCtx.textAlign = 'center'
    gCtx.textBaseLine = 'middle'


    gCtx.fillText(txt,x, y)
    gCtx.strokeText(txt,x, y)
}

function onDrawText(){
    drawText('trump' , gCanvas.width/2, gCanvas.height/2)
}


function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

}

//gallery 

function onSelectImg(elImg) {

    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

}
