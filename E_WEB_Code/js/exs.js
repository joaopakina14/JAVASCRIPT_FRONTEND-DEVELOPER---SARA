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

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
    ];

    airplaneSeats [3][1] = ('João');
    alert (airplaneSeats);








