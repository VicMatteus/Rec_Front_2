window.onload = aoCarregar()

function aoCarregar(){
    localStorage.length < 1 ? consultar() : consultaLocal();
    document.getElementById('update').addEventListener('click', recarregar);
};

function consultar()
{
    fetch('https://randomuser.me/api/?results=9')
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.results.forEach(element => {
                localStorage.setItem('pessoas', JSON.stringify(data.results))
                renderizarDadosUsuario(element);
            });
        });
};

function consultaLocal() {
    let pessoas = JSON.parse(localStorage.getItem('pessoas'))
    pessoas.forEach(pessoa => {
        renderizarDadosUsuario(pessoa);
    });
}

function recarregar() {
    document.querySelector('.container').innerHTML = '';
    consultar();
}

function acoplar(elemento, node) {
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

    let titulo = acoplar('h2', nomeCompleto);
    titulo.classList.add('nameNode');

    let mail = acoplar('p', email);
    mail.classList.add('mail');


    let img = document.createElement('img');
    img.setAttribute("src", picture);
    
    let lixeira = document.createElement('button');
    lixeira.classList.add('lixeira')
    lixeira.innerText = '🗑️​';
    lixeira.addEventListener('click', function () {
        let pessoas = JSON.parse(localStorage.getItem('pessoas'));
        pessoas.forEach(pessoa => {
            if(pessoa.login.uuid === dados.login.uuid)
            {
                remover = pessoas.indexOf(pessoa);
            }
        });
        pessoas.splice(remover, 1);
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
        document.querySelector('.container').innerHTML = '';
        consultaLocal();
    });

    card.appendChild(titulo);
    card.appendChild(img);
    card.appendChild(mail);
    card.appendChild(lixeira)
    container.appendChild(card);
}