// ? Task:Реализуй функцию getArrayProduct, которая получает массив чисел numbers и возвращает массив такого же размера, где numbers[i] равно произведению всех элементов массива справа и слева от этого элемента.

// Примечания:

// Начальный массив содержит не менее 2 элементов
// Массив содержит только положительные числа
// Числа могут повторяться
// Примеры:

// productArray([1,5,2]) === [10,2,5]

// The first element 10 is the product of all array's elements except the first element 1
// The second element 2 is the product of all array's elements except the second element 5
// The third element 5 is the product of all array's elements except the third element 2
// getArrayProduct([12,20]) === [20,12]

// The first element in array 20 is the product of all array's elements except the first element
// The second element 12 is the product of all array's elements except the second element


// Solution 1

// function getArrayProduct(numbers) {
//     let resArray = [];
   
//     for (let i = 0; i < numbers.length; i++) {
//         let multiElNumbers = 1;
//         for (let j = 0; j < numbers.length; j++) {
//             if (j !== i) multiElNumbers *= numbers[j];
//         }
//         resArray.push(multiElNumbers);
//     }
//     return resArray;
// }


function getArrayProduct(numbers) {
  let resArray = [];

  for (let i = 0; i < numbers.length; i++) {
      let multiElNumbers = 1;
      numbers.filter((el, j) => j !== i).map(item => multiElNumbers *= item);
      resArray.push(multiElNumbers);
  }
  return resArray;
}

console.log(getArrayProduct([1, 5, 2]));

// ! Explanation: for if push filter map 
