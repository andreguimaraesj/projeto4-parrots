let numeroDeCartas = prompt("Digite o numero de cartas");
let tabuleiro = document.querySelector(".tabuleiro");
let tabuleiroHTML = [];
let imagens = [ 'adam.png', 'ney.png', 'seth.png', 'tata.png', 'thugga.png', 'whind.png', 'yas.png' ];
 let cartasDuplicadas = [];
 let cartasDuplicadasCerto = [];


    
  

 if (numeroDeCartas % 2 == 0 && numeroDeCartas >= 4 && numeroDeCartas <= 14){

    let cartasEmbaralhadas = imagens.sort(() => Math.random() - 0.5);
 
    let cartasDuplicadas = cartasEmbaralhadas.flatMap(valor => [valor, valor]);
 
    for(i=0 ; i < (numeroDeCartas ) ; i++){
        cartasDuplicadasCerto.push(cartasDuplicadas[i]);
    }

    
  
 
 
   

    let cartasProntas = cartasDuplicadasCerto.sort(() => Math.random() - 0.5);

    for(i = 0; i < (numeroDeCartas ) ; i++){
        tabuleiroHTML +=
        `<div class="carta" data-card = "${cartasProntas[i]}"> 
                <img class="cara" src="./imagens/${cartasProntas[i]}">
                <img class="nuca" src="./imagens/back.png">
        </div> `;


    }
 
 }
 
  
  

 
 
 
    tabuleiro.innerHTML = tabuleiroHTML ;

  let cartas = document.querySelectorAll(".carta");
  let primeiraCarta;
  let segundaCarta;
  let tranca = false;
  let contadorDeJogadas = 0;
  let contadorDeAcertos = 0;

 
  function viraCarta(){
    if(tranca){  
        return false; 
    }

        else{
             this.classList.add("vira");
             contadorDeJogadas++;

     
        }

      if(!primeiraCarta){
        primeiraCarta = this;
        return false;
       }
      else{
        segundaCarta = this;
      }

      verificaSeDeuBom();
    }
    
    function desabilita(){
        primeiraCarta.classList.remove("vira");
        segundaCarta.classList.remove("vira");
        [primeiraCarta, segundaCarta, tranca] = [null, null, false];
    }

    function alertaFinal(){
      alert("Voce ganhou em "+contadorDeJogadas+" jogadas!");

    }
    

   function verificaSeDeuBom() {
    tranca = true;

        let deuBom = primeiraCarta.dataset.card === segundaCarta.dataset.card;
        
        if(!deuBom){
            setTimeout( desabilita , 1000);
        }
        else{
            [primeiraCarta, segundaCarta, tranca] = [null, null, false];
            contadorDeAcertos++;
            if(contadorDeAcertos == (numeroDeCartas / 2)){
              setTimeout(alertaFinal, 1000);
             }

        }
        

     }

  
  cartas.forEach(xj => xj.addEventListener("click", viraCarta));

  

   

 

     
 