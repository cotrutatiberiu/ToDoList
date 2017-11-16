var submitB = document.getElementById("submitButton");

submitB.addEventListener("click", addLi);

function addLi() {
  var striked = false;
  var input = document.getElementById("inputId").value;
  var newButton = document.createElement("button");
  var deleteLiButton = document.createElement("button");
  var ulList = document.getElementById("list");
  var newLi = document.createElement("li");
  var reset = document.getElementById("myForm").reset();

  var newText = document.createTextNode(input);
  var deleteText = document.createTextNode("x");

  newButton.appendChild(newText);
  deleteLiButton.appendChild(deleteText);

  newButton.addEventListener("click", strikeText);
  newButton.setAttribute("type", "button");
  newButton.style.width = "387px";

  deleteLiButton.addEventListener("click", deleteLi);
  deleteLiButton.setAttribute("type", "button");

  newLi.appendChild(newButton);
  newLi.appendChild(deleteLiButton);

  ulList.appendChild(newLi);

  //Function click on element to strike
  function strikeText() {
    striked = !striked;
    switch (striked) {
      case true:
        newButton.style.textDecoration = "line-through";
        break;
      case false:
        newButton.style.textDecoration = "none";
        break;
    }
  }

  //Function to remove a list element
  function deleteLi() {
    ulList.removeChild(newLi);
  }
}
