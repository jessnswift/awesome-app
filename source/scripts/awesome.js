// Modules
// 1. Creating fragments
// 2. Creating components with factories
// 3. Adding event listeners to components
// 4. Adding components to DOM
// 5. Clearing fieldse

const DomBuilder = require("./DomBuilder");
const cardFactory = require("./CardFactory");
const inputFieldFactory = require("./InputFieldFactory");
const buttonFactory = require("./ButtonFactory");

//reference to document when writing to the DOM
const output = document.querySelector(".output")

//document fragment to buffer adding to the DOM
const fragment = document.createDocumentFragment()

// Create input field foruser to enter in text
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

fragment.appendChild(cardTextInput)

/*
attach event listener to button
1. Get value of input field
2. Create card component with text inside
*/
const button = buttonFactory("button--submit", "Create Card", function () {
    const text = cardTextInput.value
    cardTextInput.value = ""
    output.appendChild(cardFactory("card", text))
})

// Append input field and button to fragment
fragment.appendChild(button)

// Append fragment to DOM
DomBuilder(fragment, ".output")
output.appendChild(fragment)