var haslo = "Bez pracy nie ma kołaczy";
haslo=haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
	
	
}


function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
	
	
	
	
}

window.onload = start;

function start()
{
	document.getElementById("alfabet").innerHTML = "lolwut";
	
	
	
	var litery = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K",
	"L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R","S","Ś", "T", "U", "V","W", "X",
	"Y", "Z", "Ź", "Ż"];
	
	
	wypisz_haslo();
}