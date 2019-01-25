/*function cycleImage(){
    var img = new array

    img[0] = document.images[0].src
    img[1] = document.images[1].src
    img[2] = document.images[2].src
    img[3] = document.images[3].src

    var currentimg = img[0]

    if(currentimg == img[0]) {
        currentimg = img[1]
    }

    if(currentimg == img[1]) {
        currentimg = img[2]
    }
    if(currentimg == img[2]) {
        currentimg = img[3]
    }
}*/


/*$(document).ready(function() {
    $(".image").click(function() {
    $(this).toggleClass("transparent");
  });
  });
*/

$(document).ready(function() {
    $("#cycleOnclick").click(function() {
    $("#cycle img.top").toggleClass("transparent");
  });
  });
