//Решение для тестового задания
//Элдияр Омуралиев
function returnMissingNumbers(arr) {
  //функция чтобы получить сумму всех элементов
  function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  //длина последовательности + 2 т.к отсутствуют 2 числа
  const length = 2 + arr.length;

  // общая сумма последовательности вместе с отсутствующими числами
  const totalAll = (length * (length + 1)) / 2;

  // общая сумма последовательности без отсутствующих числами
  const totalWithout = sumOfNumbers(arr);

  //сумма отсутствующих чисел
  const totalOfMissingNumbers = totalAll - totalWithout;
  //средняя сумма отсутствующих чисел
  const avgOfMissingNumbers = totalOfMissingNumbers / 2;

  //set т.к у него O(1) чтобы найти элемент
  const elements = new Set(arr);
  let firstMissingNumber;
  let secondMissingNumber;
  for (let i = 1; i <= length; i++) {
    //первое число он либо меньше либо равен средней отсутствующих чисел
    //если числа нет в первой половине значит он наш!
    if (!elements.has(i) && i <= avgOfMissingNumbers) {
      firstMissingNumber = i;
    } else if (!elements.has(i) && i > avgOfMissingNumbers) {
      secondMissingNumber = i;
    }
  }
  return [firstMissingNumber, secondMissingNumber];
}
//Вычислительная сложность данного решения O(n) по времени (Time Complexity),
//т.к мы проходимся по каждому элементу, т.е она пропорционально размеру массива. 
//И O(1) по пространственной сложности (Space complexity), т.к с увеличением массива
//использованная память оссобо не меняется.