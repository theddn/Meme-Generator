'use strict'

let gCanvas
let gCtx

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('.editor').style.display = 'none'

    renderGallery()

}

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

function onAddText() {
    let txt = document.querySelector('input[name=text-input]').value
    setLineText(txt)
    renderMeme()
}

function onColorPicker() {
    let color = document.querySelector('input[name=color-input]').value
    setLineColor(color)
    renderMeme()
}

function onIncreaseFont() {
    let meme = getMeme()
    increaseFont(meme)
    renderMeme()
}

function onDecreaseFont() {
    let meme = getMeme()
    decreaseFont(meme)
    renderMeme()
}


function onAddLine() {

    renderMeme()
}

function downloadImg(elLink) {
    const imgContent = gCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}