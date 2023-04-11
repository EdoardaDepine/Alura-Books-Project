const botaoPreco = document.querySelector("#btnOrdenarPorPreco");

botaoPreco.addEventListener("click", ordenaLivroPreco);

function ordenaLivroPreco() {
  const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  mostrarLivros(livrosOrdenados);
  console.log(livrosOrdenados);
}
