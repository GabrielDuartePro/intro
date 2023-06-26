function clicar(n) {
    const quadrado1 = document.getElementById("quadrado1");
    const quadrado2 = document.getElementById("quadrado2");

    if (n === "BRANCO") {
      quadrado1.innerHTML = "";
      quadrado2.innerHTML = "";
      console.log("Voto em branco registrado.");
    }
    else if (n === "CORRIGE") {
      quadrado1.innerHTML = "";
      quadrado2.innerHTML = "";
      exibirDadosCandidato.innerHTML = "";
      AtualizaTela();
      console.log("Voto corrigido.");
    }
    else if (n === "CONFIRMA") {

        if (quadrado1.innerHTML !== "" && quadrado2.innerHTML !== "") {
                //console.log("Voto confirmado: " + quadrado1.innerHTML + quadrado2.innerHTML);
                console.log(`Voto confirmado: ${quadrado1.innerHTML + quadrado2.innerHTML}.`);
                //som();
        }
        /*else if("BRANCO()") {
            console.log("Voto em branco confirmado.");
        }*/
        else {
            console.log("Nenhum número foi digitado para confirmar o voto.");
        }
    }
    else {
        if (quadrado1.innerHTML === "") {
            quadrado1.innerHTML = n;
        }
        else if (quadrado2.innerHTML === "") {
            quadrado2.innerHTML = n;
        }
      else {
        console.log("Os dois quadrados já estão preenchidos.");
        }
    }

    if (quadradosPreenchidos()) {
        NovaTela();
    }
}


/*function som(){
    const x = getElementById('audio');
    x.play();
}*/
function NovaTela() {
    const etapa1 = document.getElementById('etapa1');
    const etapa2 = document.getElementById('etapa2');
    const quadrado1 = document.getElementById('quadrado1');
    const quadrado2 = document.getElementById('quadrado2');
    const quadradosEtapa2 = document.querySelectorAll('#etapa2 .quadrado');

    quadradosEtapa2[0].innerHTML = quadrado1.innerHTML;
    quadradosEtapa2[1].innerHTML = quadrado2.innerHTML;

    exibirDadosCandidato();

    etapa1.style.display = 'none';
    etapa2.style.display = 'block';
    imagemCandidato.style.visibility = 'visible';
    final.style.visibility = 'visible';
    
}
function AtualizaTela() {
    const quadrado1 = document.getElementById('quadrado1');
    const quadrado2 = document.getElementById('quadrado2');
    const quadradosEtapa2 = document.querySelectorAll('#etapa2 .quadrado');

    quadradosEtapa2[0].innerHTML = quadrado1.innerHTML;
    quadradosEtapa2[1].innerHTML = quadrado2.innerHTML;

    const final = document.getElementById('final');
    const imagemCandidato = document.getElementById('imagemCandidato');    

    imagemCandidato.style.visibility = 'hidden';
    final.style.visibility = 'hidden';
    
}
function quadradosPreenchidos() {
    const quadrado1 = document.getElementById('quadrado1');
    const quadrado2 = document.getElementById('quadrado2');
    
    return quadrado1.innerHTML !== "" && quadrado2.innerHTML !== "";
           
}
function exibirDadosCandidato() {
    fetch('./dat.json')
      .then(response => response.json())
      .then(data => {
        const quadrado1 = document.getElementById('quadrado1');
        const quadrado2 = document.getElementById('quadrado2');
        const nomeEtp2 = document.getElementById('nome');
        const partidoEtp2 = document.getElementById('partido');
        const imagemCandidato = document.getElementById('imagemCandidato');

        const numeroVoto = quadrado1.innerHTML + quadrado2.innerHTML;

        //const candidato = data.candidatos.find(candidatos => candidatos.numero === parseInt(numeroVoto));
        const candidato = data.candidatos.find(candidatos => candidatos.numero === numeroVoto);
        if (candidato) {
          //nomeEtp2.innerHTML = `Nome: ${candidato.nome}`;
          //nomeEtp2.innerHTML = "Nome: "+candidato.nome;
          nomeEtp2.innerHTML = `Nome: ${candidato.nome}.`
          partidoEtp2.innerHTML = `Partido: ${candidato.partido}.`;
          imagemCandidato.src = `imgs/${candidato.imagem}`;
          //document.body.appendChild(imagemCandidato);
        }
    })
    .catch(error => {
        console.log('Erro ao ler o arquivo JSON:', error);
    });
}