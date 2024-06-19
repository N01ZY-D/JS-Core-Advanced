function checkNumber(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject('Error');
        } else {
            setTimeout(() => {
                if (data % 2 === 0) {
                    resolve('Even');
                } else {
                    resolve('Odd');
                }
            }, data % 2 === 0 ? 2000 : 1000);
        }
    });
}

// Примеры использования функции
checkNumber(3)
    .then(result => console.log(result)) // Через 1 секунду выведет "Odd"
    .catch(error => console.error(error));

checkNumber(4)
    .then(result => console.log(result)) // Через 2 секунды выведет "Even"
    .catch(error => console.error(error));

checkNumber('not a number')
    .then(result => console.log(result)) // Немедленно выведет ошибку "Error"
    .catch(error => console.error(error));

console.log('smth');

//Хоть функция была вызвана в порядке 3 -> 4 -> smth -> not a number, в консоли отобразится в порядке smth -> error -> Odd -> Even, потому что сначала выполняются синхронные задачи (console.log('smth')), потом микрозадачи (then в checkNumber('not a number') является таковым), а потом макрозадачи (setTimeout в вызовах checkNumber(3) и checkNumber(4))