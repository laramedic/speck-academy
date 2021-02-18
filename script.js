var clicks = 0;

function addProduct() {
  var ul = document.getElementById("lista");
  var unos = document.getElementById("unos");
  var li = document.createElement("li");

  li.setAttribute("id", unos.value);
  li.appendChild(document.createTextNode(unos.value));
  ul.appendChild(li);
}

function removeProduct() {
  clicks = -1;
  countItem();

  var ul = document.getElementById("lista");
  var unos = document.getElementById("unos");
  var item = document.getElementById(unos.value);
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function countItem() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
