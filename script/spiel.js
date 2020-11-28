function playGame(){
	var spielzug=document.getElementById("spielzug").value;
	var gegnerzug = Math.floor( Math.random() * (4 - 1 +1 )) +1;
	alert(gameEngine(spielzug,gegnerzug));
}
//define 1 as Schere, 2 as Stein, 3 as Papier
function gameEngine(spieler,computer){
	
	if (spieler==computer){
		return("unentschieden");
	}
	if (spieler==1 && 2 == computer){
		return("verloren");
	}else{
		return("win");
	}
	if (spieler==2 && 3 == computer){
		return("verloren");
	}else{
		return("win");
	}
	if (spieler==3 && 1 == computer){
		return("verloren");
	}else{
		return("win");
	}

}
