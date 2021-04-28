var altura = 0;
var largura = 0;
var vida = 4;
var time = 15;



setInterval(function() {verificaTela()}, 500)


function verificaTela(){
	
	altura = Math.floor(Math.random() * window.innerHeight) - 80;
	largura = Math.floor(Math.random() * window.innerWidth) - 80;

	altura = altura < 20 ? 21 : altura;
	largura = largura < 20 ? 21 : largura;
}
	



	

function aparecerMosquito(){


if (document.getElementById('mosquito')) {

		document.getElementById('mosquito').remove();

		if((vida-1) > 0) {
		document.getElementById('vida' + (vida-1)).src = 'imagens/coracao_vazio.png'

		vida--;

		}
		

		else {

			clearInterval(criaMosca);
			window.location.href = 'game_over.html'
		}

	}



var criaMosquito = document.createElement('img');
criaMosquito.src = 'imagens/mosquito.png';
criaMosquito.className = mudaTamanho() + " " + inverter();
criaMosquito.style.position = 'absolute';
criaMosquito.style.top = altura + 'px';
criaMosquito.style.left = largura + 'px';
criaMosquito.id = 'mosquito';
criaMosquito.onclick = function(){criaMosquito.remove()};

document.body.appendChild(criaMosquito);

document.getElementById('cronometro').innerHTML = time;


if (time == -1) {

	clearInterval(criaMosca);
	window.location.href = 'vitoria.html'
}

else{
	time--
}


}



function mudaTamanho(){

var a = Math.floor(Math.random() * 3)

switch(a){

	case 0: 
	return 'mosquito1';

	case 1: 
	return 'mosquito2';

	case 2: 
	return 'mosquito3';
}

}

function inverter(){

	var a = Math.floor(Math.random() * 2)

	switch(a){

	case 0: 
	return 'invertido1';

	case 1: 
	return 'invertido2';
}

}


function reiniciar(){
	window.location.href = 'index.html'
}


function modosDeJogo(){
	var modo = window.location.search;
	modo = modo.replace("?", "");

	switch(modo){

		case 'facil':
		return 1500;

		case 'medio':
		return 1000;

		case 'dificil':
		return 750;
	}

}