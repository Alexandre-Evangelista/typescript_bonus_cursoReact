type MapStringsCallback = (item: string) => string;
export function mapStrings(array:string[],callBackFn:MapStringsCallback):string[]{
    const newArray:string[] = [];
    for(let i=0; i<array.length; i++){
        newArray.push(callBackFn(array[i]));
    }
    return newArray;
}
const arrayDeStrings = ["a", "b", "c","d"];
const abcMappesd= mapStrings(arrayDeStrings,(item)=>item.toUpperCase());
console.log(abcMappesd); // [ 'A', 'B', 'C', 'D' ]
