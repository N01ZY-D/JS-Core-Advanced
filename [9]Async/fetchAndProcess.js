async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url);
    
    // Проверка, что запрос завершился успешно
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Обработка ошибки
    console.error('Произошла ошибка при загрузке данных:', error);
    return `Произошла ошибка: ${error.message}`;
  }
}

// Пример использования функции
fetchAndProcessData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка в обработке данных:', error));
