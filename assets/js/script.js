$(document).ready(function () {

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  $(".desaparecer").click(function () {
    $(".aparece-desaparece").toggle();
  });

  $('.change').on('dblclick', function () {
    $(this).css({
      "color": "red"
    })
  });

  $("a").click(function () {
    var perro = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(perro).offset().top,
      },
      800
    );
  });

})

let botonEnviar = document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click", function () {
  alert("Mensaje Enviado con exito...");
});