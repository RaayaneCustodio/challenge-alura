function criptografar(){
    let criptografar = document.getElementById("textarea__primario").value;

    criptografar = criptografar.toLowerCase();
    criptografar = criptografar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    criptografar = criptografar.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("textarea__secundario").value = criptografar;
    document.querySelector('.section__secundaria__div').style.display = "none";
    document.querySelector('.section__div').style.display = "block";
}

function descriptografar(){
    let descriptografar = document.getElementById("textarea__primario").value;
    
    descriptografar = descriptografar.toLowerCase();
    descriptografar = descriptografar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    descriptografar = descriptografar.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
    document.getElementById("textarea__secundario").value = descriptografar;
    document.querySelector('.section__secundaria__div').style.display = "none";
    document.querySelector('.section__div').style.display = "block";
}

function copiar() {

    var copiarTexto = document.getElementById("textarea__secundario");
  

    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copiarTexto.value);
  }

  console.log(copiar());

document.getElementById("section__div").style.display = "none";
  
