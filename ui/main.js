console.log('Loaded!');


var element = document.getElementById('main-text');
element.innerHTML='Hello Dude';
var img = document.getElementByID('madi');
var margin;
function moveLeft(){
    margin= margin - 1;
   img.style.margin= margin +"px";
}

img.onClick = function(){
var interval =setInterval(moveLeft,100)
};