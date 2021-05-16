const heading = document.querySelector(".title")
const grandParent = document.querySelector(".grand_parent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
const textInput = document.querySelector(".input_text")
const textDisplay = document.querySelector(".text_display")



// Mouse Over Event

heading.addEventListener('mouseover', (event) => {
    let bg_color = event.target.style.backgroundColor
    if(bg_color === "green") {
        event.target.style.backgroundColor = "tomato"
    }
    else event.target.style.backgroundColor = "green"
})

// {once: true}


// On Click Event

grandParent.addEventListener("click", (event) => {
    // console.log("Hey! This is Grand Parent")
    // console.log(event)
    let bg_color = grandParent.style.backgroundColor
    if(bg_color === "yellow") {
        grandParent.style.backgroundColor = "black"
    }
    else grandParent.style.backgroundColor = "yellow"
    
})

parent.addEventListener("click", (event) => {
    // console.log("Hey! This is Parent")
    // console.log(event)
    let bg_color = parent.style.backgroundColor
    if(bg_color === "red") {
        parent.style.backgroundColor = "yellow"
    }
    else parent.style.backgroundColor = "red"
})

child.addEventListener("click", (event) => {
    // console.log("Hey! This is Child")
    // console.log(event)
    let bg_color = child.style.backgroundColor
    if(bg_color === "black") {
        child.style.backgroundColor = "red"
    }
    else child.style.backgroundColor = "black"
})


// on change event
textInput.addEventListener("change", (event) => {
    // console.log(event.target.value)
    textDisplay.innerHTML = event.target.value;
})