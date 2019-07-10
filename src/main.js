const typesToSkip = ['.svg', '.ico']
let imagesCount = 0

function replaceImageSrc(img) {
    if (img.width == 0 || img.height == 0) {
        return
    }

    const typesRegex = new RegExp(`(${typesToSkip.join('|')})[^a-zA-Z]*`)
    if(img.src.match(typesRegex) != null) {
        return
    }

    img.src = `https://placekeanu.com/${img.width}/${img.height}.jpg`
}

function processImages() {
    let images = Array.from(document.querySelectorAll('img'))
    
    if(imagesCount != images.length) {
        imagesCount = images.length
        images.map(img => replaceImageSrc(img))
    }
}

window.setInterval(processImages, 1000)
