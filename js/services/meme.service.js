'use strict'

let gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg' },
    { id: 2, url: 'meme-imgs/2.jpg' },
    { id: 3, url: 'meme-imgs/3.jpg' },
    { id: 4, url: 'meme-imgs/4.jpg' },
    { id: 5, url: 'meme-imgs/5.jpg' },
    { id: 6, url: 'meme-imgs/6.jpg' },
    { id: 7, url: 'meme-imgs/7.jpg' },
    { id: 8, url: 'meme-imgs/8.jpg' },
    { id: 9, url: 'meme-imgs/9.jpg' },
    { id: 10, url: 'meme-imgs/10.jpg' },
    { id: 11, url: 'meme-imgs/11.jpg' },
    { id: 12, url: 'meme-imgs/12.jpg' },
    { id: 13, url: 'meme-imgs/13.jpg' },
    { id: 14, url: 'meme-imgs/14.jpg' },
    { id: 15, url: 'meme-imgs/15.jpg' },
    { id: 16, url: 'meme-imgs/16.jpg' },
    { id: 17, url: 'meme-imgs/17.jpg' },
    { id: 18, url: 'meme-imgs/18.jpg' }
]

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Write text here',
        size: 40,
        color: '#FF0000',
        pos: { x: 100, y: 50 },
    }]
}

function addLine() {
    gMeme.lines.push({
        txt: 'Write text here',
        size: 40,
        color: '#FFFFFF',
        pos: { x: 100, y: gCanvas.height - 50 },
    })
    gMeme.selectedLineIdx++


}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt


}

function setLineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 5
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function toggleLine() {
    gMeme.lines.length - 1 === gMeme.selectedLineIdx
        ? (gMeme.selectedLineIdx = 0)
        : gMeme.selectedLineIdx++
}

function setMemeImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}