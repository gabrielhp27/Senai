let listadepeças = ["filtro de ar, roda, freio, vela"]


listadepeças.push("disco de freio")
listadepeças.push("motor")
listadepeças.push("amortecedor")


//console.log(listadepeças[2]) alterar ítem da lista pelo índice

if(listadepeças.length< 10){
    console.log("É possível cadastrar mais peças")
}

else{
    console.log("não é permitido cadastrar mais dados")
    }

let peso = 80
if(peso <100){
    console.log("a peça deve pesar no mínimo 100g")
}
else{
    console.log("a peça possui o peso adequado")
}

let nomepeça= "a"

if (nomepeça.length > 3){
    console.log("o nome da peça está adequado para o cadastro")
}
else if(nomepeça == 0){
    console.log("o nome da peça não pode ser vazio")
}
else{
    console.log("o nome da peça deve ter mais de 3 caracteres, digite o nome adequado")
}