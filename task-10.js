/*

Kata Nível 8 kyu - Sort and Star

Você receberá um array de strings que devera ser classificado em ordem alfabética 
(diferencia maiúsculas de minúsculas e com base nos valores ASCII dos caracteres) e, 
em seguida, retornar o primeiro valor do array.

O valor retornado deve ser uma string e ter "***" entre cada uma de suas letras.

Você não pode remover ou adicionar elementos do array.
*/

function twoSort(stringArray) {
  const pattern = "***";
  const orderedArray = stringArray.sort();
  const firstItem = orderedArray[0];
  const firstItemArray = firstItem.split("");

  return firstItemArray.join(pattern);
}
{
  //Teste 1 deve retornar "b***i***t***c***o***i***n"
  const sample = ["bitcoin", "take", "over", "the", "world", "maybe", "who"];
  const expected = "b***i***t***c***o***i***n";
  console.log(twoSort(sample));

  console.log(assert(sample, expected));
}
{
  //Teste 2 deve retornar 'a***r***e'
  const sample = ["out", "random", "test", "cases", "turns", "are", "basic"];
  const expected = "a***r***e";
  console.log(twoSort(sample));
  console.log(assert(sample, expected));
}
{
  //Teste 3 deve retornar 'B***T***C'
  const sample = ["turns", "Bitcoin", "BTC"];
  const expected = "B***T***C";
  console.log(twoSort(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = twoSort(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
