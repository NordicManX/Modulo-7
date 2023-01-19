function funcao1()
{

let a = parseInt(document.getElementById("campo-a").value); //parseInt() para converter para numeros inteiros
let b = parseInt(document.getElementById("campo-b").value);
console.log(isNumeric(a))
console.log(b)


if( (a !== "" && b !== "" )||( a !== NaN && b !== NaN) ){// se os valores vierem diferente de vazio.
if (a > b){
  alert("!Erro!");

}else if(a < b){
  alert("OK! o campo B é maior que o campo A ");

   }else if(a==b){
  alert("Digite os numeros diferentes nessa jossa, os números são iguais kakakakakaka!!!!");
   }
}else if (a === 0 && b === 0){
alert(" 0 ==== 0 Então digite numeros inteiros kakakakakaka!!!!");

}
if(isNumeric(a)===false && isNumeric(b)===false){
alert("Digite os numeros nessaa jossa kakakakakaka!!!!");
}

document.getElementById('campo-a').value='' // limpar os formularios
document.getElementById('campo-b').value=''

}

function isNumeric(str) {/// só pra validar se é numerico
  let er = /^[0-9]+$/;
  return (er.test(str));
}

