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
    scrollKey()
    aboutName();
    darkNav1();
    darkNav2();
    darkNav3();
    darkNav4();
    resumeB();
    resumeIcon1();
    resumeIcon2();
    navWrapper();
    //commenting out for now, until line 90 is resolved
    //dmNav();
    project1();
    project2();
    project3();
    projectButton1();
    projectButton2();
    projectButton3();
    skill1();
    skill2();
    skill3();
    skill4();
    skill5();
    skill6();
    skill7();
    skill8();
    skill9();
    skill10();
    skill11();
    skill12();
    skill13();
    skill14();
    skill15();
    skill16();
    contactForm();
    formButton();
    footer();
}

function myFunction() {
    var body = document.getElementById('body');
    body.classList.toggle("dark-mode");
}

function logo(){
    var logoH1 = document.getElementById('logoH1');
    logoH1.classList.toggle("dark-modeName");
}

function scrollKey(){
    var scrollKey = document.getElementById('scrollKey');
    scrollKey.classList.toggle("dark-modeScroll");
}


function navWrapper(){
    var wrap = document.getElementById('navWrap');
    wrap.classList.toggle("dark-modeProjects");
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
    nav1.classList.toggle("dark-modeProjects");
}

function darkNav2(){
    var nav2 = document.getElementById('nav2');
    nav2.classList.toggle("dark-modeProjects");
}

function darkNav3(){
    var nav3 = document.getElementById('nav3');
    nav3.classList.toggle("dark-modeProjects");
}

function darkNav4(){
    var nav4 = document.getElementById('nav4');
    nav4.classList.toggle("dark-modeProjects");
}

function resumeB(){
    var resumeB = document.getElementById('resumeButton');
    resumeB.classList.toggle("dark-modeScroll");
}

function resumeIcon1(){
    var icon1 = document.getElementById('resumeIcon1');
    icon1.classList.toggle("dark-mode");
}

function resumeIcon2(){
    var icon2 = document.getElementById('resumeIcon2');
    icon2.classList.toggle("dark-mode");
}

function project1(){
    var dmp1 = document.getElementById('dmp1');
    dmp1.classList.toggle("dark-modeProjects");
}

function project2(){
    var dmp2 = document.getElementById('dmp2');
    dmp2.classList.toggle("dark-modeProjects");
}

function project3(){
    var dmp3 = document.getElementById('dmp3');
    dmp3.classList.toggle("dark-modeProjects");
}

function projectButton1(){
    var pjb1 = document.getElementById('projectButton1');
    pjb1.classList.toggle("dark-modeScroll");
}

function projectButton2(){
    var pjb2 = document.getElementById('projectButton2');
    pjb2.classList.toggle("dark-modeScroll");
}

function projectButton3(){
    var pjb3 = document.getElementById('skillScroll');
    pjb3.classList.toggle("dark-modeScroll");
}

function skill1(){
    var skill1 = document.getElementById('dmli1');
    skill1.classList.toggle("dark-modeResume");
}

function skill2(){
    var skill2 = document.getElementById('dmli2');
    skill2.classList.toggle("dark-modeResume");
}

function skill3(){
    var skill3 = document.getElementById('dmli3');
    skill3.classList.toggle("dark-modeResume");
}

function skill4(){
    var skill4 = document.getElementById('dmli4');
    skill4.classList.toggle("dark-modeResume");
}

function skill5(){
    var skill5 = document.getElementById('dmli5');
    skill5.classList.toggle("dark-modeResume");
}

function skill6(){
    var skill6 = document.getElementById('dmli6');
    skill6.classList.toggle("dark-modeResume");
}

function skill7(){
    var skill7 = document.getElementById('dmli7');
    skill7.classList.toggle("dark-modeResume");
}

function skill8(){
    var skill8 = document.getElementById('dmli8');
    skill8.classList.toggle("dark-modeResume");
}

function skill9(){
    var skill9 = document.getElementById('dmli9');
    skill9.classList.toggle("dark-modeResume");
}

function skill10(){
    var skill10 = document.getElementById('dmli10');
    skill10.classList.toggle("dark-modeResume");
}

function skill11(){
    var skill11 = document.getElementById('dmli11');
    skill11.classList.toggle("dark-modeResume");
}

function skill12(){
    var skill12 = document.getElementById('dmli12');
    skill12.classList.toggle("dark-modeResume");
}

function skill13(){
    var skill13 = document.getElementById('dmli13');
    skill13.classList.toggle("dark-modeResume");
}

function skill14(){
    var skill14 = document.getElementById('dmli14');
    skill14.classList.toggle("dark-modeResume");
}

function skill15(){
    var skill15 = document.getElementById('dmli15');
    skill15.classList.toggle("dark-modeResume");
}

function skill16(){
    var skill16 = document.getElementById('contactScroll');
    skill16.classList.toggle("dark-modeResume");
}

function contactForm(){
    var formButton = document.getElementById('contactForm');
    formButton.classList.toggle("dark-modeProjects");
}

function formButton(){
    var formButton = document.getElementById('my-form-button');
    formButton.classList.toggle("dark-modeScroll");
}

function footer(){
    var footer = document.getElementById('footer');
    footer.classList.toggle("dark-modeFooter");
}

//function darkNav(){
//   var darkN = document.getElementsByClassName('navLmdm');
//   darkN.classList.toggle("dark-mode");
//}

// Contact Form AJAX
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
