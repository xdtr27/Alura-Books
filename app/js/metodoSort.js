let btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreço)

function ordenarLivrosPorPreço() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livrosOrdenados)
}