
//Locate the node/ elements you need.
let form = document.getElementById("awesomeFormName");
let words = document.createElement("ul")
let dynamic = document.getElementById("dynamic")
document.body.appendChild(words)


/* create a function/fuctions that 
- collects the form values
- appends the values to the list of Adjectives
- make sure that the adjective is clickable
- make sure the list of adjectives is updated when a word is 
clicked on/ removed
*/


function myFunc(event) {
    event.preventDefault()
    let word = document.createElement("li")
    word.textContent = form.field1.value;
    words.appendChild(word)

    //dynamic.textContent = form.field1.value;

    let dynamicWords = document.querySelectorAll("li")
    dynamicWords.forEach( word => {
        word.addEventListener("click", () => {
            dynamic.textContent = word.textContent;
            words.removeChild(word);
        });
    });
}


