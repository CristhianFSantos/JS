/*

Kata Nível 8 kyu - Grasshopper - Personalized Message
Crie uma função que forneça uma saudação personalizada. 
Esta função leva dois parâmetros: name and owner. 
Use condicionais para retornar a mensagem adequada:
- Caso o name seja igual ao owner retorne -> 'Hello boss'
- Caso contrário retorne -> 'Hello guest'
*/

function greet(name, owner) {
    const messages = ['Hello boss','Hello guest']
    if (name != owner) return messages[1]
    return messages[0];
}

    
// Area de testes, não edite essa parte
// Utilize a extensão do Quokka para ter retorno visual dos testes
{
  // Teste 1 deve retornar 'Hello boss'
  const [name, owner] = ["Daniel", "Daniel"];
  console.log(greet(name, owner));
  console.log(assert(name, owner, "Hello boss"));
}
{
  // Teste 2 deve retornar 'Hello guest'
  const [name, owner] = ["Greg", "Daniel"];
  console.log(greet(name, owner));
  console.log(assert(name, owner, "Hello guest"));
}

function assert(name, owner, expected) {
  return greet(name, owner) === expected ? "OK" : "Algo deu errado";
}