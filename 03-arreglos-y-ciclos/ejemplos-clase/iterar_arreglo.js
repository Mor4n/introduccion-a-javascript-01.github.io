const productos = ["Television","Computadora","Laptop","Tablet","Telefono"];


for (let i = 0; i < productos.length; i++) {
    console.log("Producto desde ciclo for:",i,"-",productos[i]); 
}

// Esto equivale a 

// i=0;
let i = 0;
if(i<productos.length){ // productos.length es 5
    console.log("Producto desde if: 0 -",productos[0]);
    i++
}

// i=1;
if(i<productos.length){// productos.length es 5
    console.log("Producto desde if: 1 -",productos[1]);
    i++
}

// i=2;
if(i<productos.length){// productos.length es 5
    console.log("Producto desde if: 2 -",productos[2]);
    i++
}

// i=3;
if(i<productos.length){// productos.length es 5
    console.log("Producto desde if: 3 -",productos[3]);
    i++
}

// i=4;
if(i<productos.length){// productos.length es 5
    console.log("Producto desde if: 4 -",productos[4]);
    i++
}

// i=5;

if(i<productos.length){// productos.length es 5, ya no cumple porque es igual a 5
    console.log("Producto desde if: 5 -",productos[5]);
    i++
}

// i=6;
if(i<productos.length){// productos.length es 5, ya no cumple porque es mayor a 5
    console.log("Producto desde if: 6 -",productos[6]);
    i++
}