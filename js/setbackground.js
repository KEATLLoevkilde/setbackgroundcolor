
//Input
const inputColor = document.querySelector(".inputColor")

//Button Color
const setColor = document.querySelector(".setColor")
setColor.textContent = "Change Color"
setColor.addEventListener('click', setBackgroundColor)

//Button IncreaseFont
const increaseFont = document.querySelector(".increaseFont")
increaseFont.textContent = "increase font size"
increaseFont.addEventListener('click', increasePTagFont)

//Button Decrease
const decreaseFont = document.querySelector(".decreaseFont")
decreaseFont.textContent = "decrease font size"
decreaseFont.addEventListener('click', decreasePTagFont)

//Body
const body = document.querySelector("body")
body.addEventListener('keyup', setBackgroundColor)
body.addEventListener("input", useColorPicker)

//Color Value
const colorValue = document.querySelector(".colorValue")

//Color Picker
const colorPicker = document.getElementById("colorPicker")

//pTags
const pTags = document.getElementsByTagName('p')
const pArray = Array.from(pTags) // laver et array fra pTags for at kunne bruge forEach metoden

//h1
const  hOnes = document.getElementsByTagName('h1')
const hOne = hOnes.item(0)
hOne.style.backgroundColor = "green"  // overwriter css-filens h1 setting

//Functions
function setBackgroundColor(){
    body.style.backgroundColor = inputColor.value
    colorValue.value = inputColor.value
}
function useColorPicker(){
    body.style.backgroundColor = colorPicker.value
    colorValue.value = colorPicker.value
}
function increaseFontSize(element){
    const currentFontSize = window.getComputedStyle(element).fontSize
    const newFontSize = parseFloat(currentFontSize) + 1
    element.style.fontSize = newFontSize + "px"
}
function decreaseFontSize(element){
    const currentFontSize = window.getComputedStyle(element).fontSize
    const newFontSize = parseFloat(currentFontSize) - 1
    element.style.fontSize = newFontSize + "px"
}
function increasePTagFont(){
    pArray.forEach(increaseFontSize)
}
function decreasePTagFont(){
    pArray.forEach(decreaseFontSize)
}

//Logs
console.log(inputColor)
console.log(setColor)
console.log(body)
console.log(colorPicker)

