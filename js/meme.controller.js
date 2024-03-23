'use strict'

let gCanvas
let gCtx

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
   
    renderGallery()
}

function renderMeme() {
    const meme = getMeme()
    const img = new Image()
    img.src = `meme-imgs/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.height, gCanvas.width)
        meme.lines.forEach(line => {

            gCtx.lineWidth = '2'
            gCtx.font = `${line.size}px Arial`
            gCtx.fillStyle = line.color
            gCtx.strokeStyle = "black"

            gCtx.baselines = 'center'
            gCtx.textAlign = 'middle'

            gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
            gCtx.fillText(line.txt, line.pos.x, line.pos.y)

            gCtx.strokeRect(line.pos.x - 10, line.pos.y - line.size, gCtx.measureText(line.txt).width + 20, line.size + 10)
        })
    }
}

function onAddText() {
    let txt = document.querySelector('input[name=text-input]').value
    setLineText(txt)
    renderMeme()
}

function onAddLine() {
    let txt = document.querySelector('input[name=text-input]').value= ''
    addLine(txt)
    renderMeme()
}

function onToggleLine() {
    let txt = document.querySelector('input[name=text-input]').value 
    toggleLine(txt)
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

function downloadImg(elLink) {

    const imgContent = gCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onDelete() { 
   gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

}
