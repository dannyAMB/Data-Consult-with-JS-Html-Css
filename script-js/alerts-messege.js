export function showProcessing() {
    const successBox = document.getElementById("ProcessingBox");
    successBox.classList.add("show");

}
export function removeProcessing() {
    const ProcessingBox = document.getElementById("ProcessingBox");
    ProcessingBox.classList.remove("show");
    

}

export function showExitBoxMessege() {
  const successBox = document.getElementById("successBox");
  successBox.classList.add("show");

  setTimeout(() => {
    successBox.classList.add("hide"); // Inicia el desvanecimiento
    setTimeout(() => {
      successBox.classList.remove("show", "hide"); // Oculta el mensaje completamente
    }, 1000); // Espera el tiempo de la animación para ocultarlo
  }, 1800); // Se oculta después de 3 segundos
}


export function showErrorBoxMessege(err) {
  const err_msj = document.getElementById("show_error");
  const errorBox = document.getElementById("errorBox");
  errorBox.classList.add("show");
  err_msj.innerHTML = err;
  /*
  setTimeout(() => {
        errorBox.classList.remove("show");
    }, 5000); // Se oculta después de 3 segundos*/
}

export function closeError() {
  const errorBox = document.getElementById("errorBox");
  errorBox.classList.remove("show");
}