//Componentes
//Una funcion que retorna JSX.


// import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider"


// function App() {    //FUNCION 
// return (   // RETORNO
    //    <>    NOS DEVUELVE UN JSX
    //EL NAVBAR Y CUERPO ES EL LLAMADO A LA FUNCION QUE TENGO EN OTRO LADO Y QUE ESTOY IMPORTANDO (SIEMPRE EN JSX)
    
    //    <NavBar/>   ESTE ES EL LLAMADO Y DENTRO DE NavBar.jsx esta el componente (en la jerga todo es componente)
    //    <Cuerpo/>
    //    </>
    // )
    // }


    //EL COMPONENTE ES EL LLAMADO A MI FUNCION


    //QUE NOS RESULEVE CONSTRUIR EN FORMA MODULAR ?
    //CREAS UN COMPONENTE CON UNA SOLA CARD Y DE ALGUNA FORMA LA VAMOS REPITIENDO Y  CAMBIAMOS EL CONTENIDO (PRECIO, IMAGEN, PORCENTAJE DE DESCUENTO, ETC)
    //Y ADEMAS SE PUEDE MODULARIZAR.

    //HACEMOS UNA SOLA TARJETA/CARD Con diferente info. (VER COMO SE HACE!!!)
    
    
    //VENTAJAS DEL ENFOQUE MODULARIZAR 

    
    
    
    //COMPONENTES - 

    



    // USAMOS TERNARIO SOLAMENTE PORQUE USAMOS COSAS QUE TENGAN RETORNO MUY IMPORTANTE.
    
    //COMPONENTES SON FUNCIONES Y SE PUEDEN AGREGAR AL DESTRUCTURING   MUY IMPORTANTE

// COMPOENTE A PROP SE PUEDE PORQUE ES FUNCION 


// SE PUEDE PONER IF EN JSX?   NO !!!  
// SE UTILIZA TERNARIO, COSAS QUE TENGAN RETORNO SOLAMENTE, EL TERNARIO TIENE UN RETURN IMPLICITO
//?
//:



//COMPONENTES DE PRESENTACION 
// SE LIMITAN A MOSTRAR DATOS Y TIENEN POCA O NULA O POCA LOGICA ASOCIADA A MANIPULACION DEL ESTADO/STATELESS




//APP ES COMPONENTE CONTENEDOR 
//RESTO DE LOS COMPONENTES (MENU, FORMULARIO, TITULO) SON PRESENTACIONALES.

//UN COMPONENTE HACE UNA SOLA COSA.
//




//HAY DOS TIPOS DE CIERR DE ETIQUETA

// <div/> 

//Cuando cerramos de una manera o de otra?

// Cuando un elemetno sea contenedor vamos a cerrarla con el doble cierre
// ejemplo

// y por que?

// porque va a contener cosas adentro
// <div>

//<img/> 


// </div> 



// Class 4

// Un hook es un gancho y no deja de ser una funcion

// https://stackblitz.com/

// VIMOS DOS COSAS 

//Entregamos el TP 4 de la clase 4
// useState PARA HACER MIS DATOS PERSISTENTES, ES UN HOOK QUE EL ESTADO SE MANTENGA
// useEffect ME MODIFICA LA FUNCION ANTES O DEPSUES DE QUE SE DISPARE EL COMPONENTE,

// import { useEffect, useState } from "react";



// CLASE 5

// PROMISE

// Promesas para retornar funciones donde podemos poner funciones asicronicas

//Es como la vida real, por ejemplo:
//Prestas dinero, porque te piden (y esa persona tiene una promise de pago.)
//Y tenemos la esperanza de que nos devuelvan el dinero (pendiente)




// Primise y pending
//Te hacen una "promise" 
//queda "pending"

//REJECTED  (DENEGADO NO TE PAGAN DIGAMOS)

// PROMISE   (PROMESA DE PAGO)    EN ESTE MOMENTO TENEMOS     PENDING || REJECTED

//sincronico es que tiras una linea de codigo y hay que esperar a que se resuelva de arriba para bajo va la sincronia.

//Asincronico es: al reves jaja



// Clase de Promise

// Async y await ES SUGAR SINTAX DE PROMISE, ES LO MISMO


// GARANTIAS DE UNA Promise

// TODAS LAS TAREAS ASINCRONICAS LAS CORRE A UN COSTADO DEJANDO QUE LAS TAREAS SINCRONICAS SIGAN EJECUTANDOSE Y UNA VEZ RESULTAS LAS ASINCRONICAS LAS PONE ABAJO DE LAS SINCRONICAS.
//TODO DEPENDE DEL TIEMPO.
//SINO SE DEMORA LO MANDA IGUAL A LO ULTIMO.
