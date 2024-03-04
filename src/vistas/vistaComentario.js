import { bd } from "../bd/bd-comentarios.js";
import { tickets } from "../bd/tickets.js";
import { comentarios } from "../componentes/comentarios.js"
import { vistaPanel } from "./vistaPanel.js";

export const vistaComentario= {
    template: `<div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto"> Volver</button>
  </div>
  
  <h2 class="my-4">Código ticket: <span>123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
    <label for="codigo" class="form-label">Código: </label>
    <input type="text" class="form-control mb-3" id="codigo">

    <label for="fecha" class="form-label">Fecha: </label>
    <input type="date" class="form-control mb-3" id="fecha">

    <label for="aula" class="form-label">Aula: </label>
    <input type="text" class="form-control mb-3" id="aula">

    <label for="ordenador" class="form-label">Ordenador: </label>
    <input type="text" class="form-control mb-3" id="ordenador">

    <label for="descripcion" class="form-label">Descripción: </label>
    <textarea class="form-control mb-3" id="descripcion" rows="3"></textarea>

    <label for="alumno" class="form-label">Alumno: </label>
    <input type="text" class="form-control mb-3" id="alumno">

    <label for="grupo" class="form-label">Grupo: </label>
    <input type="text" class="form-control mb-3" id="grupo">
    
   
    
    
    <div class="d-flex align-items-center">
        
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
    </div>
    </form>
    <div id="comentario"></div>
    `,
    script: () => {
        document.getElementById('btnAñadirComentario').addEventListener('click', () => {
            const codigo = document.getElementById('codigo').value;
            const fecha = document.getElementById('fecha').value;
            const aula = document.getElementById('aula').value;
            const ordenador = document.getElementById('ordenador').value;
            const descripcion = document.getElementById('descripcion').value;
            const alumno = document.getElementById('alumno').value;
            const grupo = document.getElementById('grupo').value;
            //const nuevoComentario = document.getElementById('nuevoComentario').value;
            

            // Aquí puedes hacer lo que quieras con los valores capturados
            console.log('Código:', codigo);
            console.log('Fecha:', fecha);
            console.log('Aula:', aula);
            console.log('Ordenador:', ordenador);
            console.log('Descripción:', descripcion);
            console.log('Alumno:', alumno);
            console.log('Grupo:', grupo);
            //console.log('Nuevo Comentario:', nuevoComentario);
            // const formattedFecha = fecha.split('-').reverse().join('/');
            // console.log('Fecha Comentario:', fechaComentario);
            const comentario = {
                codigo,
                fecha,
                aula,
                grupo,
                ordenador,
                contenido: descripcion,
                alumno,
                estado: 'Pendiente', // Agrega el estado si es necesario
            };
            tickets.push(comentario)
            console.log('bd actualizado:', bd);
            document.querySelector('#comentario').innerHTML = vistaPanel.template;
            vistaPanel.script();
            
        });
        
        
    }
}
