import { tickets } from "../bd/tickets";
import { vistaComentario } from "../vistas/vistaComentario"
// import { vistaComentarioTicket } from "./vistComentarioTicket";
import { vistaComentarioTickets } from "./vistaComentarioTickets";
import { vistaPrueba } from "./vistaPrueba";

export const vistaPanel = {
    template: //html
    `
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      </tbody>
    </table>
    <div><button id="nou-ticket" class="btn btn-danger" title="Nuevo ticket">Nuevo ticket</button></div>
    
    `,
    script: () => {
      let html = ``;
      let html2 = ``;
  
      tickets.forEach(element => {
          if (element.estado == 'Pendiente') {
              html += 
              `
              <tr class="tarea">
                  <td>${element.codigo}</td>
                  <td>${element.fecha}</td>
                  <td>${element.aula}</td>
                  <td>${element.grupo}</td>
                  <td>${element.ordenador}</td>
                  <td>${element.descripcion}</td>
                  <td>${element.alumno}</td>
                  <td>${element.estado}</td>
                  <td>
                      <button class="btn btn-success resolver" data-codigo="${element.codigo}" title="Resolver ticket">Resolver</button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="verComentario" class="btn btn-info" title="Ver comentarios">
                          <i class="bi bi-chat-left-text"></i>
                      </button>
                  </td>
                  <td> 
                      <div >
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${element.codigo}" title="Eliminar ticket">
                      <i class="bi bi-trash3"></i>
                    </button>
                    
                      </div>
                  </td>
              </tr>
              `;
          }
  
          if (element.estado == 'Resuelto') {
              html2 += 
              `
              <tr class="tarea">
                  <td>${element.codigo}</td>
                  <td>${element.fecha}</td>
                  <td>${element.aula}</td>
                  <td>${element.grupo}</td>
                  <td>${element.ordenador}</td>
                  <td>${element.descripcion}</td>
                  <td>${element.alumno}</td>
                  <td>${element.estado}</td>
                  <td>
                      <button class="btn btn-success" title="Resolver ticket" disabled>Resuelto</button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="verComentario" class="btn btn-info" title="Ver comentarios">
                          <i class="bi bi-chat-left-text"></i>
                      </button>
                  </td>
                  <td>
                      <div class="tarea">
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${element.codigo}" title="Eliminar ticket">
  <i class="bi bi-trash3"></i>
</button>

                    </div>
                  </td>
              </tr>
              `;
          }
      });
  
      document.querySelector('#tablaPendiente').innerHTML = html;
      document.querySelector('#tablaResuelto').innerHTML = html2;
  
      // Agregar listeners de eventos para los botones "Resolver"
      document.querySelectorAll('.resolver').forEach(resolverButton => {
          resolverButton.addEventListener('click', () => {
              // Obtener el código del ticket desde el atributo data-codigo
              const codigoTicket = resolverButton.getAttribute('data-codigo');
              
              // Encontrar el ticket en el array y cambiar su estado a "Resuelto"
              const ticketResuelto = tickets.find(ticket => ticket.codigo === codigoTicket);
              if (ticketResuelto) {
                  ticketResuelto.estado = 'Resuelto';
                  
                  // Volver a ejecutar el script para actualizar las tablas
                  vistaPanel.script();
              }
          });
      });
  
      document.querySelector('#nou-ticket').addEventListener('click', () => {
          document.querySelector('main').innerHTML = vistaComentario.template;
          vistaComentario.script();
      });
      document.querySelectorAll('#verComentario').forEach(elemento => {
        elemento.addEventListener('click', () => {
            document.querySelector('main').innerHTML = vistaPrueba.template;
            vistaPrueba.script();
        });
    });
    
      document.querySelectorAll('#comentarios').forEach(elemento => {
        elemento.addEventListener('click', () => {
            console.log('hola');
            document.querySelector('main').innerHTML = vistaComentarioTickets.template;
            vistaComentarioTickets.script();
        });
        
    });
    document.querySelectorAll('.eliminar').forEach((elemento) => {
      elemento.addEventListener('click', (e) => {
        console.log('Eliminar Ticket - Evento de clic disparado');
        
        // Obtener el código del ticket directamente desde el botón Eliminar
        const codigoTicket = elemento.getAttribute('data-codigo');
        console.log('codigoTicket', codigoTicket);
    
        // Filtrar el array para eliminar el ticket con el código correspondiente
        const index = tickets.findIndex((ticket) => ticket.codigo === codigoTicket);
        console.log('index', index);
    
        if (index !== -1) {
          tickets.splice(index, 1);
          console.log('Ticket eliminado:', codigoTicket);
          console.log('Tickets actualizados:', tickets);
          // Volver a ejecutar el script para actualizar las tablas
          vistaPanel.script();
        } else {
          console.log('Ticket no encontrado en el array');
        }
      });
    });
    
    
    

  
  
  
    
  }
    
  
}