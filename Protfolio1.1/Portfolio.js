let Element1 = document.getElementById("Element1");
let Element2 = document.getElementById("Element2");
let Element3 = document.getElementById("Element3");
let Element4 = document.getElementById("Element4");

let Echo_link = document.getElementById("Echo-link");
let Echo_link2 = document.getElementById("Echo-link2");
const image = document.getElementById("Slider-img");
Element1.addEventListener('click', function() {
    image.src = 'images/img1.png';
});
Element2.addEventListener('click', function() {
    image.src = 'images/img4.png';
});
Element3.addEventListener('click', function() {
    image.src = 'images/img9.png';
});
Element4.addEventListener('click', function() {
    image.src = 'images/img7.png';
});

Element1.addEventListener('mouseover',function(){
  Echo_link.style.display = 'flex';
});
Element1.addEventListener('mouseleave',function(){
    Echo_link.style.display = 'none';
});
Echo_link.addEventListener('mouseover',function(){
    Echo_link.style.display = 'flex';
});
Echo_link.addEventListener('mouseleave',function(){
    Echo_link.style.display = 'none';
});
Element2.addEventListener('mouseover',function(){
    Echo_link2.style.display = 'flex';
});
Element2.addEventListener('mouseleave',function(){
    Echo_link2.style.display = 'none';
});
Echo_link2.addEventListener('mouseover',function(){
  Echo_link2.style.display = 'flex';
});
Echo_link2.addEventListener('mouseleave',function(){
  Echo_link2.style.display = 'none';
});

let Menu = document.getElementById("card");
let close_Menu = document.getElementById("close");
function Show(){
   Menu.style.display = 'flex';
}
close_Menu.addEventListener('click',function(){
    Menu.style.display = 'none';
 });
