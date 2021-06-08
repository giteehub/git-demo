window.onload = function() {
  var dom = document.getElementsByClassName("box")[0];
  dom.addEventListener("click", function(e) {
    alert(e.target.innerText)
  })
}