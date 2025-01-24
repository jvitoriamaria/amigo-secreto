let participantes = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    
    const nome = inputNome.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    participantes.push(nome);

    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
    inputNome.value = "";
    inputNome.focus();
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Você precisa de pelo menos 2 participantes para realizar o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const amigoSorteado = participantes[indiceSorteado];

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 

    const li = document.createElement("li");
    li.textContent = `${amigoSorteado} foi o amigo secreto!`; 
    resultadoDiv.appendChild(li);
}
