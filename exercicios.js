/**
 * Multiplicar 3 valores
 * Dividir 
 * Subtrair
 * Funcao calcular fatorial do parametro
 * Criar uma lista com todos os numeros para até o numero do parametro 
 * A partir de uma lista devolver uma lista com todos os elementos multiplicados por 2
 * A partir de um Objeto devolver todas as chaves em uma lista;
 * A partir de um objeto devolver todos os valores em uma lista;
 * 
 * A partir da lista BondeDasPopuzudas devolver as que tem cintura maior que 100
 * A partir do Objeto BondeDosFunkeiro devolver os que ja foram presos mais de 3 vezes
 */

const BondeDasPopuzudas = [
    {nome: 'Joaquina', cintura: 85},
    {nome: 'Raquel', cintura: 350},
    {nome: 'Andressa', cintura: 102},
    {nome: 'Luara', cintura: 45},
    {nome: 'Josefina', cintura: 105},
]

const BondeDosFunkeiro = {
    McDidico: { preso: 4},
    McNeneco: { preso: 1},
    McRusso: { preso: 7},
    McNovato: { preso: 0},
    McBinLaden: { preso: 12},
}

 
const somaDoisParametros = (a, b) =>{

    console.log(a + b);
    return a+b;
}
