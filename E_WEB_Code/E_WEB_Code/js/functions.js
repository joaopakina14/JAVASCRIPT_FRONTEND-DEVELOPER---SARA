

function helloWorld() {
    alert("Hello World!");
}

helloWorld();

function printHeart() {
    alert("<3");

}

printHeart();

//Esta função seguinte serve para reutilizar a mesma função. 
//Neste caso a função printAlert posso depois colocar no indexHtml as vezes que quiser com a mensagem que eu quiser
function printAlert(message) {
    alert(message);
}

function rant(message) {

    for (let i = 1; i < 4; i++) {
        alert(i + ' : ' + message.toUpperCase());

    }
}

function tellMeWhatYHate() {
    let hate = prompt('Diz-me o que odeias!');

    rant(hate);

}

function calc(num1, num2, op) {

    switch (op) {
        case '+':
            alert('O resultado é ' + (num1 + num2));
            break;
        case '-':
            alert('o resultado é' + (num1 - num2));
            break;
        case '*':
            alert('O resultado é ' + (num1 * num2));
            break;
        case '/':
            alert('O resultado é ' + (num1 / num2));


    }
    alert (calc);





}





