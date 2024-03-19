'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery() 
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('.editor').style.display = 'none'
}

//render the meme on the canvas and the text on the image
function renderMeme() {
    const meme = getMeme()
    const img = new Image()

    img.src = `meme-imgs/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        meme.lines.forEach(line => {
            gCtx.font = `${line.size}px Arial`
            gCtx.fillStyle = line.color
            gCtx.fillText(line.txt, line.x, line.y)
        })
    }
}

function onTextInput() {
    let txt = document.querySelector('input[class=text-input]').value
    setLineTxt(txt)
    renderMeme()
}

