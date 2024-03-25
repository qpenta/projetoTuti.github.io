// Obtém uma referência para o contêiner de ícones
const devIcons = document.getElementById("dev-icons");

// Obtém uma referência para o card ao lado
const cardInfo = document.getElementById("card-info");
const description = document.querySelector(".description");

// Mapeia o nome da tecnologia para sua descrição correspondente
const descriptions = {
  SCSS: "Sass (Syntactically Awesome Style Sheets) é uma linguagem de folhas de estilo para estilizar páginas da web.",
  VUE: "Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário.",
  TypeScript:
    "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional à linguagem.",
  Git: "Git é um sistema de controle de versão distribuído usado principalmente no desenvolvimento de software.",
  HTML: "HTML (Hypertext Markup Language) é a linguagem padrão para criação de documentos web.",
  JavaScript:
    "JavaScript é uma linguagem de programação de alto nível e multi-paradigma.",
  CSS: "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.",
  node: "Node.js é um ambiente de tempo de execução JavaScript que permite executar código JavaScript no servidor.",
  nest: "Nest.js é um framework para construção de aplicativos eficientes e escaláveis em Node.js.",
  mysql:
    "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado.",
  docker:
    "Docker é uma plataforma de software que simplifica o processo de criação, implantação e execução de aplicativos em contêineres.",
};

// Obtém todas as imagens dentro do contêiner de ícones
const icons = devIcons.querySelectorAll("img");

// Adiciona um evento de clique a cada imagem
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Obtém o texto do atributo alt da imagem clicada
    const iconName = icon.alt;

    // Exibe a descrição correspondente ao nome da tecnologia no card ao lado
    description.textContent = descriptions[iconName];

    // Verifica se o card-info está oculto e remove a classe 'hidden' apenas se estiver oculto
    if (cardInfo.classList.contains("hidden")) {
      cardInfo.classList.remove("hidden");
    }
  });
});

// Oculta o card-info ao carregar a página
cardInfo.classList.add("hidden");

// Adiciona um ouvinte de evento de clique ao documento inteiro
document.addEventListener("click", (event) => {
  // Verifica se o alvo do clique não é o card nem um dos ícones
  if (!cardInfo.contains(event.target) && !devIcons.contains(event.target)) {
    // Oculta o card
    cardInfo.classList.add("hidden");
  }
});

// Obtém uma referência para o botão de fechar
const closeBtn = document.getElementById("close-btn");

// Adiciona um ouvinte de evento de clique ao botão de fechar
closeBtn.addEventListener("click", () => {
  // Oculta o card
  cardInfo.classList.add("hidden");
});
