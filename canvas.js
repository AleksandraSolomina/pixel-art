const canvasContainer = document.getElementById("canvas-container");
const particles = document.getElementsByClassName("particle");
const paletteContainer = document.getElementById("palette-container");
const theColor;
const colors = document.getElementsByClassName("palette-item");

canvasContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("particle")){
    e.target.style.backgroundColor = theColor;
}});
for (let color of colors){
color.addEventListener("click", function() {
    theColor = color.style.background;
})
};




//create some 'theColor' to insert ^^ and further usage
//