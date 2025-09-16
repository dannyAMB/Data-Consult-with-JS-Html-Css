    const preview = document.getElementById('preview');
    const interfaz = document.getElementById('interfaz');
   var htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
      mode: 'htmlmixed',
      theme: 'material-darker',
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2,
      autoCloseTags: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete"
      }

    });
    
      htmlEditor.setSize("100%", "400px");

    const initialContent = '<h1>Hola, mundo</h1>\n<p>Edita este contenido en tiempo real</p>';

         console.log("entró text"+initialContent);
      console.log("entró text");

    document.getElementById("body_container").addEventListener("load",()=>{    
      
  htmlEditor.setValue(initialContent);
         console.log("entró text");
      updateIframe()

})



    function updateIframe() {
      const iframeDoc = preview.contentDocument || preview.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write('<!DOCTYPE html><html><head><style>body { font-family: sans-serif; padding: 1rem; }</style></head><body contenteditable="true"></body></html>');
      iframeDoc.close();

      iframeDoc.body.innerHTML = htmlEditor.getValue();
      interfaz.innerHTML = htmlEditor.getValue();
      iframeDoc.body.addEventListener('paste', debounce(updateFromIframe, 300));
      iframeDoc.body.addEventListener('input', debounce(updateFromIframe, 300));

    }

    function updateFromIframe() {
      const iframeDoc = preview.contentDocument || preview.contentWindow.document;
      if (iframeDoc && iframeDoc.body) {
        const rawHTML = iframeDoc.body.innerHTML;
        const formattedHTML = html_beautify(rawHTML, {
          indent_size: 2,
          wrap_line_length: 80,
          max_preserve_newlines: 2
        });

        interfaz.innerHTML = formattedHTML;
        htmlEditor.setValue(formattedHTML);
      }
    }

    htmlEditor.on('change', () => updateIframe());

    function debounce(fn, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    function applyStyle(command, value = null) {
      const iframeDoc = preview.contentDocument;
      iframeDoc.execCommand(command, false, value);
      updateFromIframe();
    }

    function insertHyperlink() {
      const iframeDoc = preview.contentDocument;
      const selection = iframeDoc.getSelection();
      if (!selection || selection.isCollapsed) {
        alert("Selecciona primero el texto que deseas convertir en hipervínculo.");
        return;
      }
      const url = prompt("Introduce la URL del hipervínculo:");
      if (url) {
        iframeDoc.execCommand("createLink", false, url);
        updateFromIframe();
      }
    }

    function insertImageFromUrl() {
      const url = prompt("Introduce la URL de la imagen:");
      if (url) {
        applyStyle("insertImage", url);
      }
    }

    function insertImageFile(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        applyStyle("insertImage", e.target.result);
      };
      reader.readAsDataURL(file);
    }
    function copiarContenido() {
      const contenido = htmlEditor.getValue();
      navigator.clipboard.writeText(contenido).then(() => {
        alert("Contenido copiado al portapapeles.");
      }).catch(err => {
        alert("Error al copiar: " + err);
      });
    }
    function insertHTMLTag(tag) {
      const iframeDoc = preview.contentDocument;
      const selection = iframeDoc.getSelection();
      const wrapper = iframeDoc.createElement('div');
      wrapper.innerHTML = tag;
      const inserted = Array.from(wrapper.childNodes);

      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        inserted.forEach(node => range.insertNode(node));
        selection.removeAllRanges();
      } else {
        inserted.forEach(node => iframeDoc.body.appendChild(node));
      }

      updateFromIframe();
    }

    function clearEditor() {
      htmlEditor.setValue("");
      updateIframe();
    }

    function insertHTMLTag_two(tag) {
      const iframeDoc = preview.contentDocument;
      const selection = iframeDoc.getSelection();

      const wrapper = iframeDoc.createElement('div');
      wrapper.innerHTML = tag;
      const inserted = wrapper.firstChild;

      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        // Elimina cualquier contenido seleccionado
        range.deleteContents();

        // Inserta el nuevo contenido
        range.insertNode(inserted);

        // Ajusta el cursor después del nuevo nodo insertado
        range.setStartAfter(inserted);
        range.setEndAfter(inserted);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // Si no hay selección válida, agregar al final del body
        iframeDoc.body.appendChild(inserted);
      }

      updateFromIframe();
    }
    function downloadHTML() {
      const blob = new Blob([htmlEditor.getValue()], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'contenido.html';
      a.click();
    }

window.addEventListener('DOMContentLoaded', updateIframe);







    document.getElementById("button_IUD-alert_academic").addEventListener("click", () => {


      let tag = '<div class=\'grid-row\'>' + '\n' +
        '    <div class=\'col-md-3 col-sm-4 col-xs-12 col-lg-2\' style=\'max-width: 110px; margin: auto;\'>&nbsp;<img id=\'1666911\' src=\'https://iudigital.instructure.com/users/6240/files/2631932/preview?verifier=t1WsH81mfMyV9EBDmB22XE2pxgIdRxUOjw5co6nQ\' alt=\'Bot_Profe_peq.svg\' /></div>' + '\n' +
        '    <div class=\'col-md-9 col-sm-8 col-xs-12 col-lg-10\'>' + '\n' +
        '        <div class=\'alert_2019 alert-success_2019\'>' + '\n' +
        '        <p>añadir texto</p>' + '\n' +
        '            <div>&nbsp;</div>' + '\n' +
        '        </div>' + '\n' +
        '    </div>' + '\n' +
        '</div>';


      insertHTMLTag_two(tag)

    })



    document.getElementById("button_IUD-alert_academic_two").addEventListener("click", () => {


      let tag = '<div class=\'grid-row\'>' + '\n' +
        '    <div class=\'col-md-3 col-sm-4 col-xs-12 col-lg-2\' style=\'max-width: 110px; margin: auto;\'><img src=\'https://iudigital.instructure.com/users/47325/files/6922267/preview?verifier=T8WWDpwfVWDLbsrtQCNpsgsxovzVs1S50sJ1lvwW\' alt=\'Bot_TenPresente_peq-1.svg\' /></div>' + '\n' +
        '    <div class=\'col-md-9 col-sm-8 col-xs-12 col-lg-10\'>' + '\n' +
        '        <p>&nbsp;</p>' + '\n' +
        '        <p>añadir texto</p>' + '\n' +
        '    </div>' + '\n' +
        '</div>';



      insertHTMLTag_two(tag)

    })


    document.getElementById("button_IUD-alert_extension").addEventListener("click", () => {


      let tag = '<div class=\'grid-row\'>' + '\n' +
        '    <div class=\'col-md-3 col-sm-4 col-xs-12 col-lg-2\' style=\'max-width: 110px; margin: auto;\'>&nbsp;<img id=\'1666911\' src=\'https://extensioniudigital.instructure.com/users/63/files/325108/preview?verifier=jCuhN8NOzj2oTWJLn7svCBOKptbzyGvK6DSY5y8W\' alt=\'Bot_Profe_peq.svg\' /></div>' + '\n' +
        '    <div class=\'col-md-9 col-sm-8 col-xs-12 col-lg-10\'>' + '\n' +
        '        <div class=\'alert_2019 alert-success_2019\'>' + '\n' +
        '        <p>añadir texto</p>' + '\n' +
        '            <div>&nbsp;</div>' + '\n' +
        '        </div>' + '\n' +
        '    </div>' + '\n' +
        '</div>';


      insertHTMLTag_two(tag)

    })



    document.getElementById("button_IUD-alert_extension_two").addEventListener("click", () => {


      let tag = '<div class=\'grid-row\'>' + '\n' +
        '    <div class=\'col-md-3 col-sm-4 col-xs-12 col-lg-2\' style=\'max-width: 110px; margin: auto;\'><img src=\'https://extensioniudigital.instructure.com/users/63/files/325330/preview?verifier=944NtfJpFbE1WcHu0zjaFlqje0eMMUpwPdXMZOwd\' alt=\'Bot_TenPresente_peq-1.svg\' /></div>' + '\n' +
        '    <div class=\'col-md-9 col-sm-8 col-xs-12 col-lg-10\'>' + '\n' +
        '        <p>&nbsp;</p>' + '\n' +
        '        <p>añadir texto</p>' + '\n' +
        '    </div>' + '\n' +
        '</div>';



      insertHTMLTag_two(tag)

    })


    document.getElementById("button_IUD-texto").addEventListener("click", () => {


      let tag = '<div class=\'grid-row\'>' + '\n' +
        '    <div class=\'col-md-12 col-sm-12 col-xs-12 col-lg-12\'>' + '\n' +
        '        <p>Añadir texto</p>' + '\n' +
        '    </div>' + '\n' +
        '</div>';



      insertHTMLTag_two(tag)

    })



    document.getElementById("button_IUD-Espacio").addEventListener("click", () => {


      let tag = '        <div>&nbsp;</div>' + '\n';



      insertHTMLTag_two(tag)

    })

    document.getElementById("button_IUD-img").addEventListener("click", () => {


      let tag = "<div class='grid-row'>" +
        "  <div class='col-md-12 col-sm-12 col-xs-12 col-lg-11' style='margin: auto;'>"
        + " <img   src='xxxx' alt='image.png' />" +
        +" </div> </div>";

      insertHTMLTag_two(tag)
    })

    document.getElementById("button_IUD-container").addEventListener("click", () => {

      tag = "<div class='IUD_container_azul_2019'>" +
        '        <div>&nbsp;</div>' + '\n' +

        " Primer alert" +'\n' +
        '        <div>&nbsp;</div>' + '\n' +
        '    imagen' +'\n' +
        '        <div>&nbsp;</div>' + '\n' +
        " Segundo alert" +'\n' +
        '        <div>&nbsp;</div>' + '\n' +
        " <div class='grid-row'>" +
        "  <div class='col-md-12 col-sm-12 col-xs-12 col-lg-12'>" +
        "      <p style='text-align: center;'><strong>&iexcl;Contamos con tu participaci&oacute;n!</strong></p>" +
        "   </div>" +
        "</div> <div>&nbsp;</div></div>";

      insertHTMLTag_two(tag)
    })
