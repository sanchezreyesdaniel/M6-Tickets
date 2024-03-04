import { bd } from "../bd/bd-comentarios.js";
import { comentario2 } from "./comentarioTickets.js";
export const comentarios2 = {
    template:`<div id="comentarios">Comentarios</div>`
    ,
    script:() =>{
        let html = ''
     
      bd.forEach(element => {
      
        html += comentario2(element.usuario,element.fecha,element.contenido)
      })
      document.querySelector('#comentarios').innerHTML = html
    }
}