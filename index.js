
function toggleVincentBio(vincentBio) {
  let element = document.getElementById("vincentBio");
  
  if (element.classList.contains("vincentBio" + "--open")) {
    element.classList.remove("vincentBio" + "--open")
  } 
  else {
    element.classList.add("vincentBio" + "--open")
  }
}