function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
            resolve(image)
        }

        image.onerror = () => {
            reject(new Error("Cloud not load image" + url))
        }
    });
}

