let nota = 0;

if (nota > 0){

    if (nota>=90){

        console.log("Tu nota es: ",nota , " has aprobado de forma: Excelente");
        
    } else if (nota>=75 && nota<=89){

        console.log("Tu nota es: ",nota , " has aprobado de forma: Bien");
        
    } else if (nota >= 60 && nota<=74){
        console.log("Tu nota es: ",nota , " has aprobado de forma:  Suficiente");
        
    }
    else{
        console.log("Tu nota es: ",nota ," no lograste aprobar :'/");
        
    }
}
else{
    console.log("La nota es: ",  nota, " probablemente se trate de un error o una nota no valida");
    
}
