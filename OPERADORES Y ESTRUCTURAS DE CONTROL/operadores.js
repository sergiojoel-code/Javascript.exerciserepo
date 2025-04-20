// OPERADORES

console.log(`----------------- Asignación -----------------`);
let num = 10;
console.log(`num: ${num}\n`);

// Asignación suma
console.log(`num: ${num} || num += 2 => ${(num += 2)}`);
// Asignación resta
console.log(`num: ${num} || num -= 2 => ${(num -= 2)}`);
// Asignación multiplicación
console.log(`num: ${num} || num *= 2 => ${(num *= 2)}`);
// Asignación exponencial
console.log(`num: ${num} || num **= 2 => ${(num **= 2)}`);
// Asignación división
console.log(`num: ${num} || num /= 2 => ${(num /= 2)}`);
// Asignación resto
console.log(`num: ${num} || num %= 2 => ${(num %= 2)}`);

console.log(`---------------- Comparación -----------------`);
let num1 = 20;
let num2 = 27;
console.log(`num1: ${num1}     num2: ${num2}\n`);

// Igual
console.log(`num1 == num2? => ${num1 == num2}`);
console.log(
  `'27' == num2? => ${"27" == num2} | Convierte tipos, comparación débil`
);
// No igual
console.log(`num1 != num2? => ${num1 != num2}`);
console.log(
  `'27' != num2? =>${"27" != num2} | Convierte tipos, comparación débil`
);
// Estricta
console.log(`num1 === num2? => ${num1 === num2}`);
console.log(
  `'27' === num2? => ${"27" === num2} | No convierte tipos, comparación fuerte`
);
// No igual estricto
console.log(`num1 !== num2? => ${num1 !== num2}`);
console.log(
  `'27' !== num2? => ${"27" !== num2} | No convierte tipos, comparación fuerte`
);

// Mayor que
console.log(`num1 > num2? => ${num1 > num2}`);
// Mayor o igual que
console.log(`num1 >= num2? => ${num1 >= num2}`);
// Menor que
console.log(`num1 < num2? => ${num1 < num2}`);
// Menor o igual que
console.log(`num1 <= num2? => ${num1 <= num2}`);

console.log(`---------------- Aritméticos -----------------`);
// Adicionales a las operaciones +, -, *, **, / y %, Javascript también tiene las siguientes operaciones:
let x = 2;
let y;
console.log(`x: ${x}    y: ${y}\n`);

// Incrementar
console.log(`++x => x = ${x}; y = ${++x}`);
// Decrementar
console.log(`--x => x = ${x}; y = ${--x}`);
// Unary negation => Regresa la negación del operando
console.log(`x => -x || x = ${x} => -x = ${-x}`);
// Unary plus => Intenta convertir el operando en número
console.log(`+x => x || x = ${-x} => +x = ${+x}`);
console.log(`+'x' => x || x = '27' => +x = ${+"27"}\n`);