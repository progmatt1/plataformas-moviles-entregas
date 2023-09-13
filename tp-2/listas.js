var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];


function invertirLista(listaDeNumeros) {
    return listaDeNumeros.reverse();
}

function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) {
        return 0;
    }
    const suma = listaDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / listaDeNumeros.length;
}

function crearListaDeNumeros(inicio, fin) {
    const lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}

function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.sort((a, b) => b - a);
}

function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}

function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.sort((a, b) => a.length - b.length);
}

function encontrarPalabraMasCorta(listaDePalabras) {
    if (listaDePalabras.length === 0) {
        return "";
    }
    return listaDePalabras.reduce((palabraMasCorta, palabra) => {
        if (palabra.length < palabraMasCorta.length) {
            return palabra;
        }
        return palabraMasCorta;
    }, listaDePalabras[0]);
}

function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(numero => numero > 0);
}

function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 6).length;
}

function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => !!valor);
}

function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) {
        return "";
    }
    const ultimaPalabra = listaDePalabras.pop();
    return listaDePalabras.join(", ") + (listaDePalabras.length > 0 ? " y " : "") + ultimaPalabra + ".";
}

console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]));
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5));
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2,3,4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));
