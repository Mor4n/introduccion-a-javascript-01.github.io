
// Reto 1 - Suma

let x = 2;
let y = 3;
let z = 4;

const func = (a,b,c) =>{
    x = 1;
    b = 2;

    return a+b+c+x;
}

console.log(func(x,y,z) + func(func(0,0,1),1,1) ); // 17

// Reto 2 - Strings

let a = "a";
let b = "b";
let c = "c";

const fun1 = (v1, v2, v3) =>{
    
    if(v1 =="m")
    {
        return "k"
    }
    else{
        return fun1("m",v1+v2,v3); 
    }

}

const fun2 = (v1,v2,v3)=>{
    return fun1(b,fun1(v1+v2),v3)
}

console.log(fun1(a,b,c) + fun2(a,b,c)); // "k+k" = kk

// Reto 3 - Recursión

let rec = (x) =>{

    if (x % 2 == 0){

        return x+1

    }else{

        return rec(x+2);

    }

}

console.log(rec(6));
