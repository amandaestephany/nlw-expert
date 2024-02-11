const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      resposta: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para imprimir algo no console em JavaScript?",
      resposta: [
        "log()",
        "print()",
        "display()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual símbolo é usado para comentar uma única linha em JavaScript?",
      resposta: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para converter uma string em um número inteiro em JavaScript?",
      resposta: [
        "parseInt()",
        "toFloat()",
        "parseInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de várias linhas em JavaScript?",
      resposta: [
        "/* Este é um comentário */",
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      resposta: [
        "=",
        ":=",
        "==",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      resposta: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para concatenar arrays em JavaScript?",
      resposta: [
        "concat()",
        "combine()",
        "join()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
      resposta: [
        "7",
        "52",
        "Erro",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for(let resposta of item.resposta){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const correta = event.target.value == item.correta
        corretas.delete(item)
        if(correta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }