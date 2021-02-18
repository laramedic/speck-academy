function addProduct() {
  var ul = document.getElementById("lista");
  var unos = document.getElementById("unos");
  var li = document.createElement("li");
  li.setAttribute("id", unos.value);
  li.appendChild(document.createTextNode(unos.value));
  ul.appendChild(li);
}

function removeProduct() {
  var ul = document.getElementById("lista");
  var unos = document.getElementById("unos");
  var item = document.getElementById(unos.value);
  ul.removeChild(item);
}

function countItem() {
  var ul = document.getElementById("unos");
  var i = 0;
  itemCount = 0;
  while (ul.getElementsByTagName("li")[i++]) itemCount++;
  document.write(itemCount);
}
