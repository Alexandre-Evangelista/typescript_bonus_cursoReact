//funciona como um any mais seguro, pois não permite atribuir qualquer tipo de valor
//ele força vc a fazer o tipo de checking antes de usar a variavel
let z: unknown;
z=100;
z="Luiz";
z=true;
z="10";
const y=800;
if(typeof z ==="number")console.log(z+y); // 80000