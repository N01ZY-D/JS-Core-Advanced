'use strict';

function splitIntoWords(str) {
     if (typeof str !== 'string') {
        return null;
    }
    // Используем регулярное выражение для разделения строки на слова
    const words = str.trim().replace(/(?!\b'\b)[^\w\s']+|_/g, "").split(/\s+/);
    // Создаем множество, чтобы оставить только уникальные слова
    const uniqueWords = new Set(words);
    // Преобразуем множество обратно в массив и возвращаем
    return Array.from(uniqueWords);
}

let sentence = "Hello! This isn't an_ _ _example sentence. Isn't it great?";
console.log(splitIntoWords(sentence));