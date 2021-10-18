/*

Kata Nível 8 kyu - The Feast of Many Beasts
Todos os animais estão dando uma festa! Cada animal está trazendo um prato. 
A regra é única: 
o prato deve começar e terminar com as mesmas letras do nome do animal. 
brow bear (animal) e bear claw (prato) seria invalido
pois o prato começa com a letra 'b' e termina com 'w' e 'w' não é
a letra final do nome do animal que é 'r'
Implemente a função feast abaixo que leva o nome do animal e prato como argumentos 
e retorna verdadeiro ou falso para indicar se o animal tem permissão 
para trazer o prato para o banquete.
beast (animal) e dish (prato) sempre serão strings em minúsculas e 
que cada um tenha pelo menos duas letras. 
beast (animal) e dish (prato) podem conter hífens e espaços, 
mas não aparecerão no início ou no final da string. Eles não conterão numerais.

*/

function feast(beast, dish) {
  const validDishAndAnimal =
    beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length - 1]);

  return validDishAndAnimal;
}

{
  // Teste 1 deve retornar true
  const [beast, dish] = ["great blue heron", "garlic naan"];
  const expected = true;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

{
  // Teste 2 deve retornar true
  const [beast, dish] = ["chickadee", "chocolate cake"];
  const expected = true;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

{
  // Teste 3 deve retornar false
  const [beast, dish] = ["brown bear", "bear claw"];
  const expected = false;
  console.log(feast(beast, dish));
  console.log(assert(beast, dish, expected));
}

function assert(beast, dish, expected) {
  return feast(beast, dish) === expected ? "OK" : "Algo deu errado";
}
