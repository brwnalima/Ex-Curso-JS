const pessoa = {
    nome: "André",
    característica: "chato",
    falar: () => {
        console.log(`O ${pessoa.nome} é ${pessoa.característica}.`) // Não está funcionando com o this.
    },
}

pessoa.falar()