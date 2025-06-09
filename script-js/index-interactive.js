import * as alertsMesseges from "./alerts-messege.js";


document.getElementById('header_extension').style.display = 'none';
document.getElementById('header_profesores').style.display = 'none';



window.addEventListener('load', () => {
  inicio_values();
  button_copy();
  checked();
  IUD_acordeon();
  table();
});

function inicio_values() {

  document.getElementById('text_value').readOnly = true;

  document.getElementById('text_value').placeholder = 'Sin conexión';

  document.getElementById('academica_check').click()
}



//document.getElementById('text_value').addEventListener('input', function() {
//let valor = this.value;
//document.getElementById('content').textContent = valor;
//console.log(valor)
//});


//copie text

function button_copy() {
  let copyText = document.querySelector(".copy-text");
  copyText.querySelector("button").addEventListener("click", function () {
    let input = copyText.querySelector("input.text");
    const text = input.value
    input.select();
    //document.execCommand("copy");
    navigator.clipboard.writeText(text)
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function () {
      copyText.classList.remove("active");
    }, 2500);
  });


}
//fin copie text
function checked() {

  let extension = document.getElementById('header_extension');
  let profesores = document.getElementById('header_profesores');
  let academica = document.getElementById('header_academica');
  let content_table_boby = document.getElementById("content_table_body");
  let academic_check_event = document.getElementById('academica_check')

  const Click_academic = () => {

    extension.style.display = 'none';
    academica.removeAttribute("style");

    profesores.style.display = 'none';

  }

  academic_check_event.addEventListener("click", Click_academic)

  let exten_check_event = document.getElementById('extension_check')

  const Click_ext = () => {

    academica.style.display = 'none';
    extension.removeAttribute("style");
    profesores.style.display = 'none';



  };

  exten_check_event.addEventListener("click", Click_ext);

  let prof_check_event = document.getElementById('profesores_check')

  const Click_prof = () => {

    academica.style.display = 'none';
    extension.style.display = "none";
    profesores.removeAttribute("style");


  };

  prof_check_event.addEventListener("click", Click_prof);


}






/*boton chispita*/

$('.hero-btn').click(function () {
  if (!$('.hero-btn').parent().hasClass('active')) {
    $(this).parent().stop().addClass('active');
    setTimeout(function () {
      $('.hero-btn').parent().removeClass('active');
    }, 2000);
  }
});

/*Fin boton chispita*/

/* Navidad efecto - Nieve*/
/*
const mainContainer = document.querySelector(".boby-container");



const getRandomValue = (max, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};

const createSnow = (density) => {
  for (let i = 0; i < density; i++) {
    const snowFlake = document.createElement("span");
    const horizontalPosition = `${getRandomValue(100)}%`;
    const fallDelay = `${getRandomValue(100)}s`;
    const fallDuration = `${getRandomValue(20, 5)}s`;
    const flakeSize = `${getRandomValue(7, 1)}px`;
    const flakeOpacity = Math.random().toFixed(2);

    snowFlake.classList.add("snow");
    snowFlake.style.opacity = flakeOpacity;
    snowFlake.style.width = flakeSize;
    snowFlake.style.height = flakeSize;
    snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
    snowFlake.style.right = horizontalPosition;

    mainContainer.appendChild(snowFlake);
  }
};


createSnow(100);
*/
/* acordeon by danny*/
function IUD_acordeon() {
  const accordionItems = document.querySelectorAll('.IUD_accordion-item');

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('IUD_accordion-active');

      if (item.classList.contains('IUD_accordion-active')) {
        item.classList.remove('rem');
      } else {
        item.classList.add('rem');
      }
    });
  });
}

/*acordeon*/

/*table JS*/


function table() {
  let bandera = 1;
  document.getElementById("year_add_check").addEventListener('click', () => {

    if (bandera === 1) {
      document.getElementById("year_table").removeAttribute("style");
      document.getElementById("year_table_ext").removeAttribute("style");

      bandera = 0;

    } else {

      document.getElementById("year_table").style.display = "none";
      document.getElementById("year_table_ext").style.display = "none";
      bandera = 1;
    }


  }



  )
  let bandera2 = 1;

  document.getElementById("user_check").addEventListener('click', () => {

    if (bandera2 === 1) {
      document.getElementById("header_User").removeAttribute("style");
      document.getElementById("header_ID").style.display = "none";
      document.getElementById("header_no_ID").style.display = "none";
      document.getElementById("header_no_user").removeAttribute("style");

      bandera2 = 0;

    } else {

      document.getElementById("header_User").style.display = "none";
      
      document.getElementById("header_ID").removeAttribute("style");
      document.getElementById("header_no_user").style.display = "none";
      document.getElementById("header_no_ID").removeAttribute("style");
      bandera2 = 1;
    }


  }



  )




}




let table_search = document.getElementById("table_search");
let table_search_masiv = document.getElementById("table_search-masiv");
document.getElementById("accordion_item_click").addEventListener("click", ()=>{


  if(table_search_masiv.classList.contains('desactive')){
    table_search_masiv.classList.remove('desactive');

    table_search.classList.add('desactive');

  }else{
    table_search.classList.remove('desactive');
    table_search_masiv.classList.add('desactive');
  }
  
})

//alertas mensajes
document.getElementById("closeError").addEventListener('click', close_Error);
function close_Error(){

  alertsMesseges.closeError();
}

//fin alertas

//activa el tooltip cuanto el navegador cargue
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
  
  //fin activa el tooltip cuanto el navegador cargue
  //filtro ordenar//
document.getElementById("filtroBusqueda").addEventListener("change",
        ordenarPorClase
    )
    function ordenarPorClase() {
      const rolPrioritario = document.getElementById('filtroBusqueda').value;
      const tabla = document.getElementById('table_coincidencias');
      const tbody = tabla.tBodies[0];
      const filas = Array.from(tbody.rows);

      // Ordenar las filas según la clase del <tr>
      filas.sort((a, b) => {
 const claseA = a.getAttribute("data-estado")?.toLowerCase() || "";
 const claseB = b.getAttribute("data-estado")?.toLowerCase() || "";

        if (claseA === rolPrioritario && claseB !== rolPrioritario) return -1;
        if (claseA !== rolPrioritario && claseB === rolPrioritario) return 1;

        // Si son iguales o ambos diferentes, ordenar alfabéticamente por nombre
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
      });

      // Reinsertar las filas ordenadas
      tbody.innerHTML = '';
      filas.forEach(fila => tbody.appendChild(fila));
    }


      //fin filtro ordenar//