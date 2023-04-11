const botaoLivrosFront = document.querySelector("#btnFiltrarLivrosFront");

botaoLivrosFront.addEventListener("click", filtrarLivrosFront);

function filtrarLivrosFront() {
  const livrosFiltrados = livros.filter(
    (livro) => livro.categoria == "front-end"
  );
  console.table(livrosFiltrados);
}
