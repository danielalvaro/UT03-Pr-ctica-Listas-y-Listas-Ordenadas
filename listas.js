//Pila: Solo puede sacarse el último elemento.
//Cola: Permite insertar, extraer o comprobar si está vacía.
//Lista: Se permite insertar o extraer cualquier elemento.

num_elementos = 5;

function create() {
    var list = new Array(num_elementos);
    for (var i = 0; i < list.length; i++) {
        list[i] = Math.floor(Math.random() * (10 - 0) + 0);
    }
    return list;
}

function isEmpty(list) {
    var empty = true;
    for (var i = 0; i < list.length; i++) {
        if (list[i] != undefined) {
            empty = false;
        }
    }
    return empty;
}

function isFull(list) {
    var full = true;
    for (var i = 0; i < list.length; i++) {
        if (list[i] == undefined) {
            full = false;
        }
    }
    return full;
}

function size(list) {
    return list.length;
}

function add(list, elem) {
    list[list.length] = elem;
    return list.length;
}

function addAt(list, elem, index) {
    list[index] = elem;
    return list.length;
}

function get(list, index) {
    return list[index];
}

function toString(list) {
    var cad = "";
    for (var i = 0; i < list.length; i++) {
        if (i != list.length - 1) {
            cad = cad + list[i] + "-";
        } else {
            cad = cad + list[i];
        }
    }
    return cad;
}

function indexOf(list, elem) {
    var pos = -1;
    for (var i = 0; i < list.length; i++) {
        if (list[i] == elem) {
            pos = i;
        }
    }
    return pos;
}

function lastIndexOf(list, elem) {
    var pos = -1;
    for (var i = list.length; i = 0; i--) {
        if (list[i] == elem) {
            pos = i;
        }
    }
    return pos;
}

function capacity(list) {
    return list.length;
}

function clear(list) {
    list.length = 0;
    return list;
}

function firstElement(list) {
    var elem = list[0];
    return elem;
}

function lastElement(list) {
    var elem = list[list.length - 1];
    return elem;
}

function remove(list, index) {
    var elem = list[index];
    list[index] = undefined;
    return elem;
}

function removeElement(list, elem) {
    var bool = "0";
    for (var i = 0; i < list.length; i++) {
        if (list[i] == elem) {
            list[i] = undefined;
            bool = 1;
        }
    }
    if (bool != 0) {
        return true;
    } else {
        return false;
    }
}

function set(list,elem){
        for(var i=0;i<list.length;i++){
            if(list[i]==elem){
                list[i]=i;
            }
        }
        return elem;
    }









function test() {
    console.log("Daniel Álvaro");
    console.log("____________________");
    console.log("Listas.");
    console.log("____________________");
    console.log("");
    console.log("Lista inicial:");
    var list = create();
    console.log(list);
    console.log("isEmpty:");
    console.log(isEmpty(list));
    console.log("isFull:");
    console.log(isFull(list));
    console.log("size:");
    console.log(size(list));
    console.log("add:");
    console.log(add(list, 2));
    console.log("addAt:");
    console.log(addAt(list, 0, 0));
    console.log("get:");
    console.log(get(list, 1));
    console.log("toString:");
    console.log(toString(list));
    console.log("indexOf: (del 4, por ejemplo)");
    console.log(indexOf(list, 4));
    console.log("lastIndexOf: (del 4, por ejemplo)");
    console.log(indexOf(list, 4));
    console.log("clear:");
    console.log(clear(list));
    console.log("Rellenamos de nuevo la lista aleatoriamente.");
    for (var i = 0; i < num_elementos; i++) {
        list[i] = Math.floor(Math.random() * (10 - 0) + 0);
    }
    console.log(toString(list));
    console.log("firstElement:");
    console.log(firstElement(list));
    console.log("lastElement:");
    console.log(lastElement(list));
    console.log("remove:");
    console.log(remove(list, 0));
    console.log(toString(list));
    console.log("removeElement:");
    console.log(removeElement(list, 5));
    console.log(toString(list));
    console.log("set:");
    console.log(set(list, 2));
    console.log(toString(list));
}

window.onload = test;
