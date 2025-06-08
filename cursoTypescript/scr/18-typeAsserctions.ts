//fazer um type casting de um tipo para outro
//condicional
//recomendado
const body = document.querySelector("body");
if (body)body.style.background = "red";

//nao muto recomendado non-null assertion operator
// ! significa que o body nao pode ser null
const body2 = document.querySelector("body")!;
body2.style.background = "red";

//type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";
//usado quando tem certeza que o elemento existe