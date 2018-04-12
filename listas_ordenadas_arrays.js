num_elementos = 5;

function create() {
    var list = [];
    return list;
}

function isEmpty(list) {
    var empty = true;
    for (var i = 0; i < num_elementos; i++) {
        if (list[i] != undefined) {
            empty = false;
        }
    }
    return empty;
}

function isFull(list) {
    var full = true;
    for (var i = 0; i < num_elementos; i++) {
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
    if (isNaN(elem)) {
        console.log("Error. El elemento introducido no es de tipo 'Number'.");
    } else {
        if (size(list) < num_elementos) {
            list.push(elem);
            list.sort();
        } else {
            console.log("Error. La lista está llena.");
        }
        return size(list);
    }
}

function get(list, index) {
    if (index >= num_elementos || index < 0) {
        console.log("El índice está fuera de los límites.");
    } else {
        return list[index];
    }
}

function toString(list) {
    return list.toString();
}

function indexOf(list, elem) {
    if (isNaN(elem)) {
        console.log("Error. El elemento introducido no es de tipo 'Number'.");
    } else {
        return list.indexOf(elem);
    }
}

function lastIndexOf(list, elem) {
    if (isNaN(elem)) {
        console.log("Error. El elemento introducido no es de tipo 'Number'.");
    } else {
        return list.latIndexOf(elem);
    }
}

function capacity(list) {
    return num_elementos;
}

function clear(list) {
    list.length=0;
    return list;
}

function firstElement(list) {
    if (size(list) == 0) {
        console.log("Error. La lista está vacía.");
    } else {
        var elem = list[0];
        return elem;
    }
}

function lastElement(list) {
    if (size(list) == 0) {
        console.log("Error. La lista está vacía.");
    } else {
        var elem = list[num_elementos - 1];
        return elem;
    }
}

function remove(list, index) {
    if (index >= num_elementos || index < 0) {
        console.log("El índice está fuera de los límites.");
    } else {
        var elem = list[index];
        list.splice(index,1);
        return elem;
    }
}

function removeElement(list, elem) {
    if (isNaN(elem)) {
        console.log("Error. El elemento introducido no es de tipo 'Number'.");
    } else {
        var bool = 0;
        for (var i = 0; i < num_elementos; i++) {
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
}










function test() {
    console.log("Daniel Álvaro");
    console.log("____________________");
    console.log("Listas.");
    console.log("____________________");
    console.log("");
    console.log("Lista inicial:");
    var list = create();
    for (var i = 0; i < num_elementos - 2; i++) {
        list[i] = Math.floor(Math.random() * (10 - 0) + 0);
    }
    list.sort();
    console.log(list);
    console.log("isEmpty:");
    console.log(isEmpty(list));
    console.log("isFull:");
    console.log(isFull(list));
    console.log("size:");
    console.log(size(list));
    console.log("add:");
    console.log(add(list, 2));
    console.log(list);
    console.log("get:");
    console.log(get(list, 2));
    console.log("toString:");
    console.log(toString(list));
    console.log("indexOf: (del 2, por ejemplo)");
    console.log(indexOf(list, 2));
    console.log("lastIndexOf: (del 2, por ejemplo)");
    console.log(indexOf(list, 2));
    console.log("clear:");
    console.log(clear(list));
    console.log("Rellenamos de nuevo la lista aleatoriamente.");
    for (var i = 0; i < num_elementos; i++) {
        list[i] = Math.floor(Math.random() * (10 - 0) + 0);
    }
    list.sort();
    console.log(toString(list));
    console.log("firstElement:");
    console.log(firstElement(list));
    console.log("lastElement:");
    console.log(lastElement(list));
    console.log("remove:");
    console.log(remove(list, 0));
    console.log(toString(list));
    console.log("removeElement:");
    console.log(removeElement(list, 1));
    console.log(toString(list));
}



window.onload = test;
