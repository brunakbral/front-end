var nomes=[];
//Insere no final do array
nomes.push("Antônio");
nomes.push("Carla");
nomes.push("Maria");

//Insere nomes no começo do array
nomes.unshift("Carlos");
nomes.unshift("Rosana");

//Remove o último nome do elemento array
nomes.pop();

//Remove o primeiro nome do array
nomes.shift();

//Remove o primeiro elemento e somente ele, eu coloco entra parênteses os nomes que desejo remover
//No caso abaixo escolhe remover os nomes na posição 0 e 1.
nomes.splice(0,1);

//Pega a posição em que se encontra esse elemento no array
console.log(nomes.indexOf("Carlos"));

//Lista os nomes em ordem crescente (sort) e em ordem decrescente
nomes.sort();
nomes.reverse();

