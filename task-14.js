/*
Kata Nível 8 kyu - Well of Ideas - Easy Version

Para cada boa ideia de kata, parece haver algumas más!

Neste kata, você precisa verificar o array fornecido (x) 
para boas ideias 'good' e más ideias 'bad'.

- Se houver uma ou duas boas ideias, retorne 'Publish!', 
Se houver mais de 2 boas ideias retorne 'I smell a series!'.
Se não houver boas ideias, como costuma ser o caso, retorne 'Fail!'.

*/

function well(ideas) {
  const goodIdeas = ideas.filter((idea) => idea === "good");

  ideasClassifier = [
    {
      condition: (goodIdeas) => goodIdeas == 0,
      message: "Fail!",
    },
    {
      condition: (goodIdeas) => goodIdeas == 1 || goodIdeas == 2,
      message: "Publish!",
    },
    {
      condition: () => true,
      message: "I smell a series!",
    },
  ];

  const trueCondition = ideasClassifier.find((amountOfIdeas) =>
    amountOfIdeas.condition(goodIdeas.length)
  );

  return trueCondition.message;
}

{
  // Teste 1 deve retornar Fail!
  const sample = ["bad", "bad", "bad"];
  const expected = "Fail!";
  console.log(well(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar Publish!
  const sample = ["good", "bad", "bad", "bad", "bad"];
  const expected = "Publish!";
  console.log(well(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 3 deve retornar Publish!
  const sample = ["good", "good", "bad", "bad", "bad", "bad"];
  const expected = "Publish!";
  console.log(well(sample));
  console.log(assert(sample, expected));
}

{
  // Teste 4 deve retornar I smell a series!
  let sample = [];
  const expected = "I smell a series!";
  for (let index = 0; index < 3; index++) sample.push("good");
  for (let index = 0; index < 6; index++) sample.push("bad");
  console.log(sample);
  console.log(well(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = well(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
