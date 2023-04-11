const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const botao = document.getElementById(this.id);
  const categoriaBotao = botao.value;
  const livrosFiltrados =
    categoriaBotao == "disponivel"
      ? livros.filter((livro) => livro.quantidade > 0)
      : livros.filter((livro) => livro.categoria == categoriaBotao);
  mostrarLivros(livrosFiltrados);
  if (categoriaBotao == "disponivel") {
    const valorTotal = valorTotalLivrosDisponiveisNaTela(livrosFiltrados);
    exibirValorTotalLivrosDisponiveis(valorTotal);
  }
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
  valorTotalLivrosDisponiveis.innerHTML = `
  <div class='livros__disponiveis'>
  <p>
    Todos os livros disponíveis por R$ <span id='valor'>${valorTotal}</span>
  </p>
</div>;
  `;
}
