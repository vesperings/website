const img_array = Array.from({ length: 135 }, (_, index) => ({
  src: `/WEBSITE/PHOTOS/DIGICAM/PHOTOS/${index + 1}.JPG`
}));

let currentIndex = 0;

// Go backwards
function myFunction2() {
  currentIndex =
    (currentIndex - 1 + img_array.length) % img_array.length;
  document.getElementById("myImg").src =
    img_array[currentIndex].src;
}

// Go forwards
function myFunction() {
  currentIndex =
    (currentIndex + 1) % img_array.length;
  document.getElementById("myImg").src =
    img_array[currentIndex].src;
}
