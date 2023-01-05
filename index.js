
function togglebio(elementId) {
  let element = document.getElementById(elementId);
  
  if (element.classList.contains("bio" + "--open")) {
    element.classList.remove("bio" + "--open")
  } 
  else {
    element.classList.add("bio" + "--open")
  }
}

togglebio('vincentbio');

togglebio('genjibio');