import { comentarios2 } from "../comentarios/comentariosTickets.js"

export const vistaPrueba= {
    template: `
    <div id="comentario"></div>
    `,
    script: () => {
      document.querySelector('#comentario').innerHTML = comentarios2.template
      comentarios2.script()
    }
}