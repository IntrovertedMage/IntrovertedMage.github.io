

// Get the header
const header = document.querySelector("nav");

// Get the offset position of the navbar
const sticky = header.offsetTop;

scroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

}
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
document.addEventListener("scroll", function(){
  scroll()
})