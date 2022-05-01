window.onload = function()
{
    fetch('https://randomuser.me/api/?results=9')
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.results.forEach(element => {
                console.log(element);
                renderizarDadosUsuario(element);
            });
        });
};

function acoplador(elemento, node) {
    let novoElemento = document.createElement(elemento);
    let no = document.createTextNode(node);
    novoElemento.appendChild(no);
    return novoElemento;
}

function renderizarDadosUsuario(dados) {
    let container = document.querySelector('div.container');
    let card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = '';

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
    card.appendChild(titulo);
    card.appendChild(img);
    card.appendChild(mail);

    container.appendChild(card);
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.