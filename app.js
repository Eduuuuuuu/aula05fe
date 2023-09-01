'use strict'

const contatos = [
    {
        nome: 'Edu',
        imagem: 'batata.jpg',
        qtd: '1',
        mensagem: 'Eae bão?',
        atendente: 'Jaime o gordo',
        online: '1 hora atrás'
    }
]

function criarCards (contatos) {
    const container = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${contatos.imagem}`
    imagem.alt = contatos.nome

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const info = document.createElement('div')
    info.classList.add('info')

    const mensagem = document.createElement('div')
    mensagem.classList.add('mensagem')
    mensagem.textContent = contatos.mensagem

    const nome = document.createElement('div')
    nome.classList.add('nome')
    nome.textContent = contatos.nome

    const atendente = document.createElement('p')
    atendente.classList.add('nome')
    atendente.textContent = contatos.atendente

    const qtd = document.createElement('p')
    qtd.classList.add('qtd')
    qtd.textContent = contatos.qtd

    const online = document.createElement('div')
    online.classList.add('online')
    online.textContent = contatos.online

    contato.replaceChildren(nome, qtd)
    info.replaceChildren(contato, mensagem)
    card.replaceChildren(info, imagem, online, atendente)
    container.appendChild(card)
}

contatos.forEach(criarCards)