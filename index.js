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