import { comentarios2 } from "../comentarios/comentariosTickets"
import { bd } from "../bd/bd-comentarios";
import { vistaPrueba } from "./vistaPrueba";

export const vistaComentarioTickets= {
    template: `<div class="d-flex">
    <h1>Comentarios</h1><button id="btnVolver" class="btn btn-link ms-auto"> Volver</button>
  </div>
  
  <h2 class="my-4">Código ticket: <span id="codigoTicket">123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
      <label for="comentario2" class="form-label">Comentario: </label>
      <textarea id="comentario2" class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input type="datetime-local" id="fecha" class="form-control w-25">
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>
    <div id="comentario"></div>
    `,
    script: () => {
        const codigoTd = document.getElementById('codigoTicket');
        const comentarioTextarea = document.getElementById('comentario2');
        const fechaInput = document.getElementById('fecha');

        document.getElementById('btnAñadirComentario').addEventListener('click', () => {
            const codigo = codigoTd.textContent;
            const fecha = fechaInput.value;
            const descripcion = comentarioTextarea.value;

            // Aquí puedes hacer lo que quieras con los valores capturados
            console.log('Código:', codigo);
            console.log('Fecha:', fecha);
            console.log('Descripción:', descripcion);

            const comentario = {
                codigo,
                fecha,
                contenido: descripcion,
                estado: 'Pendiente', // Agrega el estado si es necesario
            };

            bd.push(comentario);
            console.log('bd actualizado:', bd);

            // Actualizar la vistaPanel después de agregar el comentario
            document.querySelector('#comentario').innerHTML = vistaPrueba.template;
            vistaPrueba.script();
        });

        document.getElementById('btnVolver').addEventListener('click', () => {
            // Lógica para volver a la vista anterior
            console.log('Volver a la vista anterior');
        });
    }
}