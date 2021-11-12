const $imageGallery = document.querySelectorAll(".image_gallery")
// $imageGallery.innerHTML 

//images are all from unsplashed: https://unsplash.com/s/photos/birds
let i = 1; 
for (const img of $imageGallery) {
    
    img.innerHTML =`<img width="400" height="400" src="images/image${i}.jpg">`;
 //console.log (img)
 i++
}
 
$imageGallery.addEventListener("click", (e) {
    console.log
}
