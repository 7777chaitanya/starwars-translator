var inputTextBox = document.querySelector(".inputText")

var translateButton = document.querySelector(".translate__button");

var outputDiv = document.querySelector(".output__box");


function errorHandler(error) {
    alert("something wrong with server! try again after some time")
}

function translate(){
    console.log("called translate function")
    var apiUrl = "https://api.funtranslations.com/translate/sith.json"+"?"+"text="+inputTextBox.value;

    fetch(apiUrl)
    .then(response => response.json())
    .then(json =>{
        var textAfterTranslation = json.contents.translated;
        outputDiv.innerText = textAfterTranslation;
    })
    .catch(errorHandler)
}

translateButton.addEventListener("click",translate)

