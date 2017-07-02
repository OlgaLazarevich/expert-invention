if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

var a = 5, b = 2;
result = (a + b < 4) ? 'Мало' : 'Много';


var el =  document.getElementsByClassName("k1")[0];

var d =  document.getElementsByClassName("d")[0];

console.log (el);
console.log (d);

el.addEventListener ("mousedown", fon, false)


function fon () {
//all.style.backgroundColor = "green";
d.style.animationName = "dd";
   // animation-fill-mode: forwards;
}

var el2 =  document.getElementsByClassName("k2")[0];


var d1 =  document.getElementsByClassName("d")[0];
var d2 =  document.getElementsByClassName("window2")[0];

el2.addEventListener ("mousedown", fon2, false)



function fon2 () {
//all.style.backgroundColor = "green";
d2.style.animationName = "tt2";
   // animation-fill-mode: forwards;
}

var w3 =  document.getElementsByClassName("w3")[0];

w3.addEventListener ("mousedown", fon3, false);
function fon3 () {
d2.style.animationName = "w-back";}


var w2 =  document.getElementsByClassName("w2")[0];


w2.addEventListener ("mousedown", fon4, false);
function fon4 () {
d1.style.animationName = "d-back";}



// анимация с лампой и фоном
/* var lampd =  document.getElementsByClassName("lampday")[0];
var lampn =  document.getElementsByClassName("lampnight")[0];

var windows1 =  document.getElementsByClassName("window1")[0]
lampd.addEventListener ("mousedown", lampfon, false);

lampn.addEventListener ("mousedown", lampfon, false);



function lampfon (e) {
    if ( lampd){
windows1.style.backgroundColor = "#bdbdbd";
        lampd.classList.remove("lampday");
				lampd.classList.add("lampnight");
        
    }
    if (lampn){
windows1.style.backgroundColor = "black";
        lampn.classList.remove("lampnight");
				lampn.classList.add("lampday");
        
    }
}
*/

var l =  document.getElementsByClassName("lampn")[0];
 var lampd =  document.getElementsByClassName("lampday")[0];
var lampn =  document.getElementsByClassName("lampnight")[0];

var windows1 =  document.getElementsByClassName("window1")[0]


var lampimg =  document.querySelectorAll(".lampday img");

console.log (lampd)
console.log (lampimg)


lampd.addEventListener ("mousedown", lampfon1, false);

function lampfon1 () {
    if ( lampd){
windows1.style.backgroundColor = "#bdbdbd";
        el2.style.cssText = "color: black";
lampd.style.cssText = "top: -300px;"
lampn.style.cssText = "top: -20px;"
    }}
 

lampn.addEventListener ("mousedown", lampfon2, false);


function lampfon2 () {
    if ( lampn){
windows1.style.backgroundColor = "#181818";
lampn.style.cssText = "top: -300px;"
lampd.style.cssText = "    top: -20px;"

    }}


// анимация с кнопкой контакты


var k3 =  document.getElementsByClassName("k3")[0];
var window3 =  document.getElementsByClassName("window3")[0];

k3.addEventListener ("mousedown", display3, false);
function display3 () {
window3.style.animationName = "window3";}

// возврат по стрелке блока контакты
var w4 =  document.getElementsByClassName("w4")[0];
w4.addEventListener ("mousedown", display3back, false)


function display3back () {
window3.style.animationName = "window3-back";}





