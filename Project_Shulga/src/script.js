var b1 = document.getElementById ("b1");
var b2 = document.getElementById ("b2");

b1.addEventListener ("click", function (){
var img = document.getElementById ('myImage');
img.src = 'img/pic_bulbon.gif';
});

b2.addEventListener ("click", function (){
    var img = document.getElementById ('myImage');
    img.src = 'img/pic_bulboff.gif';
    });