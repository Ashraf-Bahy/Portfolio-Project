"use strict"
const projects = document.querySelectorAll(".project");
const buttons = document.querySelectorAll(".button1");

const view = function (name)
{
    projects.forEach((project) => 
        {
            if (project.className.includes(name))
                project.classList.remove("hide")
        });
}

const selectbutton = function (event)
{
    buttons.forEach((button) => button.classList.remove("clicked"));
    event.target.classList.add("clicked");
    
    const myclass = event.target.className;
    
    projects.forEach((project) => project.classList.add("hide"));
    if (myclass.includes("all") || myclass.includes("c++")) view("c++");
    if (myclass.includes("all") || myclass.includes("java")) view("java");
    if (myclass.includes("all") || myclass.includes("ht")) view("ht");
}

for (const button of buttons)
    button.addEventListener("click", (selectbutton));


//////////////////////////////////////////////////////////////////////////////////////////

const secbuttons = document.querySelectorAll(".taps a");
const sections = document.querySelectorAll("section");
const footsecbuttons = document.querySelectorAll(".taps2 a");

const scr = function (i)
{
    const section = sections[i];
    section.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

secbuttons.forEach((secbutton, index) => {
    secbutton.addEventListener("click", () =>scr(index))
});

footsecbuttons.forEach((footsecbutton, index) => {
    footsecbutton.addEventListener("click", () =>scr(index))
});

//////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    const anchs = document.querySelectorAll('.navbar a');
    const head = document.querySelector('.navbar h1');
    const firstSection = document.querySelector('.sec1');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition >= firstSection.offsetHeight) {
      nav.classList.add('navbar-scrolled');
      anchs.forEach(anch => {anch.classList.add('a-scrolled')});
      head.classList.add('h1-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
      anchs.forEach(anch => {anch.classList.remove('a-scrolled')});
      head.classList.remove('h1-scrolled');
    }
  });