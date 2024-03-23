const scrollDireita = document.getElementById("scroll-right");
const scrollEsquerda = document.getElementById("scroll-left");
const devIconsContainer = document.getElementById("dev-icons");

scrollDireita.addEventListener("click", function () {
  devIconsContainer.scrollLeft += 200;

  if (
    devIconsContainer.scrollLeft >=
    devIconsContainer.scrollWidth - devIconsContainer.clientWidth
  ) {
    scrollEsquerda.style.visibility = "visible";
    scrollDireita.style.visibility = "hidden";
  }
});

scrollEsquerda.addEventListener("click", function () {
  devIconsContainer.scrollLeft -= 200; //

  if (devIconsContainer.scrollLeft === 0) {
    scrollEsquerda.style.visibility = "hidden";
    scrollDireita.style.visibility = "visible";
  }
});

// Oculta a seta esquerda inicialmente
scrollEsquerda.style.visibility = "hidden";

//SCROLL RIGHT AND LEFT

document.addEventListener("DOMContentLoaded", function () {
  // Obtém o caminho da URL atual
  var path = window.location.pathname;

  // Verifica o valor do caminho da URL no console
  console.log("Caminho da URL:", path);

  // Verifica se a URL contém "back.html", se sim, adiciona a classe "active" a back-test
  if (path.includes("back.html")) {
    document.querySelector(".back-test").classList.add("active");
  } else {
    // Caso contrário, adiciona a classe "active" a front-test
    document.querySelector(".front-test").classList.add("active");
  }
});
