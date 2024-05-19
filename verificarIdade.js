//Criando função para verificar a idade do usuário.

function verificarIdade (idade){
    if (idade >= 18){
        return "Usuário maior de idade.";
    }else {
        return "Usuário menor de idade.";
    };
};

console.log(verificarIdade (17));
