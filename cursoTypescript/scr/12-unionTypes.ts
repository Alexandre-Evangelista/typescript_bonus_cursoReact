//retorna mais de um tipo de retorno
// Union Types
function addOrConcat(a:number|string,b:number|string) {
    if(typeof a ==="number"&& typeof b ==="number"){
        return a + b;
    }
    if(typeof a ==="string"&& typeof b ==="string"){
        return a + b;
    }
    return `Invalid parameters: ${typeof a}:${a} and ${typeof b}:${b}`;
};
console.log(addOrConcat(2,3)); // 5
console.log(addOrConcat('2','3'));
console.log(addOrConcat('2',3));
