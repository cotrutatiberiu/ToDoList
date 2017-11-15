var submitB = document.getElementById("submitButton");

submitB.addEventListener("click", addLi);

function addLi() {
  var striked = false;
  var input = document.getElementById("inputId").value;
  var newButton = document.createElement("button");
  var ulList = document.getElementById("list");
  var newLi = document.createElement("li");
  var newText = document.createTextNode(input);

  newButton.appendChild(newText);
  newButton.addEventListener("click", deleteElem);
  newButton.setAttribute("type", "button");
  newButton.style.width="387px";

  newLi.appendChild(newButton);
  ulList.appendChild(newLi);
  var reset = document.getElementById("myForm").reset();


  // function strikeText() {
  //   striked = !striked;
  //   switch (striked) {
  //     case true:
  //       newButton.style.textDecoration = "line-through";
  //       break;
  //     case false:
  //       newButton.style.textDecoration = "none";
  //       break;
  //   }
  // }

  function deleteElem(){
    ulList.removeChild(ulList.childNodes);
  }
}
