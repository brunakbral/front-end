//tratamentos de erro:

try{
    let preco = -1;

    if (preco < 0){
        throw new Error("Valor inválido!");
    }

    console.log(preco);
} catch (error) {
    console.log("Erro! Programa abortado!");
    console.log("Erro: " + error.message);
}finally{
    console.log("Programa finalizado com sucesso!");
}