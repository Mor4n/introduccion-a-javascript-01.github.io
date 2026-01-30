let cliente_banco = true;
let buen_historial = false;

if (condicion_1){
    //Decisión 1
}else if (condicion_2){
    //Decisión 2
}else if (condicion_3){
    //Decisión 3
}else{
    // No se cumple con nada anterior, entonces realiza esto
}

if (condicion){
    // Que pasa si se cumple
}


// Proceso para otorgar el crédito

if(cliente_banco && buen_historial){
    console.log("Puedes tener crédito");
    
}
else if (!cliente_banco && !buen_historial) {
    // el ! para hacer lo contrario creo que era
    console.log("No tienes ni buen historial ni eres cliente >:c");
} 
else if (!cliente_banco){
    console.log("No eres cliente del banco");
    
}
else{
    console.log("No tienes buen historial créditicio");
    
}