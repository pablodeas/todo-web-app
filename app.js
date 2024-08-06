// Lets Go

function newText() {
    let value = document.getElementById('inputText').value;
    let newP = document.createElement('p');

    newP.innerText = value;
    
    document.getElementById('cont').appendChild(newP);
    document.getElementById('inputText').value = '';
}

//function insertText() {
//    newText()
//}