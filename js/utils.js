function CalculadoraDeEdad(fechaDeNacimiento)
{
    let fechaActual = new Date();
    let fechaNacimientoDate = new Date(fechaDeNacimiento);
    let AniosActuales;

    if(fechaActual.getMonth() + 1 >= fechaNacimientoDate.getMonth() + 1 && fechaActual.getDay() >= fechaNacimientoDate.getDay())
    { 
        AniosActuales = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear() ;
    }
    else
    {
        AniosActuales = (fechaActual.getFullYear() - fechaNacimientoDate.getFullYear());
    }

    return AniosActuales;
}

function TirandoFruta(frutaIngresada)
{
    const Frutas = ["banana", "manzana", "durazno", "pera", "naranja", "pinia", "uva", "ceraza", "sandia", "kiwi"];
    console.log(Frutas);

    let mensaje = `No, no tenemos ${frutaIngresada}`;

    for(i = 0; i < Frutas.length; i++)
    {
        if(frutaIngresada == Frutas[i])
        {
            mensaje = `Si, si tenemos ${Frutas[i]}`;
        }
    }
    return mensaje;
}

function ComparandoDatosYTipos()
{
    if(10 == '10')
    {

    }
    if(10 === '10')
    {

    }   
}


function YoObjeto()
{
    const ciudad = 
    {
        nombre: "BuenosAires",
        fechaFundacion: "11 Junio de 1580",
        poblacion: 3120612,
        extension: "203 km2"
    }

    return ciudad;
}

function DobleDeElementos(ArrayNum)
{
    for(i=0; i < ArrayNum.length; i++)
    {
        ArrayNum[i] = ArrayNum[i] * 2;
    }
    return ArrayNum;
}

