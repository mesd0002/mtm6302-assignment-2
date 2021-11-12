//dyanmically adding photos HTML divs

const $imageGallery = document.querySelectorAll(".image_gallery")
// $imageGallery.innerHTML 

//images are all from unsplashed: https://unsplash.com/s/photos/birds
let i = 1; 
for (const img of $imageGallery) {
    
    img.innerHTML =`<img width="400" height="400" src="images/image${i}.jpg">`;
 //console.log (img)
 i++
}
 
//insert exciting event here to functions through event delegation that helps users with navigation 1

const $container = document.getElementsByClassName('container')

$imageGallery.addEventListener("click", function (e) {
    console.log(e);
});
//insert exciting event here to functions through event delegation that helps users with navigation 2
