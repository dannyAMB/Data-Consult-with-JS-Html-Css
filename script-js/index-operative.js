

let inputsearch = document.querySelector('input')


/*pre-load generador*/
window.onload = (event) => {

  var min = 0;
  var max = 9999;

  generador_clave(Math.floor(Math.random()*(max-min+1)+min));
};

/**
function input_data_text(){

  inputsearch.onkeyup=(e) =>{

   let userData = e.value
   document.getElementById('content').innerText = "Resultado input: " + userData;

  }
}
*/
/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
*/


function ramdom_numfour(){


var min = 0;
var max = 9999;

var x = Math.floor(Math.random()*(max-min+1)+min);

return x
//2509
}

function generarCaracteresAleatorios() {
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const simbol = '*%&$#*/%&$#*/%&$#*$#**%&$#+&$#%&$#/*%$#+*%*+&$#*+%/$#*';
        
        // Generar un índice aleatorio dentro del rango del conjunto de letras
        const randomIndex = Math.floor(Math.random() * letters.length);
        
        // Obtener la letra correspondiente al índice
        const randomsimbol = simbol[randomIndex];
        const randomLetter = letters[randomIndex];
        const randomLettertwo = letters[Math.floor(Math.random() * letters.length)];

        const randomsimboltwo = simbol[Math.floor(Math.random() * letters.length)];
        const randomsimboltree = simbol[Math.floor(Math.random() * letters.length)];
        const randomLettertree = letters[Math.floor(Math.random() * letters.length)];
       
        // Mostrar la letra en el elemento con id 'randomLetter'
         

return (randomLetter +randomsimbol+randomLettertwo +randomsimboltwo+randomsimboltree+ randomLettertree);
}

async function  generador_clave(id){

let clave  = document.getElementById('clave-generate');
let aux_clave;
document.getElementById('generator-button').addEventListener("click", ()=>{

aux_clave = "IUD"+id+ ramdom_numfour() +generarCaracteresAleatorios();
document.querySelector(".lds-ellipsis").classList.add("active_load");
document.getElementById("generator-button").classList.add("letra_botom");

setTimeout(function(){  
clave.value = aux_clave;
document.querySelector(".lds-ellipsis").classList.remove("active_load");
document.getElementById("generator-button").classList.remove("letra_botom");

}, 1900);




});


}






let resultado = [];
var aux_array = [];
var status_conex = false;
var respon
let limite;
let desde;
let paginaActiva;
let paginas = [];
let result_two = []; 
let info_array_aux;



document.getElementById('text_value').addEventListener("input", print_data)

function value_input(){

//document.getElementById('content').innerText = "Resultado filter: " + resultado;
respon = document.getElementById('text_value').value
 
respon = respon.trim();

 return respon 
 
}

function input_config(){


  document.getElementById('text_value').readOnly = false;
  document.getElementById('text_value').placeholder = 'Search..';
  
 }

