function CalcularEdad(fecha) {
    fechaDate = new Date(fecha);
    fechaActual = new Date();
    return fechaActual.getFullYear() - fechaDate.getFullYear();
}
function TirandoFruta(frutaIngresada)
{
    let frutas = ["Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Pera", "Mango", "Kiwi", "Sandía", "Cereza"];
    for(let fruta of frutas )
    {
        console.log(frutas.join(", "));
    }
    let encontro = false
    let i = 0;
    while(encontro === false && i<frutas.length)
    {
        if(frutas[i] == frutaIngresada)
        {
            encontro = true;
        }
        i++;
    }
    if(encontro === false)
    {
        console.log(`No, no tenemos ${frutaIngresada}!`);
    }
    else if(encontro ===true)
    {
        console.log(`Sí, tenemos ${frutaIngresada}!`);
    }
}

function ComparandoDatosYTipos()
{

    console.log(10 == '10'); // true
    console.log(10 === '10'); // false
    console.log(typeof 10.6);
    console.log(true == 1);
    // con === compara tambien el tipo de dato, con == no.
}
function mostrarObjeto(objeto)
{
  for(const obj in objeto)
  {
    console.log(`${obj} : ${objeto[obj]}`);
  }
    
   
}

function duplicarArray(Arraynumeros)
{
    let ArrayDuplicado = [];
    let i = 0;
    let num = 1;
    while(i<Arraynumeros.length)
    {
        num  = Arraynumeros[i];
        ArrayDuplicado[i] = num * 2;
        i++;    
    }
    for(let numeroDup of ArrayDuplicado )
    {
        console.log(numeroDup);
    }
    return ArrayDuplicado;

}

function triangulo1()
{
    let triangulo = "*";
    let i = 0;
    do
    {
        console.log(triangulo);
        triangulo = triangulo + "*";
        i++;
    }while(i<5);
}
function crearPatron(numFilas) {
    let patron = "";
    for (let i = 0; i < numFilas; i++) {
      for (let j = 0; j < numFilas - i - 1; j++) {
        patron += "-";
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        patron += "*";
      }
      for (let l = 0; l < numFilas - i - 1; l++) {
        patron += "-";
      }
      patron += "\n";
    }
    return patron;
}

function nombreA(nombres) {

    let ArrayNombres = [];
    let ArrayNombresA = [];
    
    ArrayNombres = nombres.split(",");
    ArrayNombresA = ArrayNombres.filter(nombre => nombre.trim().toLowerCase().startsWith("a")); 

    let resultado = document.getElementById("resultado");

    for (let guardar of ArrayNombresA) {
        resultado.innerHTML += guardar + '<br>';
    }
}

function cortarTexto() {
    let resultado = document.getElementById('resultado');

    let texto = prompt("Ingresa un texto");

    let num = parseInt(prompt("Ingrese un numero"));

    resultado.innerHTML = texto.slice(0, num);
}

function separarString() {
    let resultado = document.getElementById('resultado');

    let elementos = prompt("Ingresa una lista de elementos separados por comas");

    const listaElementos = elementos.split(",");

    resultado.innerHTML = listaElementos.join(' - ');
}

function calcularRecaudacion() {
    let pedidoInput = prompt("Ingrese la lista de pedidos (nombre:total, nombre:total, ...):");

    if (pedidoInput === null || pedidoInput === "") {
        alert("Debe ingresar al menos un pedido.");
        return;
    }

    const pedidos = pedidoInput.split(",");

    let totalRecaudado = 0;

    for (const pedido of pedidos) {
        const partes = pedido.trim().split(":");
        if (partes.length === 2) {
            const nombre = partes[0].trim();
            const total = parseFloat(partes[1]);
            if (!isNaN(total)) {
                totalRecaudado += total;
            }
        }
    }

    document.getElementById("resultado").innerHTML = totalRecaudado.toFixed(2);
}

function obtenerEntradas() {
    const texto = prompt("Ingresa una cadena de texto:");

    if (texto === null  || texto === "") {
        alert("Debes ingresar una cadena de texto.");
        return;
    }

    const palabraAReemplazar = prompt("Ingresa la palabra que deseas reemplazar:");

    if (palabraAReemplazar === null || palabraAReemplazar === "") {
        alert("Debes ingresar la palabra a reemplazar.");
        return;
    }

    const palabraDeReemplazo = prompt("Ingresa la palabra de reemplazo:");

    if (palabraDeReemplazo === null || palabraDeReemplazo === "") {
        alert("Debes ingresar la palabra de reemplazo.");
        return;
    }

    const resultado = texto.replace(new RegExp(palabraAReemplazar, 'g'), palabraDeReemplazo);

    document.getElementById("resultado").textContent = resultado;
}