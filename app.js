const bloque = document.querySelectorAll(".bloque")
const prueba=document.querySelectorAll(".prueba")
const     h2 = document.querySelectorAll(".h2")
const     imagen1 = document.querySelectorAll(".imagen1")
const     imagen2=document.querySelectorAll(".imagen2")
const     minus=document.querySelectorAll(".minus")
const     plus=document.querySelectorAll(".plus")

// click h2 
//  quita activo de todos los bloques
// añade la clase activo a el bloque con la posicion del h2

// recorrer todos los h2
 h2.forEach (  (cadaH2 , i)=>{
     //asignando un click
     h2[i].addEventListener('click',()=>{
         //recorrer todos los bloques
         bloque.forEach((cadaBloque, i)=>{
             //quitar la clase activo a todos los bloques excepto el que se ha clicado
             bloque[i].classList.remove('activo')

         })
 bloque[i].classList.add('activo')

   })

 })


// click imagen
imagen1.forEach ((cadaImagen1,i)=>{
    //asignando un click
    imagen1[i].addEventListener("click",()=>{
        //recorrer todas las imagenes
        bloque.forEach((cadaBloque,i)=>{
            //quitar la clase activo a todos las imagenes excepto el que se ha clicado
            bloque[i].classList.remove('activo')
        });
        //añadir la clase activo al bloque que contiene la imagen
        bloque[i].classList.add('activo');
    });
    
});

// click imagen
imagen2.forEach ((cadaImagen2,i)=>{
    //asignando un click
    imagen2[i].addEventListener("click",()=>{
        //recorrer todas las imagenes
        bloque.forEach((cadaBloque,i)=>{
            //quitar la clase activo a todos las imagenes excepto el que se ha clicado
            bloque[i].classList.remove('activo')
        });
        //añadir la clase activo al bloque que contiene la imagen
        bloque[i].classList.add('desactivado')
    })
    
})






imagen1.forEach ((cadaImagen1,i)=>{
    //asignando un click
    imagen1[i].addEventListener("click",()=>{
        //recorrer todas las imagenes
        prueba.forEach((cadaPrueba,i)=>{
            //quitar la clase activo a todos las imagenes excepto el que se ha clicado
            prueba[i].classList.remove('activo')
        });
        //añadir la clase activo al bloque que contiene la imagen
        prueba[i].classList.add('desactivado');
    });
    
});

imagen2.forEach ((cadaImagen2,i)=>{
    //asignando un click
    imagen2[i].addEventListener("click",()=>{
        //recorrer todas las imagenes
        prueba.forEach((cadaPrueba,i)=>{
            //quitar la clase activo a todos las imagenes excepto el que se ha clicado
            prueba[i].classList.remove('desactivado')
        });
        //añadir la clase activo al bloque que contiene la imagen
        prueba[i].classList.add('activado');
    });
    
});

