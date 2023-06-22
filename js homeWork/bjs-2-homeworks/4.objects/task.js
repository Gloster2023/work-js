function Student(name, gender, age) {           //прототип
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Николай", "мужской", 22);
let student4 = new Student("Кирилл", "мужской", 20);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName                // название метода setSubject принимает аргумент (subjectName) и создает свойство subject,
                                            // куда передает входящий аргумент (subjectName)
}


Student.prototype.addMarks = function (...marks) {
    if(this.marks === undefined){               // если свойства undefined это означает отсутсвие свойства, поэтому присваеваем массив
        return ("студент отчислен")  
    } else {
        this.marks = this.marks.concat(marks);  // если есть, то соединяем текущий массив с новым
    }
}


Student.prototype.getAverage = function () {
    if(this.marks === undefined || this.marks.length === 0 ){       // проверяем, если массив с оценками не существуует или 
        return 0;                                                   // он пуст(длина равна 0), возвращаем 0
    } else {
        return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;   // иначе считаем среднее арифметическое 
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.reason = reason;
}
