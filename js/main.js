function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }





  let openButton = document.getElementById("open-popup");
  let closeButton = document.getElementById("close-popup");
  let popupContainer = document.getElementById("popup-container");
  let body = document.body;
  
  openButton.addEventListener("click", function() {
    popupContainer.style.display = "block";
    body.classList.add("popup-open");
  });
  
  closeButton.addEventListener("click", function() {
    popupContainer.style.display = "none";
    body.classList.remove("popup-open");
  });
  