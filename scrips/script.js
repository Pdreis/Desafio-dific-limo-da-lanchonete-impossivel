const inputPedido = document.getElementById("inputTexto")
const botaoAdicionar = document.getElementById("btnAdicionar")
const botaoAtender = document.getElementById("btnAtender")
const lista = document.getElementById("listaPedidos")

botaoAdicionar.addEventListener("click", () => {
    const li = document.createElement("li")
    
    const pedido = document.createElement("p")
    pedido.innerText = inputPedido.value 

    const botaoCancelar = document.createElement("button")
    botaoCancelar.innerText = "❌"

    botaoCancelar.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(pedido)
    li.appendChild(botaoCancelar)
    lista.appendChild(li)

    inputPedido.value = " "

})