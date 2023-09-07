const colorArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["navy","#1f35a9"]]
const colorObjects =[
    {"name": "red", "id": "#ff0000"},
    {"name": "green","id": "#00ff00"},
    {"name": "yellow","id": "#ffff00"},
    {"name": "navy","id": "#1f35a9"}
]

const buttonFillDropdown2 = document.getElementById("buttonFillDropdown2")
buttonFillDropdown2.addEventListener('click', addColors2)

const dropdownColor2 = document.getElementById("dropdownColor2")
dropdownColor2.addEventListener('change', setBackgroundColor2)

function fillDropdownColor2(item){
    const newElement = document.createElement("option")
    newElement.textContent = item[0]
    newElement.value = item[1]
    dropdownColor2.appendChild(newElement)
}

function fillDropdownColorObject(item){
    debugger
    const newElement = document.createElement("option")
    newElement.textContent = item.name
    newElement.value = item.id
    dropdownColor2.appendChild(newElement)
}

function addColors2(){
    dropdownColor2.innerHTML = "" //sletter eksisterende farver
    //colorArray2.forEach(fillDropdownColor2)
    colorObjects.forEach(fillDropdownColorObject)
}

function setBackgroundColor2(){
    const selectedColorIndex = dropdownColor2.selectedIndex
    const selectedOption = dropdownColor2.options[selectedColorIndex]
    const colorText = selectedOption.value
    body.style.backgroundColor = colorText
}