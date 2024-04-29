//Cree una función JS que acepte 4 argumentos. 
//Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
//Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
//Si es más pequeño, la consola registra "¡El número es menor que 50!"


function sumaParesMultiplicaResultados(a, b, c, d) { //Generamos la función con los 4 argumentos solicitados
   
    const suma1 = a + b;                             //Asignamos la suma de los 2 primeros argumentos a suma1. 

    const suma2 = c + d;                              //Asignamos la suma de los argumentos 3 y 4 a suma2.

    const resultado = suma1 * suma2;                  //En la constante resultado depositamos el producto de ambas sumas previas.

    if (resultado > 50) {                             //A través de este condicional determinamos si el resultado es mayor o menor que 50,
        console.log("El número es mayor que 50!");    //y lo mostramos en pantalla a través de un mensaje.
    } else {
        console.log("El número es menor que 50!");
    }
}

sumaParesMultiplicaResultados(0,7,0,0)                //Ejecutamos la función creada, alimentándola con sus argumentos para que funcione
                                                      //correctamente.
