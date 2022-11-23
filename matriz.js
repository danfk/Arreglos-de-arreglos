let datos = [[01, 02, 03, 04, 05, 06],
             [07, 08, 09, 10, 11, 12],
             [13, 14, 15, 16, 17, 18],
             [19, 20, 21, 22, 23, 24],
             [25, 26, 27, 28, 29, 30],
             [31, 32, 33, 34, 35, 36]];

let leng = 6;

for (let i = 0; i < leng; i++){
    for (let j = i-1; j < leng; j++){
        datos[i][j];
    }
}

for(let i = leng; i > 0; i--){
    datos[i][i];
}

for(let i = leng, j = 0; i < leng; i--, j++ ){
    datos[i][j];
}

for(let i = leng; i > tam; i--){
    for(let j = i+1; j>leng; j--){
        datos[i][j];
    }
}


//----------------------------------------------------//
let letras = [['a', 'b', 'c', 'd'], //0
              ['e', 'f', 'g', 'h'], //1
              ['i', 'j', 'k', 'l'], //2
              ['m', 'n', 'o', 'p']];//3

let tam = 4;

for(let i = 0; i < tam; i++){ //Diagonal Principal
    letras[i][i];
}

for(let i = 0, j = tam-1; i<tam; i++, j--){ //Arriba Diagonal Principal
    letras[i][j];
}

for(let i = 0; i < tam; i++){ //Abajo Diagonal Principal
    for(let j = i-1; j<tam; j++){
        letras[i][j];
    }
}

function mostrar(matriz){ //Imprimir matriz
    let res = 0;
    for(let i = 0; i<matriz.length; i++){
        for(let j = 0; j<matriz.length; j++){
            res += mat[i][j];
            res += '/n'
        }
    }
    return res;
}