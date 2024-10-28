colors = [
    "Red", "Orange", "Yellow", "Gold", "Coral", "Peach", "Salmon", "Crimson", "Magenta", "Copper", "Blue", "Green", "Cyan", "Turquoise", "Teal","Violet", "Indigo", "Lavender", "Mint", "Emerald", "Black", "White", "Gray", "Beige", "Brown",
    "Charcoal", "Ivory", "Sand", "Chestnut", "Olive"

]



function colorChanger() {
let randomColor = Math.floor(Math.random() * colors.length)
document.querySelector(".color-change").innerHTML = colors[randomColor]
   document.body.style.backgroundColor = colors[randomColor]
   console.log (randomColor)
}    
  
