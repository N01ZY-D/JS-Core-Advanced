class University {
    constructor(name) {
      this.name = name;
      this.faculties = [];
    }
  
    // Метод для добавления факультета
    addFaculty(facultyName) {
      if (!this.faculties.includes(facultyName)) {
        this.faculties.push(facultyName);
        console.log(`Факультет "${facultyName}" успешно добавлен.`);
      } else {
        console.log(`Факультет "${facultyName}" уже существует.`);
      }
    }
  
    // Метод для удаления факультета
    removeFaculty(facultyName) {
      const index = this.faculties.indexOf(facultyName);
      if (index !== -1) {
        this.faculties.splice(index, 1);
        console.log(`Факультет "${facultyName}" успешно удален.`);
      } else {
        console.log(`Факультет "${facultyName}" не найден.`);
      }
    }
  
    // Метод для отображения всех факультетов
    displayFaculties() {
      console.log(`Факультеты университета "${this.name}":`);
      this.faculties.forEach((faculty, index) => {
        console.log(`${index + 1}. ${faculty}`);
      });
    }
  }
  
  // Создание экземпляра класса University
  const myUniversity = new University("Университет имени Макаронного Монстра");
  
  // Добавление факультетов
  myUniversity.addFaculty("Факультет Информационных Технологий");
  myUniversity.addFaculty("Гуманитарный Факультет");
  myUniversity.addFaculty("Инженерно-Строительный Факультет");
  
  // Отображение всех факультетов
  myUniversity.displayFaculties();
  
  // Удаление факультета
  myUniversity.removeFaculty("Гуманитарный Факультет");
  
  // Повторное отображение всех факультетов
  myUniversity.displayFaculties();