'use strict'

function renderGallery() {
    const imgs = getImgs()
    let strHtml = imgs.map(img => {
        return `<img  class="gallery-item" src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery').innerHTML = strHtml.join('')
}


function onImgSelect(imgId) {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'

    setMemeImgId(imgId)
    renderMeme()
}

function onGallerySelect(ev) {
    document.querySelector('.gallery').style.display = 'flex'
    document.querySelector('.editor').style.display = 'none'
    renderMeme()
    renderGallery()


}
