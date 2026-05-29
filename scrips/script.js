const inputPedido = document.getElementById("inputPedido")
const botaoAdicionar = document.getElementById("btnAdicionar")
const botaoAtender = document.getElementById("btnAtender")
const lista = document.getElementById("listaPedidos")

botaoAdicionar.addEventListener("click", () => {
    const li = document.createElement("li")
    
    li.innerText = inputPedido.value 

    const botaoCancelar = document.createElement("button")
    botaoCancelar.innerText = "❌"

    botaoCancelar.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(botaoCancelar)
    lista.appendChild(li)

    inputPedido.value = " "

    li.addEventListener("click" , () => {
    li.style.textDecoration = "line-through"
})

if(li.value == " "){
    return;
}


})

botaoAtender.addEventListener("click", () => {
    const primeiro = lista.firstElementChild
    if(primeiro){
        primeiro.remove()
    } else {
        alert("A lista está vazia")
    }
}) 