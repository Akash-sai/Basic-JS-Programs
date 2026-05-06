const menubtn = document.getElementById("x");
const navlinks = document.getElementById("navLinks");

menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});

const btn =document.getElementById("btn");

//  Click Event
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "red";
})


// Double Click Event
const btn2 =document.getElementById("btn2");
btn2.addEventListener("dblclick", () => {
    btn2.style.backgroundColor = "blue";
})

// Mousedown Down Event
const btn3 =document.getElementById("btn3");
btn3.addEventListener("mousedown", () => {
    btn3.style.backgroundColor = "violet";
})

// MouseUp Event
const btn4 =document.getElementById("btn4");
btn4.addEventListener("mouseup", () => {
    btn3.style.backgroundColor = "violet";
})

// MouseMove Event
const btn5 =document.getElementById("btn5");
btn5.addEventListener("mousedown", () => {
    btn5.style.backgroundColor = "violet";
})

// MouseOver Event
const btn6 =document.getElementById("btn6");
btn6.addEventListener("mouseover", () => {
    btn6.style.backgroundColor = "green";
})

// MouseOut Event
const btn7 =document.getElementById("btn7");    
btn7.addEventListener("mouseout", () => {    
    btn7.style.backgroundColor = "yellow";
} )

// Mouse Enter Event    
const btn8 =document.getElementById("btn8");
btn8.addEventListener("mouseenter", () => {    
    btn8.style.backgroundColor = "orange";
})

// Mouse Leave Event
const btn9 =document.getElementById("btn9");
btn9.addEventListener("mouseleave", () => {    
    btn9.style.backgroundColor = "orange";  
})

// Context Menu Event
const btn10 =document.getElementById("btn10");
btn10.addEventListener("contextmenu", () => {    
    btn10.style.backgroundColor = "orange";
})

// Mouse Wheel Event
const btn11 =document.getElementById("btn11");  
btn11.addEventListener("wheel", () => {    
    btn11.style.backgroundColor = "orange";
}) 