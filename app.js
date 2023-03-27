function product(productName, imagePath,){
    this.productName = productName
    this.imagePath = imagePath
    this.timesShown = 0
}

function getRandomProducts(arrayOfProducts){
    let randomProducts = [];
    let randomIndex1 = Math.floor(Math.random() * arrayOfProducts)
    let randomIndex2 = Math.floor(Math.random() * arrayOfProducts)
    let randomIndex3 = Math.floor(Math.random() * arrayOfProducts)
    //let randomIndex = Math.random() * arrayOfProducts.length

}
//how to display an image from Javascript
let imageHtml = document.createElement("img")
imageHtml.src = "./img/bag.jpg"
let bodyHtml = document.querySelector("body")
bodyHtml.append(imageHtml)

document.body.appendChild('img');