
 
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");

    // Crear botón de cierre (✖)
    const closeBtn = document.getElementById("btn-close");


    function openSidebar() {
      sidebar.classList.add("active");
      menuBtn.style.display = "none";
      closeBtn.style.display = "block";
    }

    function closeSidebar() {
      sidebar.classList.remove("active");
      setTimeout(() => {
        menuBtn.style.display = "block";
      }, 300);

    }

    menuBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && sidebar.classList.contains("active")) {
        closeSidebar();
      }
    });

    document.addEventListener("click", (event) => {
      const isInside = sidebar.contains(event.target) || menuBtn.contains(event.target);
      if (!isInside && sidebar.classList.contains("active")) {
        closeSidebar();
      }
    });

    /*funcionalidad botones*/
    const btnClose = document.getElementById('btn-close');
    const tabButtons = document.querySelectorAll('.neon-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    menuBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      menuBtn.style.display = 'none';
    });

    btnClose.addEventListener('click', () => {
      sidebar.classList.remove('active');
      setTimeout(() => {
        menuBtn.style.display = 'block';
      }, 300);
    });

    // Mostrar contenido al hacer clic
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        tabContents.forEach(content => {
          content.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
      });
    });


      /*   document.getElementById("btn_calendar").addEventListener("click", function() {
    window.open("https://script-monitorias.web.app/", "_blank"); // "_blank" abre en nueva pestaña
  });*/