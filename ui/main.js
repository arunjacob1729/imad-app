console.log('Loaded!');


var element = document.getElementById('main-text');
element.innerHTML='Hello Dude';
var img = document.getElementByID('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 1;
   img.style.marginLeft = marginLeft +"px";
}

img.onClick = function(){
var interval =setInterval(moveLeft,100)
};