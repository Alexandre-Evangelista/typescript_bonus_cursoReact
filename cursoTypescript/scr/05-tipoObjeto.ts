const objetoA:{
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;//pode colocar any ao inves do unknown 
    // Permite chaves adicionais com valores desconhecidos
} ={
    chaveA:"valorA",
    chaveB: "valorB",
};
objetoA.chaveA="novoValorA";
objetoA.chaveC="valorC";
objetoA.chaveD=123; // Adicionando uma chave adicional
console.log(objetoA);
