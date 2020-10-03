const canvasContainer = document.getElementById("canvas-container");
const particles = document.querySelectorAll(".particle");
const paletteContainer = document.querySelector(".palette-container");
const deleteButton = document.getElementById("delete-button");
const colors = document.getElementsByClassName("palette-item");
const current = document.querySelector(".current-color");
const colorPicker = document.getElementById("color-picker");
const loadButton = document.getElementById("load-button");
const saveButton = document.getElementById("save-button");

let theColor = "";

//picking the color
paletteContainer.addEventListener("click", function(e) {
    switch(e.target.id) {
        case "red":
        theColor = "red";
        current.style.backgroundColor = theColor;
        break;
        case "yellow":
        theColor = "yellow";
        current.style.backgroundColor = theColor;
        break;
        case "black":
        theColor = "black";
        current.style.backgroundColor = theColor;
        break;
        case "turquoise":
        theColor = "turquoise";
        current.style.backgroundColor = theColor;
        break;
        case "purple":
        theColor = "purple";
        current.style.backgroundColor = theColor;
        break;
        case "white":
        theColor = "white";
        current.style.backgroundColor = theColor;
        break;
    };
});

//changing the color of a pixel on click
canvasContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("particle")){
    e.target.style.backgroundColor = theColor;
}});


//bonus 1: changing the color of pixels 
//by pressing and dragging(like a paintbrush)

canvasContainer.addEventListener("mousedown", activateBrush);
canvasContainer.addEventListener("mouseup", deactivateBrush); 

function activateBrush(){
    for (particle of particles){
        particle.addEventListener("mouseenter", changeColor);
    }
}
function changeColor(){
    this.style.backgroundColor = theColor;
}
function deactivateBrush(){
    for (particle of particles){
        particle.removeEventListener("mouseenter", changeColor);
    }
}

//button for clearing the canvas
deleteButton.addEventListener("click", function(){
    for (particle of particles){
        particle.style.backgroundColor = "";
    }
})

// bonus 2: adding color picker
colorPicker.addEventListener("input", function(e){
    current.style.backgroundColor = e.target.value;
});
colorPicker.addEventListener("change", function(e){
    theColor = e.target.value;
})


// bonus 3: save and load the drawing to/from the Local storage
saveButton.addEventListener('click', function() {
let customPicture = [];
for (particle of particles){
customPicture.push(particle.style.backgroundColor);
}

localStorage.clear();
localStorage.setItem('customPicture', JSON.stringify(customPicture));

});

loadButton.addEventListener('click', function() {
    let picture = JSON.parse(localStorage.getItem('customPicture'));

	for (let i = 0; i <= picture.length - 1; i++) {
		particles[i].style.backgroundColor = picture[i];
	}
});
