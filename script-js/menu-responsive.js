
 
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



    sidebar.addEventListener("mouseleave", tryAutoClose);
    menuBtn.addEventListener("mouseleave", tryAutoClose);