function print_data(){


 input_config()



respon = value_input()

console.log("Respuesta: " + respon)


if(academica_checked()){
aux_array = alumno;

}

if(extension_checked()){
aux_array = alumno_extension;


}
if(profesores_checked()){

aux_array = profesores;

}
if(!(document.getElementById('text_value').validity.valueMissing)&&respon!==""){

 resultado = aux_array.filter(ema =>  {
  const regex = new RegExp(`\\b${respon}\\b`, "i");
   return regex.test(ema.Correo_personal);});


   
  document.getElementById('clave-generate').value="clave";

  console.log("resultado email filter: " + resultado.length)


  if(respon>0){

     resultado = aux_array.filter(ids => ids.id == respon);
     

  }else{
    if(resultado.length==0)
  {

    resultado = aux_array.filter(user => 
      {
        const regex = new RegExp(`\\b${respon}\\b`, "i");
         return regex.test(user.usuario);});
  }


  }

}
  console.log("validación campo vacio: "+ !(document.getElementById('text_value').validity.valueMissing))

  if(buscar_por_nombre_checked()&& !(document.getElementById('text_value').validity.valueMissing)&&respon!==""){

    resultado = aux_array.filter(personaArray => {
     const regex = new RegExp(`\\b${respon}\\b`, "i");
      return regex.test(personaArray.nombre_full);
    });

  
  }
  
  if(document.getElementById("id_detalle_check").checked&& !(document.getElementById('text_value').validity.valueMissing)&&respon!==""){

    resultado = aux_array.filter(fila => {

      return fila.id.includes(respon);
    }
     
  );

  
  }
  if(document.getElementById("fecha_check").checked&& !(document.getElementById('text_value').validity.valueMissing)&&respon!==""){

    resultado = aux_array.filter(fila => {

      return fila.fecha.includes(respon);
    }
     
  );

  
  }
  if(document.getElementById("year_check").checked&& !(document.getElementById('text_value').validity.valueMissing)&&respon!==""){

    resultado = aux_array.filter(fila => {

      return fila.year.includes(respon);
    }
     
  );

  
  }
  console.log(resultado.length)
  document.querySelector("#items").innerHTML = "";

if(resultado.length == 0 ||document.getElementById('text_value').validity.valueMissing||respon==""){
document.getElementById("content_table_body").innerHTML =   '<td colspan="9" style="text-align:center;"> Sin resultados </td>'
console.log("sin resultado: " + resultado);
document.getElementById("year_add_check").disabled = false;
document.querySelector(".year_add_check_slider").classList.remove("disabled");


}else{


  let ver_resul = ""
  let html_table_boddy = "";
  let num;

if(document.getElementById("year_add_check").checked)
{
  document.querySelector(".year_add_check_slider").classList.add("disabled");
  document.getElementById("year_add_check").disabled = true;


}
  desde = 0;
  paginaActiva = 1;
  paginas = resultado.length / limite;
  result_two = resultado.slice(desde, limite);
  cargarRegistros();
  generador_clave(resultado[0].id)

}

}


limite = 30;
desde = 0;
paginaActiva = 1;


let cuerpoTabla;
function cargarRegistros(){



   cuerpoTabla = document.getElementById("content_table_body");


  
  console.log("matodo paginación array dividido: " + result_two );
  
    cuerpoTabla.innerHTML = "";
    result_two.map((data,index) => {
      const fila = document.createElement("tr");
      fila.setAttribute("key", data.id);

      if(academica_checked()){

        if(document.getElementById("year_add_check").checked){


          fila.innerHTML =
          '<td>' +(index+1) +'</td>' + 
        '<td>' +  data.year +'</td>' + 
        '<td>' +  data.fecha +'</td>' + 
         '<td>' +  data.programa + '</td>' +
         '<td> ' +  data.nombre_full +' </td>' + 
         '<td> ' +  data.id +' </td>' + 
         '<td> <input  type="text" class="input-table input-user" value="' +  data.usuario +'" readonly> </td>' + 
         '<td> <input  type="text" class="input-table" value="' +  data.clave +'" readonly> </td>' + 
         '<td> ' +  data.Correo_personal +' </td>' + 
         '<td> ' +  data.tanda +' </td> <tr>' ;
          
        }
        else{

          fila.innerHTML =
          '<td>' +(index+1) +'</td>' + 
  
        '<td>' +  data.fecha +'</td>' + 
         '<td>' +  data.programa + '</td>' +
         '<td> ' +  data.nombre_full +' </td>' + 
         '<td> ' +  data.id +' </td>' + 
         '<td> <input  type="text" class="input-table input-user" value="' +  data.usuario +'" readonly> </td>' + 
         '<td> <input  type="text" class="input-table" value="' +  data.clave +'" readonly> </td>' + 
         '<td> ' +  data.Correo_personal +' </td>' + 
         '<td> ' +  data.tanda +' </td> <tr>' ;

        }
  
      
       
      }

      if(extension_checked()){
        if(document.getElementById("year_add_check").checked){


        fila.innerHTML = 
        '<td>' +(index+1) +'</td>' + 
        '<td>' + data.year +'</td>' + 
        '<td>' + data.fecha +'</td>' + 
        
         '<td>' + data.programa + '</td>' +
         '<td> ' + data.id +' </td>' + 
         '<td> ' + data.nombre_full +' </td>' + 
     
         '<td> <input  type="text" class="input-table input-user" value="' + data.usuario +'" readonly> </td>' + 
         '<td> <input  type="text" class="input-table" value="' + data.clave +'" readonly> </td>' + 
         '<td> ' + data.Correo_personal +' </td><tr>' ;
        }
        else{

          fila.innerHTML = 
          '<td>' +(index+1) +'</td>' + 
          '<td>' + data.fecha +'</td>' + 
          
           '<td>' + data.programa + '</td>' +
           '<td> ' + data.id +' </td>' + 
           '<td> ' + data.nombre_full +' </td>' + 
       
           '<td> <input  type="text" class="input-table input-user" value="' + data.usuario +'" readonly> </td>' + 
           '<td> <input  type="text" class="input-table" value="' + data.clave +'" readonly> </td>' + 
           '<td> ' + data.Correo_personal +' </td><tr>' ;
          


        }
        }
        
                
           
        

      if(profesores_checked()){
      fila.innerHTML = 
  '<td>' +(index+1) +'</td>' + 
  '<td>' + data.fecha +'</td>' + 
  '<td>' + data.tipo + '</td>' +
  '<td> ' + data.nombre_full +' </td>' + 
  '<td> ' + data.id +' </td>' + 
  '<td> <input  type="text" class="input-table input-user" value="' + data.usuario +'" readonly>'+
  '</td>' + 
  '<td> <input  type="text" class="input-table" value="' + data.clave +'" readonly> </td>' + 
  '<td> ' + data.Correo_personal +' </td>' + 
  '<td> ' + data.merge_status +' </td>';
      }


      cuerpoTabla.append(fila);

      
    });


    cargarItemPaginacion();


}


