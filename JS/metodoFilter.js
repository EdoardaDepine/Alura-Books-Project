const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const botao = document.getElementById(this.id);
  const categoriaBotao = botao.value;
  const livrosFiltrados = livros.filter(
    (livro) => livro.categoria == categoriaBotao
  );
  mostrarLivros(livrosFiltrados);
}
