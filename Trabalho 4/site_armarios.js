function mudar(event) {
    var armario = event.target; 
    var text = armario.querySelector('.text'); 
    if (armario.classList.contains("Ocupado")) {
        armario.classList.remove("Ocupado");
        armario.classList.add("Desocupado");
        text.textContent = "Desocupado.";
    } 
    else if (armario.classList.contains("Desocupado")) {
        armario.classList.remove("Desocupado");
        armario.classList.add("Manutenção");
        text.textContent = "Manutenção.";
    } 
    else if (armario.classList.contains("Manutenção")) {
        armario.classList.remove("Manutenção");
        armario.classList.add("Ocupado");
        text.textContent = "Ocupado.";
    }
}
function mudar2(event) {
    var tm = event.target;
    var aa = tm.parentNode;
    var e = aa.querySelector('.Desocupado, .Ocupado, .Manutenção')
    var text = aa.querySelector('.text'); 
    if (e.classList.contains("Ocupado")) {
        e.classList.remove("Ocupado");
        e.classList.add("Desocupado");
        text.textContent = "Desocupado.";
    } 
    else if (e.classList.contains("Desocupado")) {
        e.classList.remove("Desocupado");
        e.classList.add("Manutenção");
        text.textContent = "Manutenção.";
    } 
    else if (e.classList.contains("Manutenção")) {
        e.classList.remove("Manutenção");
        e.classList.add("Ocupado");
        text.textContent = "Ocupado.";
    }
}
function mostrarDados() {
    function extrairDados() {
        fetch('dat.json')
        .then(Response => Response.json())
        .then(data => {
            const arm = data.armarios;
            for (let a = 0; a < arm.length; a++) {
                const armarioDiv = document.createElement('div');
                armarioDiv.setAttribute('class', 'armarios');
                const nu = arm[a].numero;
                const nus = document.createElement('div');
                nus.setAttribute('class', 'numero');
                nus.textContent = `Nº${nu}.`;
                const estado = arm[a].tipo;
                const estadoDiv = document.createElement('div');
                estadoDiv.setAttribute('class', estado);
                estadoDiv.addEventListener('click', mudar);
                const texto = document.createElement('span');
                texto.setAttribute('class', 'text');
                texto.textContent = `${estado}.`;
                estadoDiv.appendChild(texto);
                armarioDiv.appendChild(estadoDiv);
                for (let b = 0; b < 3; b++) {
                    const linhaDiv = document.createElement('div');
                    linhaDiv.setAttribute('class', 'linha');
                    armarioDiv.appendChild(linhaDiv);
                }
                const p = document.createElement('div');
                p.setAttribute('class', 'puxador');
                armarioDiv.appendChild(nus);
                armarioDiv.appendChild(p);
                const t = document.createElement('div');
                t.setAttribute('class', 'trava');
                t.addEventListener('click', mudar2);
                armarioDiv.appendChild(t)
                const corpoDiv = document.getElementById('container');
                corpoDiv.appendChild(armarioDiv);
            }
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo JSON:', error);
        });
    }
    extrairDados();
}