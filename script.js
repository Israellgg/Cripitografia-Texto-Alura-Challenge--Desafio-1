let input_text = document.querySelector('#input-text');



function criptografar(){
  
  const texto = input_text.value;
  const resultadoCripto = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    document.getElementById('output-text').innerHTML = '<textarea class="principal__areatexto__output" id="output_text"> ' + resultadoCripto + ' </textarea>' + ' <button onclick="copiar()" class="btn-copiar" id="copiar" >Copiar</button>'

}

function descriptografar(){
  
  const texto = input_text.value;
  const resultadoCripto = texto
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    
    document.getElementById('output-text').innerHTML = '<textarea class="principal__areatexto__output" id="output_text"> ' + resultadoCripto + ' </textarea>' + ' <button onclick="copiar()" class="btn-copiar" id="copiar" >Copiar</button>'

}

function copiar(){
    var textocop = document.getElementById('output_text');

    textocop.select();
    document.execCommand('copy');
}
