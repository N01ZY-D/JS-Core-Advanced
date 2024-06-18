function promiseWithSquare(initialValue){
    return new Promise(function (resolve){
        setTimeout(() => {
            const result = initialValue * initialValue;
            console.log(`Результат: ${result}`);
            resolve(result);
        }, 3000);
    })
}

// Начальное значение
const initialValue = 2;
console.log(`Начальное значение: ${initialValue}`);
Promise.resolve(initialValue)
    .then((value) => {
        return promiseWithSquare(value);
    })
    .then((value) => {
        return promiseWithSquare(value);
    })
    .then((value) => {
        return promiseWithSquare(value);
    })
    .then((finalValue) => {
        console.log(`Конечный результат: ${finalValue}`);
    })
    .catch((error) => {
        console.error(`Произошла ошибка: ${error}`);
    });