const cargarItemPaginacion = () => {
  document.querySelector("#items").innerHTML = "";
  for (let index = 0; index < paginas; index++) {
    const item = document.createElement("li");
    item.classList = `page-item ${paginaActiva == index + 1 ? "active" : ""}`;
    const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${
      index + 1
    }</button>`;
    item.innerHTML = enlace;
    document.querySelector("#items").append(item);
    if(index+1 >= 40)
    {


      document.querySelector(".d-flex").classList.remove("justify-content-center");
      document.querySelector(".d-flex").style.padding = "0 0 0 20px";


    }else{

      document.querySelector(".d-flex").classList.add("justify-content-center");


    }
  }
};

const modificarArregloProductos = () => {
  result_two = resultado.slice(desde, limite * paginaActiva);
  cargarRegistros();
};

window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = limite * pagina; //5
  if (desde <= resultado.length) {
    modificarArregloProductos();
  }
};

window.nextPage = () => {
  if (paginaActiva < paginas) {
    desde += 5;
    paginaActiva++;
    modificarArregloProductos();
  }
};

window.previusPage = () => {
  if (desde > 0) {
    paginaActiva--;
    desde -= 5;
    modificarArregloProductos();
  }
};






function to_Lower_Case(letter){
//pasa letras a minusculas

if(letter!=null){


letter = letter.toLowerCase();


}


return letter;

}






document.getElementById('academica_check').addEventListener('click',()=>{
if(status_conex)
{  

  print_data()
}


});




document.getElementById('extension_check').addEventListener('click',()=>{

if(status_conex)
{

  print_data()
}

});


document.getElementById('profesores_check').addEventListener('click',()=>{

if(status_conex)
{  

  print_data()
}

});


function academica_checked(){

return document.getElementById('academica_check').checked

}
function extension_checked(){

return document.getElementById('extension_check').checked

}
function profesores_checked(){

return document.getElementById('profesores_check').checked

}

function buscar_por_nombre_checked(){

  return document.getElementById('name_check').checked
  
  }
var alumno;
var profesores;
var alumno_extension;
export async  function listMajors() {
  alumno=[];
  profesores=[];
  alumno_extension=[];
  let response_academica;
  let response_extension;
  let response_profesores;
  

 /** let response;

    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1Sw6_zYTqpoy31ZXBja_rog1Xets6Lqc4ZXRFuVMG6Ec',
        range: 'Turnos!A:G',
      });
    } catch (err) {
     console.error('Error de api: '+ err)   
     return;
    }**/


 try {
   
 

   response_profesores = await gapi.client.sheets.spreadsheets.values.get({
     spreadsheetId: '19FG-Kvcq1yjpEMMCMTvvJDxXP8V0aheouHoAE-lNZjk',
     range: 'Profesores!A:W',
   
   });

 

 } catch (err) {


   document.getElementById("content_table_body").innerHTML =   '<td colspan="8" style="text-align:center;"> Profesores - Error de Conexión </td>'
   document.getElementById('profesores_check').click()
   console.error('Error de api: ' + err)

   return;
 }
 try {
   


   response_extension = await gapi.client.sheets.spreadsheets.values.get({
     spreadsheetId: '15_P7imj-WXq4M8R0nq6GSeiVf2nKUiedJoAq9RcJeoo',
     range: 'ListadoGlobal!A:N',
   
   });

 

 } catch (err) {


   document.getElementById("content_table_body").innerHTML =   '<td colspan="8" style="text-align:center;"> Extensión - Error de Conexión </td>'
   document.getElementById('extension_check').click()
   console.error('Error de api: ' + err)

   return;
 }


 try {
   
   response_academica = await gapi.client.sheets.spreadsheets.values.get({
     spreadsheetId: '1sgTqFiPnWf91D1YtgY3yud-El9GjADCFnWMpsfcyeD0',
     range: 'MATRICULADOS!A:R',
   
   });




 

 } catch (err) {


   document.getElementById("content_table_body").innerHTML =   '<td colspan="8" style="text-align:center;"> Academica - Error de Conexión </td>'

   console.error('Error de api: ' + err)

   return;
 }

 

  const range_academica = response_academica.result;
  if (!range_academica || !range_academica.values || range_academica.values.length == 0) {
    console.warn('se encontraron errores')
    
    return;

  }
  const range_extension = response_extension.result;
  if (!range_extension || !range_extension.values || range_extension.values.length == 0) {
    console.warn('se encontraron errores')       
   
    return;

  }
  const range_profesores = response_profesores.result;
  if (!range_profesores || !range_profesores.values || range_profesores.values.length == 0) {
    console.warn('se encontraron errores')
   
    return;

  }

 
  // Flatten to string to display
  console.log("validar variable status: " + status_conex)
  console.log(range_academica)
  range_academica.values.forEach((fila) => {



    const dato = {
      year: fila[0],
      
      fecha: fila[1],
      programa: fila[2],
      nombre_full: fila[5],
      id: fila[10],
      usuario: fila[11],
      clave: fila[12],
      Correo_personal: to_Lower_Case(fila[15]),
      tanda: fila[17]
    };

  
  
   
    alumno.push(dato);

  });

  range_extension.values.forEach((fila) => {


 
    const dato_e = {
      year: fila[0],
   fecha: fila[1],
   programa: fila[2],
   id: fila[3],
   nombre_full: fila[9] + " " +fila[10],
   
   usuario: fila[11],
  clave: fila[12],
  Correo_personal: to_Lower_Case(fila[13])
  };







      alumno_extension.push(dato_e);

    });

    range_profesores.values.forEach((fila) => {


   

    const dato_p = {
   fecha: fila[0],
   tipo: fila[1],
   id: fila[2],
   nombre_full: fila[8] + " "+ fila[9] ,

   usuario: fila[14],
  clave: fila[16],
  Correo_personal: to_Lower_Case(fila[19]),
  merge_status: fila[22]
  };
      profesores.push(dato_p);

    });  

    if(range_profesores.values.length != 0 && range_extension.values.length != 0 && range_academica.values.length != 0)
  
  {
    status_conex = true;

  }
       
  print_data()
///filter
  

  //const output = range.values.reduce(
  //  (str, row) => `${str}${row[0]}, ${row[4]}\n`,
  // 'Name, Major:\n');
  // document.getElementById('content').innerText = output;
}