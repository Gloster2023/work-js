// __________________функция фильтрует имена из 4 символов________________
function friend (friends){
    return  friends.filter(item => item.length ===4);
}
// ___________-функция проверяетвозможен ли такой треугольник___________________
function isTriangle (a,b,c){
    if ((a + b) > c && (a + c) > b && (b + c) > a){
    return true
    }else{
    return false
    }
}

// _____________функция ищет иглу в стоге сена_________________

function findNeedle(haystack){
    return ("found the needle at position  ") + haystack.indexOf("needle")
}

// _____________сумма всех положительных чисел массива___________________
function positiveSum(arr){
    let arr2 = [];
   arr2 = arr.filter(item => item > 0)
   return arr2.reduce((a,b)=>a+b,0)// складывает все числа в массиве
}

// ___________________-функция считает кол-во положительных элементов и  сумму отприцательных_____________________


function countPositivesSumNegatives(input) {
    let positiveNums = 0;// задаем переменные 
    let negativeNums = 0;
    if (input === null || input.length === 0) {// провеекана ноль и возврат пустого массива
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num)// если массив не пустой проходим массив по элементам(num) через fprEach
    }                                                                       // для каждого элемента применяем тернарный оператор и применяем выражения через :
    return [positiveNums , negativeNums];
}

// __________________вернуть максимальное и минимальное значения из строки__________________

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);// создает новый массив из строки numbers, разделяя символы пробелом и превращая каджый символ в цифру
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);// возвращает мах.apply(от нуля по массиву) плюс min.apply(от нуля по массиву)
  }


//   ____________________________________________________

// Здесь переменная key может быть вычислена во время выполнения кода или зависеть от 
// пользовательского ввода. После этого мы используем её для доступа к свойству. Это даёт нам большую гибкость.


let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
  // доступ к свойству через переменную
  alert( user[key] ); // John (если ввели "name")

//   ______________________________________________________________________________