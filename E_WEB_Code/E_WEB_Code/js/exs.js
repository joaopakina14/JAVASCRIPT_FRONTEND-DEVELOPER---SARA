// // let myLuckyNumber = 14;
// // let myName = "João";
// // alert ("O meu nome é " + myName + " e o meu número preferido é " + myLuckyNumber);

// // myLuckyNumber = 17;
// //     // myLuckyNumber++ serve só para adicionar 1 ao valor atribuido inicialmente à variável
// // myLuckyNumber++;
// // alert ("O meu nome é " + myName + " e o meu número preferido é " + myLuckyNumber);

// const message="  TASTE THE RAINBOW!  ";
// let whisper = message.toLowerCase().trim();

// alert (whisper);
// const word ="skateboard";
// let facialHair = word.slice(5,10).replace("o","e");
// alert (facialHair);

// let diaSemana = prompt('Dia da semana de hoje');
// diaSemana = diaSemana.toLowerCase();
// switch(diaSemana){
//     case 'sexta':
//         alert('Sextouuuuuuuuuuuuuuuuu');
//         break;
//     default:
//         alert('keep dreaming');
// }

// let password = prompt('Introduza uma password com pelo menos 6 carateres');
// if (password.length <6){
//     alert ('a pass é inválida');
// }else {
//         alert ('a pass é válida, pode seguir');
//     }

//EXERCICIOS POWERPOINT40
// //1. Cria um array de planetas: Mercúrio, Vénus, Terra, Mart, Jupiter, Saturno, 
// Urano, Neptuno, Plutão.
// 2. Mart foi escrito mal. Substitui pelo nome correcto, Marte.
// 3. Ups, o planeta Plutão foi removido do Sistema Solar.. Utilizando os métodos dos 
// arrays, remove o planeta da lista.
// 4. Descobriste um novo planeta, yaaay. Inventa um nome e adiciona ao início do 
// array.
// 5. Faz console.log() do array e verifica se está certo.

// let planetas = ['Mercúrio', 'Vénus', 'Terra', 'Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];

// alert (planetas);

// planetas [3]= 'Marte';
// alert (planetas);

// planetas.pop ();
// alert (planetas);

// planetas.unshift ('Yayyyyy');
// alert (planetas);

//EXERCICIO POWERPOINT44
// 1. No vosso ficheiro JS criem o seguinte array multidimensional com os lugares de 
// um avião: (podem encontrar o código na pasta exs do projecto do git).
// const airplaneSeats = [
// ['Ruth', 'Anthony', 'Stevie'],
// ['Amelia', 'Pedro', 'Maya'],
// ['Xavier', 'Ananya', 'Luis'],
// ['Luke', null, 'Deniz'],
// ['Rin', 'Sakura', 'Francisco']
// ];
// 2. No sítio onde existe um lugar vago, assignem o vosso nome. Façam 
// console.log() do novo array para confirmar se vos foi atribuído o lugar.

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// airplaneSeats[3][1] = ('João');
// alert(airplaneSeats);

//EXERCICIO47
// 1. Cria um objecto chamado product com as seguintes propriedades:
// • nome e assigna-lhe um nome à tua escolha.
// • inStock, como verdadeiro.
// • Price com o valor 1.99
// • Colors, com um array de vermelho, azul e verde;
// 2. Imprime na consola os seguintes valores:
// • Price
// • Cor Verde
// 3. Ups, a inflacção chegou à nossa loja. Muda o valor do produto para 2.55.

// let colors = ['vermelho', 'azul', 'verde'];
// let loja = { product:'Tide', price: 1.99, colors, inStock:true  
// }
// console.log ("O preço do produto é " + loja.price);
// console.log ("A cor escolhida é " + colors[2]);
// loja.price = (2.55);
// console.log ("O novo preço do produto é " + loja.price);

//EXERCICIO PAG52
//Lembra-se da música I'm blue dos Eiffel 65? Vamos usar o ciclo for para 
// escrever 6 vezes o '"Da ba dee da ba daa’;
// 2. Faça um ciclo for que imprima estes números, por esta ordem:
// •25
// •20
// •15
// •10
// •5

// for (let i=1; i<7; i++){
//     console.log (i+' Da ba dee da ba daa');
// }



// for (let i = 25; i >= 5; i -= 5) {
//     console.log(i);
// }

// //Exercicio 55
// // //1. Declare o seguinte array:
// // const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// // 2. Imprima na página os nomes em letra maiúscula.

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]
    
// for (let i=0; i<people.length; i++){
//     console.log(people[i].toUpperCase());
//     }

//1. Utilizando os loops e as condições que já aprendemos, construa uma lista de 
// compras.
// Dicas:
// • A lista é um array.
// • Fazer prompt para o utilizador adicionar items na lista, e adicionar esses items
// ao array.
// • Criar uma variável "código" e se o utilizador digitar isso, o ciclo acaba e a lista 
// aparece. Por exemplo, se digitar 'fim', deixam de aparecer prompts.

let shoppingList = [];
let item = prompt('Quais os produtos que quer comprar?');

while(item != "fim"){
    shoppingList.push(item);
    
    item = prompt("Quais os produtos que quer comprar? Digite Fim quando acabar.").toLowerCase().trim();
    
}
console.log (shoppingList)



















