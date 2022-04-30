// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
document.getElementById('random').addEventListener('click', function()
{
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            console.log(data.results[0]);
                renderizarDadosUsuario(data.results[0]);
        });
});

function acoplador(elemento, node) {
    let novoElemento = document.createElement(elemento);
    let no = document.createTextNode(node);
    novoElemento.appendChild(no);
    return novoElemento;
}

function renderizarDadosUsuario(dados) {
    let container = document.querySelector('div.card');
    container.innerHTML = '';

    let infoNome = dados.name;
    let nomeCompleto = infoNome.title + " " + infoNome.first + " " + infoNome.last;
    let picture = dados.picture.large;
    let email = dados.email;

    let titulo = acoplador('h2', nomeCompleto);
    let mail = acoplador('p', email);

    let img = document.createElement('img');
    img.setAttribute("src", picture);
    
    titulo.classList.add('nameNode');
    mail.classList.add('mail');
    container.appendChild(titulo);
    container.appendChild(img);
    container.appendChild(mail);

    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.