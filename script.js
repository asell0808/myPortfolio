// https://console.firebase.google.com/
// Run this To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).
// Run the following npm command to install the CLI or update to the latest CLI version.
// $ npm install -g firebase-tools

// Deploy to firebase hosting

// sign in to google
// $ firebase login
//initiate project 
// $ firebase init
// When you’re ready, deploy your web app
//Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). 
//Then, run this command from your app’s root directory:
//$ firebase deploy





// Firebase imports

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBr3fU1q1BM8uf_r5mkBOVoG2RmslcWYk0",
    authDomain: "myportfolio-2778b.firebaseapp.com",
    projectId: "myportfolio-2778b",
    storageBucket: "myportfolio-2778b.appspot.com",
    messagingSenderId: "321889752135",
    appId: "1:321889752135:web:d8f7b2976214d087fd0d62",
    measurementId: "G-9CN2J1ZSM0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);  const analytics = getAnalytics(app);

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
