const colorArray = ["red", "green", "yellow", "blue", "orange"]

const buttonFillDropdown = document.getElementById("buttonFillDropdown")
buttonFillDropdown.addEventListener('click', addColors)

const dropdownColor = document.getElementById("dropdownColor")
dropdownColor.addEventListener('change', setBackgroundColor)

const body = document.querySelector("body")

function addColors(){
    dropdownColor.innerHTML = "" //sletter eksisterende farver
    colorArray.forEach(fillDropdownColor)
}

function fillDropdownColor(item){
    const newElement = document.createElement("option")
    newElement.textContent = item
    dropdownColor.appendChild(newElement)
}

function setBackgroundColor(){
    const selectedColorIndex = dropdownColor.selectedIndex
    const selectedColor = dropdownColor.options[selectedColorIndex]
    const colorText = selectedColor.innerText
    body.style.backgroundColor = colorText
}