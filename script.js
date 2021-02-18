<script type='text/javascript'>
      function addProduct() {
        var ul = document.getElementById("lista");
        var unos = document.getElementById("unos");
        var li = document.createElement("li");
        li.setAttribute('id', unos.value);
        li.appendChild(document.createTextNode(unos.value));
        ul.appendChild(li);
      }

      function removeProducts() {
        var ul = document.getElementById("lista");
        var unos = document.getElementById("unos");
        var item = document.getElementById(unos.value);
        ul.removeChild(item);
      }

      function countItems() {
        var ul = document.getElementById("unos");
        var i = 0;
        itemCount = 0;
        while (ul.getElementsByTagName('li')[i++]) itemCount++;
        document.write(itemCount);
      }
</script>
