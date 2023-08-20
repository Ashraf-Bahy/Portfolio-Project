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

const scr = function (i)
{
    const section = sections[i];
    section.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

secbuttons.forEach((secbutton, index) => {
    secbutton.addEventListener("click", () =>scr(index))
});