function accessUndefinedVariable() {
    try {
        // Попытка доступа к неопределенной переменной
        console.log(nonExistentVariable);
    } catch (error) {
        if (error instanceof ReferenceError) {
            // Обработка ошибки ReferenceError
            console.error("Ошибка: попытка доступа к неопределенной переменной.");
        } else {
            // Повторный выброс ошибки, если это не ReferenceError
            throw error;
        }
    }
}

// Вызов функции для демонстрации работы
accessUndefinedVariable();