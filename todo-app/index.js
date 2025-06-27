function addtodo() {
  let inputval = document.querySelector("input");
  let value = inputval.value;

  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<h1>${value}</h1>`;

  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";

  deletebtn.onclick = function () {
    newDiv.remove();
  };

  newDiv.appendChild(deletebtn);

  document.body.appendChild(newDiv);
}
