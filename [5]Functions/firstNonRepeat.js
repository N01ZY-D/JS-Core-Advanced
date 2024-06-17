function findFirstNonRepeatingChar(str) {
    const charMap = new Map();

    // Сначала пройдем по строке и подсчитаем количество каждого символа
    for (let char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    // Затем пройдем по строке еще раз и найдем первый символ с количеством 1
    for (let char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    return null; // Если все символы повторяются, вернуть null
}

const str = "aabccdeff";
console.log(findFirstNonRepeatingChar(str)); // Вывод: "b"