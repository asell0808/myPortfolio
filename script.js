// Site Vanilla JS

// this is not the final product.
// classList.toggle("dark-mode") was not working when I was selecting HTML classes using DOM
// For instance:
// function logo(){
//    var logoH1 = document.getElementsByClassName('logo');
//  logoH1.classList.toggle("dark-mode");
//}
// This would not function for some reason. I believe it has something to do
// with the interaction between .classList and getElementsByClassName()
// I came to this conclusion because I can change the style of the CSS with 
// document.getElementById(), but not the other way around.

// for my final product, I would like to simply have a few functions that alter different things
// as it currently stands, I do not have the answer, but I will find it.

function lmdm(){
    myFunction();
    logo();
    aboutName();
    darkNav1();
    darkNav2();
    darkNav3();
    darkNav4();
    resumeB();
    resumeIcon1();
    resumeIcon2();
    navWrapper();
    //commenting out for now, until line 49 is resolved
    //dmNav();
}

function myFunction() {
    var body = document.getElementById('body');
    body.classList.toggle("dark-mode");
}

function logo(){
    var logoH1 = document.getElementById('logoH1');
    logoH1.classList.toggle("dark-modeName");
}

function navWrapper(){
    var wrap = document.getElementById('navWrap');
    wrap.classList.toggle("dark-modeNav");
}

function aboutName(){
    var name = document.getElementById('myName');
    name.classList.toggle("dark-modeName");
}

/*
This is almost a solution, however, it only changes the 
first class item and not all of the class items

function dmNav(){
    const dmNavi = document.querySelectorAll('.dmNav');
    dmNavi.item(i = (".dmNav")).classList.toggle("dark-mode");
}
*/

function darkNav1(){
    var nav1 = document.getElementById('nav1');
    nav1.classList.toggle("dark-mode");
}

function darkNav2(){
    var nav2 = document.getElementById('nav2');
    nav2.classList.toggle("dark-mode");
}

function darkNav3(){
    var nav3 = document.getElementById('nav3');
    nav3.classList.toggle("dark-mode");
}

function darkNav4(){
    var nav4 = document.getElementById('nav4');
    nav4.classList.toggle("dark-mode");
}

function resumeB(){
    var resumeB = document.getElementById('resumeButton');
    resumeB.classList.toggle("dark-modeResume");
}

function resumeIcon1(){
    var icon1 = document.getElementById('resumeIcon1');
    icon1.classList.toggle("dark-mode");
}

function resumeIcon2(){
    var icon2 = document.getElementById('resumeIcon2');
    icon2.classList.toggle("dark-mode");
}

//function darkNav(){
//   var darkN = document.getElementsByClassName('navLmdm');
//   darkN.classList.toggle("dark-mode");
//}
