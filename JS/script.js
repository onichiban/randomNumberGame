var rand=Math.floor(Math.random() * 10) ;
var i;

var opcion=prompt("Introduzca un numero");
for(i=1; i<3; i++){
	
	if(opcion==rand){
	document.write("<h1 style=color:green>GANASTE</h1>");
		i=3;
	}
	else if(opcion!=rand){
		console.log(opcion);
		opcion=prompt("Introduzca otro numero");
	}
	console.log("ITERACIÓN: "+ i);
}

	if(i===2 || opcion!=rand){
		document.write("<H1 style=color:red>perdiste, el numero era </H1>" + rand);

	}

