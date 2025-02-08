let searchContainer = document.querySelector('.form-control')





searchContainer.onkeyup=(e) =>{

   let userData = e.value
   //document.getElementById('content').innerText = "Resultado input: " + userData;
   //console.log(userData)
  }



 document.getElementById('campo').addEventListener('input', function() {
   let valor = this.value;
   //document.getElementById('content').textContent = valor;
   //console.log(valor)
 });


 //copie text
 /* let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click",function(){
  let input = copyText.querySelector("input.text");
   const text =  input.value
  input.select();
//document.execCommand("copy");
  navigator.clipboard.writeText(text)
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function(){
    copyText.classList.remove("active");
  },2500);
});*/

