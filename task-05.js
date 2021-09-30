/*
Kata Nível 8 kyu - Thinkful - Logic Drills: Traffic light
Você está escrevendo um código para controlar os semáforos da sua cidade.
Você precisa de uma função para lidar com cada mudança
de verde para amarelo, para vermelho e, em seguida, para verde novamente.
Complete a função que recebe uma string como um argumento 
que representa o estado atual da luz e retorna 
uma string que representa o estado para o qual a luz deve mudar.
Por exemplo, updateLight('green') deve retornar 'yellow'.
Observações:
para que seja possível ter retorno visual dos testes 
recomendo utilizar as extensões abaixo do Vs Code.

- Quokka.js
- Quokka Statusbar Buttons
*/

function updateLight(currentLight) {
  const lights = ['green','yellow','red']
  let nextLight = '';
  lights.indexOf(currentLight) == lights.length - 1
    ? nextLight = lights[0]
    : nextLight = lights[lights.indexOf(currentLight) + 1]
  
  return nextLight;
}
// Teste 1 deve retornar "yellow"
{
  const sample = "green";
  console.log(updateLight(sample));
  console.log(assert(sample, "yellow"));
}
// Teste 2 deve retornar "red"
{
  const sample = "yellow";
  console.log(updateLight(sample));
  console.log(assert(sample, "red"));
}
// Teste 3 deve retornar "green"
{
  const sample = "red";
  console.log(updateLight(sample));
  console.log(assert(sample, "green"));
}
function assert(sample, expected) {
  return updateLight(sample) === expected ? "OK" : "Algo deu errado";
}