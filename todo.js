var submitB = document.getElementById("submitButton");
var striked=false;

submitB.addEventListener("click", addLi);

function addLi() {
  var input = document.getElementById("inputId").value;
  var newButton = document.createElement("button");
  var ulList = document.getElementById("list");
  var newLi = document.createElement("li");
  var newText = document.createTextNode(input);

  
  newButton.appendChild(newText);
  newButton.addEventListener("click",function(){
    striked=!striked;
    switch(striked){
      case true:
      newButton.style.textDecoration="line-through";
      break;
      case false:
      newButton.style.textDecoration="none";
      break;
    }
    
    
  });
  newButton.setAttribute("type", "button");
  
  
  newLi.appendChild(newButton);
  ulList.appendChild(newLi);
  var reset = document.getElementById("myForm").reset();
}

function strikeText(){
  
}
