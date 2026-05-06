// variables
const anadirProducto = document.querySelector('#agregarProducto')
const tabla = document.querySelector('#tabla')
const formulario = document.querySelector("#formulario");


// TODO: CAPTURAR LOS ELEMENTOS DEL DOM


const producto2 = [];//se rellena con lo que recojamos del localstorage si  no hay nada el local devuelve false 

/*

[
    {
        id:1,
        nombre:nombreproducto
        cantidad:1
    },
    {
        id:2,
        nombre:nombreproducto
        cantidad:1
    }
    {,
        id:3,
        nombre:nombreproducto
        cantidad:1
    }
    {
        id:4,
        nombre:nombreproducto
        cantidad:1
    },

]

*/

// eventos

    // submit

        // recoja y valide los datos del formulario
        //  amacenar el dato en el local -> llamamos a la función pasandole el dato validado
        // pintar la tabla
                //recoger los datos del localstorage (ejecutar la función que retorna el JSON)
formulario.addEventListener("submit", (ev) => {
    ev.preventDefault()
 const producto = ev.target.producto.value 
 getDataForm(producto)
 
})

    // click en eliminar
        // capturar el id del producto 
        // comprobar si cantidad sea uno -> elimino el producto 
        // si no , decremento cantidad en uno en el producto
//         // y actualizamos el local 

// //funciones


//     // recoga los datos del formulario
    const getDataForm=(producto)=>{
        
        almacenarProductos(producto)
//         // valide el formulario
//         // si el dato de formulario no es válido resolver el error
//         // si el dato si es válido guardar en local storage 
//         const produc

    }

    const getLocalData=()=>{
//          //usar el metodo de localstarage que recoja datos y los transform a u n JOSN
//          //retirna dataos
        const productos = localStorage.getItem("item")||[]
        return productos
    }

    
    // pintar producto en la tabla

    // recoger los datos del localstorage
            // retorna el JSON tranformado del localstorage

    // almacenar los datos en el localstorage
    const setStorage = (producto) =>{
    localStorage.setItem("item", producto)
    }
    const almacenarProductos = (producto)=>{
       const arrayProductos = getLocalData()
        console.log(productos);
    }
        // comprueba si el producto ya exise 
        // //-> si si existe incrementa en uno la cantidad 
        // //- > si no existe crea el nuevo producto
        /*
          {
                id:4,-> se crea automaticamento (mirar el objeto Date)
                nombre:valor del formulario
                cantidad:1
            },
        */ 
        // // -> se añade al array existente (en el localstorage)
            // const array=[
            //     los objetos que ya existen
            //     añadir el nuevo
            // ]
        // // -> volve a añadir al local el array nuevo





