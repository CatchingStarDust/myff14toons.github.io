togglebio('vincentbio');
togglebio('genjibio');
togglebio('masabio');
togglebio('gwenbio');
togglebio('scratchbio');
togglebio('oliviabio');
togglebio('magnaibio');
togglebio('reijibio');
togglebio('ugandabio');
togglebio('eviebio');


function togglebio(elementId) {
  let element = document.getElementById(elementId);
  
  if (element.classList.contains("bio" + "--open")) {
    element.classList.remove("bio" + "--open")
  } 
  else {
    element.classList.add("bio" + "--open")
  }
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