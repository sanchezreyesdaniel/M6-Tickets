import { bd } from "../bd/bd-comentarios.js";
import { tickets } from "../bd/tickets.js";
import { comentario } from "./comentario.js";
export const comentarios = {
    template:`<div id="comentarios">Comentarios</div>`
    ,
    script:() =>{
        let html = ''
     
      tickets.forEach(element => {
      
        html += comentario(element.alumno,element.fecha,element.contenido,element.aula,element.codigo,element.contenido,element.estado,element.ordenador,element.grupo)
      })
      document.querySelector('#comentarios').innerHTML = html
    }
}