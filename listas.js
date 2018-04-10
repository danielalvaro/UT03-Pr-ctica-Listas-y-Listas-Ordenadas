//Pila: Solo puede sacarse el último elemento.
//Cola: Permite insertar, extraer o comprobar si está vacía.
//Lista: Se permite insertar o extraer cualquier elemento.

num_elementos=5;

function create(){
    var list=new Array(num_elementos);
    for(var i=0;i<list.length;i++){
        list[i]=Math.floor(Math.random()*(10-0)+0);
    }
    return list;
}

function isEmpty(list){
    var empty=true;
    for(var i=0;i<list.length;i++){
        if(list[i]!=undefined){
            empty=false;
        }
    }
    return empty;
}

function isFull(list){
    var full=true;
    for(var i=0;i<list.length;i++){
        if(list[i]==undefined){
            full=false;
        }
    }
    return full;
}

function size(list){
    return list.length;
}

function add(list,elem){
    
}



















function test(){
    console.log("Daniel Álvaro");
    console.log("____________________");
    console.log("Listas.");
    console.log("____________________");
    console.log("");
    console.log("Lista inicial:");
    var list=create();
    console.log(list);
    console.log("isEmpty:");
    console.log(isEmpty(list));
    console.log("isFull:");
    console.log(isFull(list));
    console.log("size:");
    console.log(size(list));
}

window.onload = test;