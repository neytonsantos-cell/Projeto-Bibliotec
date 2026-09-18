const livros = document.querySelectorAll('.livro');
const botaoAnterior = document.getElementById('pagina-anterior');
const botaoProximo = document.getElementById('proxima-pagina');
const numeroPagina = document.querySelector('.pagina-atual');
const quantidadeLivros = document.querySelector('.quantidade-livros');

//* Configuração da paginação

// Define quantos livros serão exibidos por página
const livrosPorPagina = 4;
// Guarda qual pagina está sendo exibida atualmente começando da página 1
let paginaAtual = 1;

//* Calculadndo o total de páginas
//Divide o total de livros pelo número de livros por página e 
//arredonda para cima para garantir que todos os livros sejam exibidos
//Exemplo: 
// 10 livros / 4 livros = 2,5
//Match.ceil() = 2,5 arredondado para cima -> 3 páginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

//* Função para exibir os livros da página atual */
function mostrarPagina() {
    // Descobre o indice do primeiro livro a ser exibido na página atual
    //Pagina 1:
    // (1 - 1) * 4 = 0
    //Pagina 2:
    // (2 - 1) * 4 = 4
    //Pagina 3:
    // (3 - 1) * 4 = 8
    const inicio = (paginaAtual - 1) * livrosPorPagina;
    // Descobre o indice do último livro a ser exibido na página atual
    //Pagina 1:
    // 0 + 4 = 4
    //Pagina 2:
    // 4 + 4 = 8
    //Pagina 3:
    // 8 + 4 = 12
    const fim = inicio + livrosPorPagina;

    livros.forEach((livro, posicao) => {

        //Percorre toda lista de livros encontradas no HTML
        //"livro" é o elemento HTML do livro atual
        // "posicao" é o indice do livro atual na lista de livros

        // Verifica se o livro atual está dentro do intervalo de livros
        // que devem ser exibidos na página atual
        if (posicao >= inicio && posicao < fim) {
            // mostra o elemento na tela
            livro.style.display = "grid";            
        }
        else {
            // esconde o elemento da tela
            livro.style.display = "none";
        }
    })
    // Atualiza o número da página atual exibida na tela
    numeroPagina.textContent = paginaAtual;

    // Inicialmente, consideramos "fim" como a posição do último livro exibido na página atual
    let ultimoLivro = fim;

    if (ultimoLivro > livros.length) {
        // Se o índice do último livro for maior que o total de livros, ajustamos para o total de livros
        ultimoLivro = livros.length;
    }


    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
}

// Evento de clique no botão de proxima página
botaoProximo.addEventListener('click', () => {

    // Só permite avançar se ainda houver páginas a serem exibidas
    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        mostrarPagina();
    }
})

// Evento de clique no botão de página anterior
botaoAnterior.addEventListener('click', () => {
    // Só permite retroceder se não estiver na primeira página
    if (paginaAtual > 1) {
        paginaAtual--;
        mostrarPagina();
    }
})

// Inicializa a exibição da primeira página ao carregar a página
mostrarPagina();