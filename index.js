function togglebio(elementId) {
  
  let bios = document.querySelectorAll('.bio');
  bios.forEach(bio => {
    bio.classList.remove('bio--open');
  });

 
  let element = document.getElementById(elementId)
  
  element.classList.add("bio" + "--open");
}

function exitbio(elementId) {
  let element = document.getElementById(elementId);
  
  if (element.classList.contains("bio" + "--open")) {
    element.classList.remove("bio" + "--open")
  } 
  else {
    element.classList.add("bio" + "--open")
  }
}

