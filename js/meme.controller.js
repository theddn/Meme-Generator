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

function renderMeme() {
    const meme = getMeme()
    const img = new Image()

    img.src = `meme-imgs/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderText(meme)
    }
}


function renderText(meme) {
    meme.lines.forEach(line => {
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.fillText(line.txt, line.x, line.y)
    })

}

function onAddText() {
    let txt = document.querySelector('input[class=text-input]').value
    setLineText(txt)
    renderMeme()
}

function onColorPicker() {
    let color = document.querySelector('input[class=color-input]').value
    setLineColor(color)
    renderMeme()
}


function onAddLine() {

    renderMeme()
}



function downloadImg(elLink) {
    const imgContent = gCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}