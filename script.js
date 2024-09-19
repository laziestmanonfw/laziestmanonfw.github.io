let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (Number.isNaN(minValue)){
    minValue=-999;
}
if (Number.isNaN(maxValue)){
    maxValue=999;
}
if (minValue < -999){
    minValue=-999;
}
if (maxValue > 999){
    maxValue=999;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    answerNumber = 0;
    minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`
    
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
        const answerRandom = Math.floor( Math.random() *3);
        let text = ''; 
        if (answerRandom === 0) { 
            text = `Клянусь материнской платой, это число ${answerNumber}? `
        }
        else if (answerRandom === 1) { 
            text = `А может  ${answerNumber} ваше число?`
        } 
        else { 
            text = `Я буду цифровым позором если ${answerNumber} не ваше число?`
        }
        answerField.innerText = text ;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const innerRandom = Math.floor( Math.random() *3);
        let text = ''; 
        if (innerRandom === 0) { 
            text = `Клянусь материнской платой, это число ${answerNumber} `
        }
        else if (innerRandom === 1) { 
            text = `Отвечаю что ${answerNumber} ваше число`
        } 
        else { 
            text = `загаданное число ${answerNumber} `
        }
        answerField.innerText = text ;
        gameRun = false;
    }
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const answerRandom = Math.floor( Math.random() *3);
        let text = ''; 
        if (answerRandom === 0) { 
            text = `Клянусь материнской платой, это число ${answerNumber}? `
        }
        else if (answerRandom === 1) { 
            text = `А может  ${answerNumber} ваше число?`
        } 
        else { 
            text = `Я буду цифровым позором если ${answerNumber} не ваше число?`
        }
        answerField.innerText = text ;
        }
    }
})
// кнопка меньше

document.getElementById('btnRetry').addEventListener('click', function () {
    if (gameRun){
 minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
 maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (Number.isNaN(minValue)){
    minValue=0;
}
if (Number.isNaN(maxValue)){
    maxValue=100;
}
if (minValue < -999){
    minValue=-999;
}
if (maxValue > 999){
    maxValue=999;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;
}
else {
 minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
 maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (Number.isNaN(minValue)){
    minValue=-999;
}
if (Number.isNaN(maxValue)){
    maxValue=999;
}
if (minValue < -999){
    minValue=-999;
}
if (maxValue > 999){
    maxValue=999;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
orderNumberField = 0;
answerField = 0;
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;

}
})
// кнопка заново

