const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", filtrarLivros));
const sectionLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

async function filtrarLivros(event) {
  if (event.target.id === 'btnLivrosDisponiveis') {
    let livrosDisponiveis = filtrarPorDisponibilidade();
    exibirOsLivrosNaTela(livrosDisponiveis)
    const precoDosLivrosDisponiveis = livrosDisponiveis.reduce((acc, livro) => acc + livro.preco, 0)    
    sectionLivrosDisponiveis.innerHTML = `  
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${(precoDosLivrosDisponiveis).toFixed(2).replace(".", ",")}</span></p>
    </div> 
    `
  } else {
    let livrosFiltrados = livros.filter((livro) => {
      return livro.categoria === event.target.value;
    });
    exibirOsLivrosNaTela(livrosFiltrados);
  }
  
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}
