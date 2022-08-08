/*
1.Crie um elemento DIV com ID. 
Use a propriedade element.style para estilizar o elemento 
de marcação com largura, altura, borda, cor de fundo, tipo de fonte, cor da fonte e padding.
A estilização deve ser aplicada após o carregamento completo da página.
*/
console.log("Meu script está funfando?")

const ex1 = document.getElementById("msg1")
//Alterar as props de: largura, altura, borda, cor de fundo, tipo de fonte, cor da fonte e padding.
//largura
ex1.style.width = "100px"

//altura
ex1.style.height = "30px"

//borda
ex1.style.border = "1px dotted red"

//cor de fundo
ex1.style.backgroundColor = "rgb(92, 102, 255)"

//cor da fonte
ex1.style.color = "white"

//padding
ex1.style.padding = "35px"

//_fim ex1_

/*
2.Crie um elemento DIV com ID. Crie 3 botões que,
através do evento onclick,aplicam diferentes estilos ao elemento.
Por exemplo, o botão 1 aplica uma cor de fundo vermelha
e o botão 2 aplica uma cor de fundo azul. Estilize a borda,
cor de fundo e cor da fonte.
*/
//aplica uma cor de fundo vermelha
function vermelho() {
    msg2.style.color = "red"
}
//aplica uma cor de fundo azul
function azul() {
    msg2.style.backgroundColor = "blue"
}
//aplica uma borda, cor de fundo e cor da fonte.
function modifica() {
    msg2.style.border = "10px solid orange"
    msg2.style.backgroundColor = "grey"
    msg2.style.color = "white"
}
//Limpa todos os atributos do elemento msg2
function resetar() {
    msg2.style.color = ""
    msg2.style.backgroundColor = ""
    msg2.style.border = ""
}
//_fim ex2_

/*
    Crie 5 elementos DIV. Use o método getElementsByTagName() para acessar os elementos e estiliza-los com largura, altura, borda, cor de fundo e cor da fonte. Posicione-os lado a lado com uma margem entre eles (É possível usar uma estrutura de repetição para otimizar o script).
*/
//Colocar tela enquanto de carregamento
//document.body.onload
let divcontainer = document.getElementById("container")
for (let i = 1; i <= 5; i++) {
    //Appendchild
    divcontainer.appendChild(document.createElement("div"))
}

let listadivs = divcontainer.getElementsByTagName("div")
console.log(listadivs)
//style é a lista, background é a chave
for (let div of listadivs) {
    /*largura, altura, borda, cor de fundo e cor da fonte. */
    div.style.width = "10px"
    div.style.height = "15px"
    div.style.border = "5px solid red"
    div.style.backgroundColor = "grey"
    div.style.color = "white"
    div.style.margin = "10px"
}
//Posicionando os elementos lado a lado
//https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox
divcontainer.style.display = "flex"
divcontainer.style.flexDirection = "row"

//window.location.href = "https://google.com"
/*
    Crie um parágrafo com ID. Use a propriedade innerHTML para alterar o conteúdo do parágrafo. Crie dois botões que, através do evento onclick, alteram o conteúdo do parágrafo para um novo texto ou adicionam um novo texto ao conteúdo pré-existente. Os novos conteúdos devem ser inseridos através de caixas de diálogo.   
*/
//Criando variável que acessa o elemento id (nomeparágrafo)
const p = document.getElementById("paragrafo")
function mudatexto() {
    p.innerText = "TextoNovo"
}
function adiciona() {
    //Os novos conteúdos devem ser inseridos através de caixas de diálogo.   
    //pega a resposta pelo prompt
    pt = prompt("Insira um texto:");
    //muda o parágrafo "p" 
    p.innerText += pt
}