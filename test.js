function setUpEvents() {
  var content = document.getElementById("content");
  var button = document.getElementById("show-more");

  button.onclick = function() {
    if (content.className == "open") {
      // Shrink the box
      content.className = "";
      button.innerHTML = "Show More";
    } else {
      // Expand the box
      content.className = "open";
      button.innerHTML = "Show Less";
    }
  };
}

window.onload = function() {
  setUpEvents();
};
