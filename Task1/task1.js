let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let tabs = document.getElementById("tabs")
button1.addEventListener("click", function(){
    tabs.style.background = "red"
    tabs.style.color = "azure"
    tabs.textContent = "Content for Tab 1(Red Page)"
})
button2.addEventListener("click", function(){
    tabs.style.background = "blue"
    tabs.style.color = "grey"
    tabs.textContent = "Content for Tab 2(Blue Page)"
})
button3.addEventListener("click", function(){
    tabs.style.background = "orange"
    tabs.style.color = "black"
    tabs.textContent = "Content for Tab 3(Orange Page)"
})