function Manipulation() {

    let mainElement = document.getElementsByTagName("h1")[0];
    let textColor = mainElement.style.color = "green";

    let firstEl = document.getElementsByTagName("p")[0];
    let firstElColor = firstEl.style.color = "blue";

    let secondEl = document.getElementsByTagName("p")[1];
    let secondElColor = secondEl.style.color = "red";
    
    let thirdEl = document.getElementsByTagName("p")[2];
    let thirdElColor = thirdEl.style.color = "yellow";

    let firstElText = firstEl.textContent;
    console.log(firstElText);
    
//    let mainElement = document.getElementsByTagName("h1")[0];
//    let textColor = mainElement.style.color = "green";

   let newElement = document.createElement("p");
   let textOfNewElement = newElement.textContent = "Hellooooooo!"
   document.body.appendChild(newElement);
   let newElementColor = newElement.style.color = "orange";

//   let removed = document.getElementsByTagName("div")[0];
//    document.body.removeChild(removed);

//    let inputForm = document.getElementById("username");
//    let formValue = inputForm.value;

//    console.log(formValue);
  
}