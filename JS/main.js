let livros = [];
async function buscarLivrosAPI() {
  const resposta = await fetch(
    "https://guilhermeonrails.github.io/casadocodigo/livros.json"
  );
  livros = await resposta.json();
  let livrosComDesconto = aplicarDesconto(livros);
  mostrarLivros(livrosComDesconto);
}

buscarLivrosAPI();
