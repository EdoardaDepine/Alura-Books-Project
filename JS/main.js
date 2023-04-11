let livros = [];
async function buscarLivrosAPI() {
  const resposta = await fetch(
    "https://guilhermeonrails.github.io/casadocodigo/livros.json"
  );
  livros = await resposta.json();
  console.table(livros);
  mostrarLivros(livros);
}

buscarLivrosAPI();

const inserirLivrosIndex = document.querySelector("#livros");

function mostrarLivros(arrayLivros) {
  arrayLivros.forEach((livro) => {
    inserirLivrosIndex.innerHTML += `
    <div class="livro">
    <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
    <h2 class="livro__titulo">
    ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
      <span class="tag">${livro.categoria}</span>
      </div>
      </div>
      `;
  });
}
