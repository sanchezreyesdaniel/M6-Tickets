import { bd } from "../bd/bd-comentarios";
export const comentario2= (usuario,fecha,contenido)=>
    {
       const  template= `
        <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: 
          <span id="usuario">${usuario}</span>
          <span id="fecha" class="ms-4">${fecha}</span>
          </h5>
        <p id="texto">${contenido}</p>
        </div>
      </div>
      
        
        `;
        return template;
        // script: () => {
        //     console.log('Hola desde bd.js')
        //     document.querySelector('#usuario').innerHTML=bd[0].usuario
        //     document.querySelector('#fecha').innerHTML=bd[0].fecha
        //     document.querySelector('#texto').innerHTML=bd[0].contenido

        //   }
    }
