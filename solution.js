function solve() {
let targetDiv = document.getElementsByClassName("my-message")[0];
let button = document.getElementById("send");
let chatArea = document.getElementById("chat_messages");
let textArea = document.getElementById("chat_input");

button.addEventListener("click", function () {
    let targetDivClone = targetDiv.cloneNode(true);
    targetDivClone.textContent = textArea.value;

    if (textArea.value !== "") {
        chatArea.appendChild(targetDivClone);
        textArea.value = "";
    } else {
        let errorMessage = alert("Ei shhh! Ko praish e?");
    }
    
});

}


