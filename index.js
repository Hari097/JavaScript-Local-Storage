let textmessage = document.getElementById("textmessage")

let saveButton = document.getElementById("save") 

let clearButton = document.getElementById("clear")


clearButton.onclick =function(){
    localStorage.removeItem("textmessage")
    textmessage.value =""
} 

saveButton.onclick = function(){
    let message = JSON.stringify(textmessage.value) 
    localStorage.setItem("textmessage",message)
     
} 
textmessage.textContent = JSON.parse(localStorage.getItem("textmessage"))