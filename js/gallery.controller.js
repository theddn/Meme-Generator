'use strict'

function renderGallery() {
    const imgs = getImgs()
    let strHtml = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery').innerHTML = strHtml.join('')
}


function onImgSelect(imgId) {
    setMemeImgId(imgId)
    renderMeme()
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'

}