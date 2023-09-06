let livros = [];
const endPointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endPointDaApi);
  livros = await response.json();
  let livrosComDesconto = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto);
  // console.table(livrosComDesconto)
}



