function Ejercicio1()
{
    const id = document.getElementById('resultado');
    let fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento [YYYY/MM/DD]");
    let nombre = prompt("Ingrese su nombre:");
    const edad = CalculadoraDeEdad(fechaDeNacimiento);

    id.innerHTML = (`Hola ${nombre}, tienes ${edad} anios!`);
}
function Ejercicio2()
{
    const id = document.getElementById('resultado2');
    let frutaIngresada = prompt("Ingrese la fruta que quieres buscar");

    const msj = TirandoFruta(frutaIngresada);

    id.innerHTML = (msj);
}
function Ejercicio4()
{
    const id = document.getElementById('resultado4');
    const ciudad = YoObjeto();

    for(const propiedad in ciudad)
    {
      id.innerHTML +=  (`${propiedad} : ${ciudad[propiedad]} <br>`)   
      
    }
}

function Ejercicio5()
{
    const id = document.getElementById('resultado5')
    const ArrayNum = [2,3,5];

    const ArrayDoble = DobleDeElementos(ArrayNum);
    id.innerHTML = ArrayDoble;
}

function Ejercicio6A()
{
    let contador = 1;
    const id = document.getElementById('resultado6A');

    for(i=0; i < 5; i++)
    {
        for(j=0; j < contador; j++)
        {
            id.innerHTML += (`*`)
        }
        contador += 1;
        id.innerHTML +=(`<br>`)
        
    }
}

function Ejercicio6B()
{
    const id = document.getElementById('resultado6B');

    let guion;

    for(i=1; i<=5; i++)
    {
        guion += "-".repeat(5-i);
    }

    id.innerHTML = (guion);
}

function Ejercicio7()
{
    const id = document.getElementById('resultado7');
    let nombres = prompt("Ingrese una lista de nombres separados con ','");
    let arrayNombres = nombres.split(',');
    const resultado = arrayNombres.filter(palabra => palabra.startsWith('A') || palabra.startsWith('a'));
    id.innerHTML = (resultado);
}

function Ejercicio8()
{
    const id = document.getElementById("resultado8");
    
    const textoIngresado = prompt("Ingrese una oracion");
    const palabraARemplazar = prompt("Ingrese una palabra de la oracion anterior para reemplazar")
    const palabraDeRemplazo = prompt("Ingrese la palabra para remplazar");

    id.innerHTML = textoIngresado.replace(palabraARemplazar, palabraDeRemplazo);
    
}


function Ejercicio9()
{
    const id = document.getElementById("resultado9")

    const textoIngresado = prompt("Ingrese una palabra");
    const numero = prompt("Ingrese un numero");

    id.innerHTML = textoIngresado.slice(0,numero);
}

function Ejercicio10()
{
    const id = document.getElementById('resultado10');
    let elementos = prompt("Ingrese una lista de elementos separados con ','");
    id.innerHTML = elementos.replaceAll(",", "-");

   


}

