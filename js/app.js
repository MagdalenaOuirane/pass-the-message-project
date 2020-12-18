const submitBtn = document.querySelector("input[type=submit]");
const divContainer = document.querySelector(".message-container");

function addMessage(e) {
  e.preventDefault();
  console.log(e);
  

  // get input value
  const newMessageInput = document.getElementById("message").value;
  console.log("Message:", newMessageInput);
 

  //create new element
  const h4 = document.createElement("h4");
  h4.classList.add("message-content", "text-uppercase");
  console.log(h4);

//Add message to h4
  h4.appendChild(document.createTextNode(newMessageInput));

//Add h4 to divContainer
  divContainer.appendChild(h4);

}

submitBtn.addEventListener("click", addMessage);
